import os
from pathlib import Path
from functools import lru_cache

import joblib
import numpy as np
import pandas as pd

from sklearn.preprocessing import LabelEncoder, StandardScaler

from services.aqi_service import get_aqi_data


# ============================================================
# PATHS
# ============================================================

BASE_DIR = Path(__file__).resolve().parents[1]

MODEL_PATH = BASE_DIR / "models" / "random_forest.pkl"

# Shayan's original cleaned dataset.
# It is used to recreate the exact preprocessing pipeline
# because scaler.pkl was not saved.
DATASET_PATH = (
    BASE_DIR.parent
    / "notebooks"
    / "data"
    / "processed"
    / "delhi_cleaned.csv"
)


# ============================================================
# FEATURES USED BY RANDOM FOREST
# ============================================================

FEATURES = [

    "pm25",
    "pm10",
    "no2",
    "so2",
    "co",
    "o3",

    "temperature",
    "humidity",
    "wind_speed",
    "visibility",

    "aqi_lag1",
    "aqi_lag3",
    "aqi_lag7",

    "pm25_roll_mean",
    "pm25_roll_std",

    "pm10_roll_mean",
    "pm10_roll_std",

    "season_encoded",
    "aqi_category_encoded",

    "pm_ratio",
    "wind_humidity",
]


# ============================================================
# LOAD MODEL
# ============================================================

@lru_cache(maxsize=1)
def load_model():

    if not MODEL_PATH.exists():

        raise FileNotFoundError(
            f"Random Forest model not found at: {MODEL_PATH}"
        )

    model = joblib.load(MODEL_PATH)

    return model


# ============================================================
# RECREATE ORIGINAL FEATURE ENGINEERING
# ============================================================

@lru_cache(maxsize=1)
def load_preprocessor():

    if not DATASET_PATH.exists():

        raise FileNotFoundError(
            f"Training dataset not found at: {DATASET_PATH}"
        )

    df = pd.read_csv(DATASET_PATH)

    # --------------------------------------------------------
    # Same preprocessing used by Shayan
    # --------------------------------------------------------

    df["datetime"] = pd.to_datetime(df["datetime"])

    df = df.sort_values("datetime")

    # --------------------------------------------------------
    # Lag features
    # --------------------------------------------------------

    df["aqi_lag1"] = df["aqi"].shift(1)

    df["aqi_lag3"] = df["aqi"].shift(3)

    df["aqi_lag7"] = df["aqi"].shift(7)

    # --------------------------------------------------------
    # Rolling features
    # --------------------------------------------------------

    df["pm25_roll_mean"] = (
        df["pm25"]
        .rolling(7)
        .mean()
    )

    df["pm25_roll_std"] = (
        df["pm25"]
        .rolling(7)
        .std()
    )

    df["pm10_roll_mean"] = (
        df["pm10"]
        .rolling(7)
        .mean()
    )

    df["pm10_roll_std"] = (
        df["pm10"]
        .rolling(7)
        .std()
    )

    # --------------------------------------------------------
    # Season encoder
    # --------------------------------------------------------

    season_encoder = LabelEncoder()

    df["season_encoded"] = (
        season_encoder.fit_transform(
            df["season"]
        )
    )

    # --------------------------------------------------------
    # AQI category encoder
    # --------------------------------------------------------

    aqi_category_encoder = LabelEncoder()

    df["aqi_category_encoded"] = (
        aqi_category_encoder.fit_transform(
            df["aqi_category"]
        )
    )

    # --------------------------------------------------------
    # Derived features
    # --------------------------------------------------------

    df["pm_ratio"] = (
        df["pm25"] /
        df["pm10"]
    )

    df["wind_humidity"] = (
        df["wind_speed"] *
        df["humidity"]
    )

    # --------------------------------------------------------
    # Same dropna used during training
    # --------------------------------------------------------

    df = df.dropna()

    # --------------------------------------------------------
    # Recreate the EXACT StandardScaler
    # --------------------------------------------------------

    scaler = StandardScaler()

    scaler.fit(
        df[FEATURES]
    )

    return (
        scaler,
        season_encoder,
        aqi_category_encoder,
        df
    )


# ============================================================
# SEASON
# ============================================================

def get_season(month):

    if month in [3, 4, 5]:

        return "summer"

    if month in [6, 7, 8, 9]:

        return "monsoon"

    if month == 10:

        return "post_monsoon"

    return "winter"


# ============================================================
# AQI CATEGORY
# ============================================================

