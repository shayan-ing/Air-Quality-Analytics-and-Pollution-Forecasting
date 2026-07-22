from flask import Blueprint, jsonify
from services.aqi_service import get_aqi_data

aqi_bp = Blueprint("aqi", __name__)

@aqi_bp.route("/aqi", methods=["GET"])
def get_aqi():
    return jsonify(get_aqi_data())