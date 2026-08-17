from flask import Flask
from flask_cors import CORS

from routes.aqi_routes import aqi_bp
from routes.prediction_routes import prediction_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(aqi_bp, url_prefix="/api")
app.register_blueprint(prediction_bp, url_prefix="/api")


@app.route("/")
def home():
    return {
        "message": "Air Quality Analytics Backend Running 🚀",
        "status": "success"
    }


import os

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000)),
        debug=True
    )