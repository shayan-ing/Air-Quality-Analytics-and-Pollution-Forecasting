import {
  Brain,
  TrendingUp,
  TrendingDown,
  Wind,
  Thermometer,
  ShieldCheck,
} from "lucide-react";

function AIInsightsPrediction({ prediction }) {

  const forecast = prediction?.forecast || [];

  const confidence = prediction?.confidence ?? "--";
  const predictedAQI = prediction?.predicted_aqi ?? "--";
  const category = prediction?.category ?? "--";
  const trend = prediction?.trend ?? "Stable";

  const weather = prediction?.weather || {};

  const temperature = weather.temperature ?? "--";
  const humidity = weather.humidity ?? "--";
  const windSpeed = weather.wind_speed ?? "--";


  /*
   * --------------------------------------------------
   * Calculate Forecast Change
   * --------------------------------------------------
   */

  let change = 0;

  if (forecast.length > 1) {

    const firstAQI = forecast[0].aqi;
    const lastAQI = forecast[forecast.length - 1].aqi;

    if (firstAQI !== 0) {

      change = Math.round(
        ((lastAQI - firstAQI) / firstAQI) * 100
      );

    }

  }


  /*
   * --------------------------------------------------
   * Trend Information
   * --------------------------------------------------
   */

  const isIncreasing = trend === "Increasing";
const isImproving = trend === "Improving";
const isStable = trend === "Stable";

const TrendIcon = isIncreasing
  ? TrendingUp
  : isImproving
  ? TrendingDown
  : ShieldCheck;

const trendColor = isIncreasing
  ? "text-red-400"
  : isImproving
  ? "text-green-400"
  : "text-cyan-400";


  /*
   * --------------------------------------------------
   * AQI Insight
   * --------------------------------------------------
   */

  let aqiMessage;

  if (change > 0) {

    aqiMessage = (
      <>
        AQI is expected to
        <span className="text-red-400 font-semibold">
          {" "}increase by approximately {Math.abs(change)}%
        </span>
        {" "}over the forecast period.
      </>
    );

  } else if (change < 0) {

    aqiMessage = (
      <>
        AQI is expected to
        <span className="text-green-400 font-semibold">
          {" "}improve by approximately {Math.abs(change)}%
        </span>
        {" "}over the forecast period.
      </>
    );

  } else {

    aqiMessage = (
      <>
        AQI is expected to remain
        <span className="text-cyan-400 font-semibold">
          {" "}stable
        </span>
        {" "}over the forecast period.
      </>
    );

  }


  return (

    <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8">


      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="flex items-center gap-3 mb-6">

        <Brain
          className="text-cyan-400"
          size={34}
        />

        <div>

          <h2 className="text-3xl font-bold">
            AI Prediction Insights
          </h2>

          <p className="text-slate-400">
            Machine learning based forecast explanation
          </p>

        </div>

      </div>


      {/* ==================================================
          INSIGHTS
      ================================================== */}

      <div className="space-y-5">


        {/* AQI TREND */}

        <div className="flex items-center gap-3">

          <TrendIcon
            className={trendColor}
            size={20}
          />

          <p>
            {aqiMessage}
          </p>

        </div>


        {/* WIND */}

        <div className="flex items-center gap-3">

          <Wind
            className="text-cyan-400"
            size={20}
          />

          <p>
            Current wind speed is{" "}
            <span className="text-cyan-400 font-semibold">
              {windSpeed} m/s
            </span>
            , which is being considered by the prediction model.
          </p>

        </div>


        {/* TEMPERATURE */}

        <div className="flex items-center gap-3">

          <Thermometer
            className="text-orange-400"
            size={20}
          />

          <p>
            Current temperature is{" "}
            <span className="text-orange-400 font-semibold">
              {temperature}°C
            </span>
            {" "}with humidity at{" "}
            <span className="text-cyan-400 font-semibold">
              {humidity}%
            </span>
            .
          </p>

        </div>


        {/* AQI CATEGORY */}

        <div className="flex items-center gap-3">

          <ShieldCheck
            className="text-yellow-400"
            size={20}
          />

          <p>
            The predicted AQI is{" "}
            <span className="font-semibold text-yellow-400">
              {predictedAQI}
            </span>
            {" "}and is classified as{" "}
            <span className="font-semibold text-red-400">
              {category}
            </span>
            .
          </p>

        </div>

      </div>


      {/* ==================================================
          CONFIDENCE
      ================================================== */}

      <div className="mt-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-6">

        <p className="text-slate-400">
          Prediction Confidence
        </p>

        <h1 className="mt-2 text-6xl font-black text-cyan-400">
          {confidence}%
        </h1>

      </div>

    </div>

  );

}

export default AIInsightsPrediction;