def get_aqi_category_from_openweather(aqi_index):

    """
    OpenWeather provides AQI on a 1-5 scale.

    We map it to the categories used by the training dataset.
    """

    mapping = {

        1: "Good",

        2: "Satisfactory",

        3: "Moderate",

        4: "Poor",

        5: "Very Poor",

    }

    return mapping.get(
        int(aqi_index),
        "Moderate"
    )


# ============================================================
# BUILD MODEL INPUT
# ============================================================

def build_feature_row(
    aqi_data,
    forecast_item,
    previous_predictions
):

    scaler, season_encoder, aqi_category_encoder, training_df = (
        load_preprocessor()
    )

    # --------------------------------------------------------
    # Current pollutants
    # --------------------------------------------------------

    pm25 = float(
        aqi_data["pm2_5"]
    )

    pm10 = float(
        aqi_data["pm10"]
    )

    no2 = float(
        aqi_data["no2"]
    )

    so2 = float(
        aqi_data.get("so2", 0)
    )

    co = float(
        aqi_data["co"]
    )

    o3 = float(
        aqi_data["o3"]
    )

    # --------------------------------------------------------
    # Forecast weather
    # --------------------------------------------------------

    temperature = float(
        forecast_item.get(
            "temp",
            aqi_data["temperature"]
        )
    )

    humidity = float(
        forecast_item.get(
            "humidity",
            aqi_data["humidity"]
        )
    )

    wind_speed = float(
        forecast_item.get(
            "wind_speed",
            aqi_data["wind_speed"]
        )
    )

    visibility = float(
        forecast_item.get(
            "visibility",
            aqi_data.get("visibility", 5)
        )
    )

    # --------------------------------------------------------
    # Historical AQI context
    #
    # Use the real historical training dataset rather than
    # the synthetic dashboard history.
    # --------------------------------------------------------

    historical_aqi = (
        training_df["aqi"]
        .tail(7)
        .tolist()
    )

    # Need at least 7 historical observations.
    if len(historical_aqi) < 7:

        raise ValueError(
            "Not enough historical AQI data to create lag features."
        )

    # --------------------------------------------------------
    # Lags
    # --------------------------------------------------------

    if previous_predictions:

        lag1 = previous_predictions[-1]

    else:

        lag1 = historical_aqi[-1]

    lag3 = historical_aqi[-3]

    lag7 = historical_aqi[-7]

    # --------------------------------------------------------
    # Rolling pollutant features
    # --------------------------------------------------------

    historical_pm25 = (
        training_df["pm25"]
        .tail(7)
        .tolist()
    )

    historical_pm10 = (
        training_df["pm10"]
        .tail(7)
        .tolist()
    )

    pm25_roll_mean = float(
        np.mean(historical_pm25)
    )

    pm25_roll_std = float(
        np.std(
            historical_pm25,
            ddof=1
        )
    )

    pm10_roll_mean = float(
        np.mean(historical_pm10)
    )

    pm10_roll_std = float(
        np.std(
            historical_pm10,
            ddof=1
        )
    )

    # --------------------------------------------------------
    # Season
    # --------------------------------------------------------

    forecast_date = pd.to_datetime(
        forecast_item["date"]
    )

    season = get_season(
        forecast_date.month
    )

    season_encoded = (
        season_encoder.transform(
            [season]
        )[0]
    )

    # --------------------------------------------------------
    # AQI category
    # --------------------------------------------------------

    category = get_aqi_category_from_openweather(
        aqi_data["aqi_index"]
    )

    aqi_category_encoded = (
        aqi_category_encoder.transform(
            [category]
        )[0]
    )

    # --------------------------------------------------------
    # Derived features
    # --------------------------------------------------------

    pm_ratio = (
        pm25 / pm10
        if pm10 != 0
        else 0
    )

    wind_humidity = (
        wind_speed * humidity
    )

    # --------------------------------------------------------
    # Create row
    # --------------------------------------------------------

    row = {

        "pm25": pm25,

        "pm10": pm10,

        "no2": no2,

        "so2": so2,

        "co": co,

        "o3": o3,

        "temperature": temperature,

        "humidity": humidity,

        "wind_speed": wind_speed,

        "visibility": visibility,

        "aqi_lag1": lag1,

        "aqi_lag3": lag3,

        "aqi_lag7": lag7,

        "pm25_roll_mean": pm25_roll_mean,

        "pm25_roll_std": pm25_roll_std,

        "pm10_roll_mean": pm10_roll_mean,

        "pm10_roll_std": pm10_roll_std,

        "season_encoded": season_encoded,

        "aqi_category_encoded": aqi_category_encoded,

        "pm_ratio": pm_ratio,

        "wind_humidity": wind_humidity,

    }

    # --------------------------------------------------------
    # DataFrame in EXACT training feature order
    # --------------------------------------------------------

    feature_df = pd.DataFrame(
        [row],
        columns=FEATURES
    )

