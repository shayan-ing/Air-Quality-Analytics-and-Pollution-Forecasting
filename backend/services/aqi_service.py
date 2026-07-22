import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OPENWEATHER_API_KEY")


def get_aqi_data():
    lat = 28.6139
    lon = 77.2090

    url = (
        f"http://api.openweathermap.org/data/2.5/air_pollution"
        f"?lat={lat}&lon={lon}&appid={API_KEY}"
    )

    response = requests.get(url)
    data = response.json()

    aqi = data["list"][0]["main"]["aqi"]
    components = data["list"][0]["components"]

    status = {
        1: "Good",
        2: "Fair",
        3: "Moderate",
        4: "Poor",
        5: "Very Poor"
    }

    return {
        "city": "Delhi",
        "aqi_index": aqi,
        "status": status[aqi],
        "pm2_5": components["pm2_5"],
        "pm10": components["pm10"],
        "co": components["co"],
        "no2": components["no2"],
        "o3": components["o3"]
    }