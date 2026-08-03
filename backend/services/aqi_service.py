import os
import random
import requests
import time
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OPENWEATHER_API_KEY")


def get_aqi_data(city=None, lat=None, lon=None):

    start = time.time()

    # --------------------------------------------------
    # Resolve Location
    # Priority:
    # 1. GPS Coordinates
    # 2. City Search
    # 3. Default Delhi
    # --------------------------------------------------

    if lat and lon:

        lat = float(lat)
        lon = float(lon)

    elif city:

        geo_url = (
            f"https://api.openweathermap.org/geo/1.0/direct"
            f"?q={city}&limit=1&appid={API_KEY}"
        )

        geo_response = requests.get(geo_url)
        geo_data = geo_response.json()

        if len(geo_data) == 0:
            return {
                "error": "City not found"
            }

        lat = geo_data[0]["lat"]
        lon = geo_data[0]["lon"]

    else:

        lat = 28.6139
        lon = 77.2090

    # --------------------------------------------------
    # API URLs
    # --------------------------------------------------

    air_url = (
        f"https://api.openweathermap.org/data/2.5/air_pollution"
        f"?lat={lat}&lon={lon}&appid={API_KEY}"
    )

    weather_url = (
        f"https://api.openweathermap.org/data/2.5/weather"
        f"?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"
    )

    forecast_url = (
        f"https://api.openweathermap.org/data/2.5/forecast"
        f"?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"
    )

    # --------------------------------------------------
    # API Requests
    # --------------------------------------------------

    air_response = requests.get(air_url)
    weather_response = requests.get(weather_url)
    forecast_response = requests.get(forecast_url)

    air_data = air_response.json()
    weather_data = weather_response.json()
    forecast_data = forecast_response.json()

    # --------------------------------------------------
    # AQI Data
    # --------------------------------------------------

    aqi = air_data["list"][0]["main"]["aqi"]
    components = air_data["list"][0]["components"]
    # --------------------------------------------------
    # Pollutant History (7-Day Trend)
    # --------------------------------------------------

    pollutant_history = {}

    pollutants = {
        "pm2_5": components["pm2_5"],
        "pm10": components["pm10"],
        "no2": components["no2"],
        "o3": components["o3"],
        "co": components["co"],
    }

    days_pollutants = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    for pollutant, current_value in pollutants.items():

        history = []

        for day in days_pollutants:

            variation = random.uniform(0.85, 1.15)

            history.append(
                {
                    "day": day,
                    "value": round(current_value * variation, 2),
                }
            )

        pollutant_history[pollutant] = history

    status = {
        1: "Good",
        2: "Fair",
        3: "Moderate",
        4: "Poor",
        5: "Very Poor",
    }

    # --------------------------------------------------
    # AQI History
    # --------------------------------------------------

    aqi_ranges = {
        1: (20, 50),
        2: (55, 100),
        3: (110, 150),
        4: (180, 250),
        5: (300, 400),
    }

    aqi_history = []

    base_level = aqi

    for day in range(1, 31):

         if random.random() > 0.75:
            base_level = max(1, min(5, base_level + random.choice([-1, 1])))

         low, high = aqi_ranges[base_level]

         value = random.randint(low, high)

         aqi_history.append(
            {
              "day": str(day),
              "aqi": value,
         }
        )

    # --------------------------------------------------
    # Forecast
    # --------------------------------------------------

    forecast = []
    added_days = set()

    for item in forecast_data["list"]:

        date = item["dt_txt"].split(" ")[0]

        if date not in added_days:

            added_days.add(date)

            forecast.append(
                {
                    "day": date[5:],  # MM-DD
                    "temp": round(item["main"]["temp"]),
                }
            )

        if len(forecast) == 5:
            break

    # --------------------------------------------------
    # Alerts
    # --------------------------------------------------

    alerts = []

    if components["pm2_5"] > 35:

        alerts.append(
            {
                "title": "High PM2.5 Detected",
                "message": f"PM2.5 level reached {round(components['pm2_5'],1)} µg/m³.",
            }
        )

    if components["pm10"] > 50:

        alerts.append(
            {
                "title": "High PM10 Detected",
                "message": f"PM10 level reached {round(components['pm10'],1)} µg/m³.",
            }
        )

    if weather_data["wind"]["speed"] * 3.6 > 20:

        alerts.append(
            {
                "title": "Strong Winds",
                "message": f"Wind speed is {round(weather_data['wind']['speed'] * 3.6,1)} km/h.",
            }
        )

    if aqi >= 4:

        alerts.append(
            {
                "title": "Poor Air Quality",
                "message": "Sensitive groups should avoid prolonged outdoor exposure.",
            }
        )

    if weather_data["main"]["humidity"] > 80:

        alerts.append(
            {
                "title": "High Humidity",
                "message": f"Humidity is {weather_data['main']['humidity']}%.",
            }
        )

    if len(alerts) == 0:

        alerts.append(
            {
                "title": "Air Quality Stable",
                "message": "No significant environmental alerts at the moment.",
            }
        )

    print(f"Backend Time: {time.time() - start:.2f} seconds")
    # --------------------------------------------------
    # Delhi NCR Monitoring Stations
    # --------------------------------------------------

    monitoring_stations = [

        {
            "name": "Parliament House",
            "latitude": 28.6139,
            "longitude": 77.2090,
            "aqi": 82,
            "status": "Fair",
        },

        {
            "name": "Anand Vihar",
            "latitude": 28.6468,
            "longitude": 77.3152,
            "aqi": 186,
            "status": "Poor",
        },

        {
            "name": "Punjabi Bagh",
            "latitude": 28.6692,
            "longitude": 77.1310,
            "aqi": 148,
            "status": "Moderate",
        },

        {
            "name": "Okhla Phase II",
            "latitude": 28.5308,
            "longitude": 77.2713,
            "aqi": 171,
            "status": "Poor",
        },

        {
            "name": "RK Puram",
            "latitude": 28.5677,
            "longitude": 77.1760,
            "aqi": 104,
            "status": "Moderate",
        },

        {
            "name": "ITO",
            "latitude": 28.6289,
            "longitude": 77.2410,
            "aqi": 132,
            "status": "Moderate",
        },

        {
            "name": "Wazirpur",
            "latitude": 28.6990,
            "longitude": 77.1650,
            "aqi": 194,
            "status": "Poor",
        }

    ]

    # --------------------------------------------------
    # Response
    # --------------------------------------------------

    return {

        "city": weather_data["name"],

        "latitude": lat,

        "longitude": lon,

        "temperature": weather_data["main"]["temp"],

        "humidity": weather_data["main"]["humidity"],

        "wind_speed": round(weather_data["wind"]["speed"], 1),

        "aqi_index": aqi,

        "status": status[aqi],

        "aqi_history": aqi_history,

        "pm2_5": round(components["pm2_5"], 2),

        "pm10": round(components["pm10"], 2),

        "co": round(components["co"], 2),

        "no2": round(components["no2"], 2),

        "o3": round(components["o3"], 2),

        "forecast": forecast,

        "alerts": alerts,

        "monitoring_stations": monitoring_stations,
"pollutant_history": pollutant_history,
    }