from flask import Blueprint, jsonify, request

from services.prediction_service import get_prediction_data

prediction_bp = Blueprint("prediction", __name__)


@prediction_bp.route("/prediction", methods=["GET"])
def get_prediction():

    try:

        city = request.args.get("city", "Delhi")

        prediction = get_prediction_data(
            city=city
        )

        return jsonify(prediction)

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500