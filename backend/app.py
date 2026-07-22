from flask import Flask
from flask_cors import CORS

from routes.aqi_routes import aqi_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(aqi_bp, url_prefix="/api")


@app.route("/")
def home():
    return {
        "message": "Air Quality Analytics Backend Running 🚀",
        "status": "success"
    }


if __name__ == "__main__":
    app.run(debug=True)