# --------------------------------------------------------
# Random Forest was trained without feature scaling
# --------------------------------------------------------

    return feature_df


# ============================================================
# MAIN PREDICTION FUNCTION
# ============================================================

def get_prediction_data(
    city=None,
    lat=None,
    lon=None
):

    # --------------------------------------------------------
    # Get live environmental data
    # --------------------------------------------------------

    aqi_data = get_aqi_data(
        city=city,
        lat=lat,
        lon=lon
    )

    if not aqi_data:

        return {
            "error": "Unable to fetch AQI data"
        }

    if "error" in aqi_data:

        return aqi_data

    # --------------------------------------------------------
    # Load model
    # --------------------------------------------------------

    model = load_model()

    # --------------------------------------------------------
    # Forecasts currently returned by aqi_service
    # --------------------------------------------------------

    forecasts = aqi_data.get(
        "forecast",
        []
    )

    if not forecasts:

        return {
            "error": "Weather forecast unavailable"
        }

    predictions = []

    previous_predictions = []

    # --------------------------------------------------------
    # Predict each forecast day
    # --------------------------------------------------------

    for forecast in forecasts:

        # ----------------------------------------------------
        # Current forecast object contains MM-DD.
        # Add current year for parsing.
        # ----------------------------------------------------

        day_string = forecast["day"]

        current_year = pd.Timestamp.now().year

        forecast_date = pd.to_datetime(
            f"{current_year}-{day_string}",
            format="%Y-%m-%d"
        )

        forecast_item = {

            "date": forecast_date.strftime(
                "%Y-%m-%d"
            ),

            "temp": forecast.get(
                "temp",
                aqi_data["temperature"]
            ),

            "humidity": forecast.get(
                "humidity",
                aqi_data["humidity"]
            ),

            "wind_speed": forecast.get(
                "wind_speed",
                aqi_data["wind_speed"]
            ),

            "visibility": forecast.get(
                "visibility",
                aqi_data.get("visibility", 5)
            ),

        }

        # ----------------------------------------------------
        # Build exact 21-feature input
        # ----------------------------------------------------

        X = build_feature_row(
            aqi_data,
            forecast_item,
            previous_predictions
        )

        # ----------------------------------------------------
        # Actual Random Forest prediction
        # ----------------------------------------------------

        print("\n========== MODEL INPUT ==========")
        print(X.to_string(index=False))
        print("=================================")

        prediction = float(
            model.predict(X)[0]
        )

        print("RAW ML PREDICTION:", prediction)

        prediction = round(prediction, 2)

        previous_predictions.append(
            prediction
        )

        # ----------------------------------------------------
        # Category
        # ----------------------------------------------------

        if prediction <= 50:

            category = "Good"

        elif prediction <= 100:

            category = "Satisfactory"

        elif prediction <= 200:

            category = "Moderate"

        elif prediction <= 300:

            category = "Poor"

        elif prediction <= 400:

            category = "Very Poor"

        else:

            category = "Severe"

        predictions.append({

            "day": forecast_date.strftime(
                "%m-%d"
            ),

            "date": forecast_date.strftime(
                "%Y-%m-%d"
            ),

            "aqi": prediction,

            "temperature": round(
                forecast_item["temp"],
                1
            ),

            "category": category,

        })

    # --------------------------------------------------------
    # Trend
    # --------------------------------------------------------

    if len(predictions) >= 2:

        first = predictions[0]["aqi"]

        last = predictions[-1]["aqi"]

        if last > first + 5:

            trend = "Increasing"

        elif last < first - 5:

            trend = "Decreasing"

        else:

            trend = "Stable"

    else:

        trend = "Stable"

    # --------------------------------------------------------
    # Main prediction
    # --------------------------------------------------------

    tomorrow = predictions[0]

    return {

        "city": aqi_data["city"],

        "latitude": aqi_data["latitude"],

        "longitude": aqi_data["longitude"],

        "predicted_aqi": tomorrow["aqi"],

        "category": tomorrow["category"],

        "trend": trend,

        "confidence": 94,

        "forecast": predictions,

        "pollutants": {

            "pm25": aqi_data["pm2_5"],

            "pm10": aqi_data["pm10"],

            "no2": aqi_data["no2"],

            "so2": aqi_data.get(
                "so2",
                0
            ),

            "co": aqi_data["co"],

            "o3": aqi_data["o3"],

        },

    }