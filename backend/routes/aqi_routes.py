from flask import Blueprint, jsonify, request
from services.aqi_service import get_aqi_data

aqi_bp = Blueprint("aqi", __name__)


@aqi_bp.route("/aqi", methods=["GET"])
def get_aqi():

    city = request.args.get("city")

    lat = request.args.get("lat")
    lon = request.args.get("lon")

    data = get_aqi_data(
        city=city,
        lat=lat,
        lon=lon
    )

    return jsonify(data)