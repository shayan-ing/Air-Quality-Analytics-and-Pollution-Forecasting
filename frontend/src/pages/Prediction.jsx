import { useEffect, useState } from "react";

import {
  Brain,
  Calendar,
  Sparkles,
} from "lucide-react";

import PredictionCard from "../components/cards/PredictionCard";
import PredictionForm from "../components/forms/PredictionForm";
import AQIForecastChart from "../components/charts/AQIForecastChart";
import WeatherForecastChart from "../components/charts/WeatherForecastChart";
import PredictedPollutantsChart from "../components/charts/PredictedPollutantsChart";
import AIInsightsPrediction from "../components/prediction/AIInsightsPrediction";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";

function Prediction() {

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const [selectedCity, setSelectedCity] = useState("Delhi");
  const loadPrediction = async (selectedCity = "Delhi") => {

    try {
       setSelectedCity(selectedCity);

      setLoading(true);
      setError(null);

      const response = await fetch(
  `${API_BASE_URL}/api/prediction?city=${encodeURIComponent(selectedCity)}`
);

      if (!response.ok) {
        throw new Error("Failed to fetch prediction");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setPrediction(data);

    } catch (err) {

      console.error("Prediction error:", err);

      setError(err.message);

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {

    loadPrediction();

  }, []);


  /*
   * --------------------------------------------------
   * Loading State
   * --------------------------------------------------
   */

  if (loading) {

    return (
      <div className="flex min-h-[500px] items-center justify-center">

        <div className="text-center">

          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />

          <p className="text-slate-400">
            Running AI prediction...
          </p>

        </div>

      </div>
    );

  }


  /*
   * --------------------------------------------------
   * Error State
   * --------------------------------------------------
   */

  if (error) {

    return (
      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8">

        <h2 className="text-2xl font-bold text-red-400">
          Prediction Error
        </h2>

        <p className="mt-3 text-slate-300">
          {error}
        </p>

        <button
          onClick={() => loadPrediction(selectedCity)}
          className="mt-6 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Try Again
        </button>

      </div>
    );

  }


  /*
   * --------------------------------------------------
   * Real Backend Data
   * --------------------------------------------------
   */

  const forecast = prediction?.forecast || [];

  const predictedAQI =
    prediction?.predicted_aqi ?? "--";

  const confidence =
    prediction?.confidence ?? "--";

  const category =
    prediction?.category ?? "--";

  const trend =
    prediction?.trend ?? "--";


  const tomorrow =
    forecast.length > 0
      ? forecast[0]
      : null;


  /*
   * --------------------------------------------------
   * Trend Display
   * --------------------------------------------------
   */

  const isIncreasing =
    trend === "Increasing";

  const trendValue =
  trend === "Increasing"
    ? "↑"
    : trend === "Improving"
    ? "↓"
    : "→";

  const trendColor =
  trend === "Increasing"
    ? "text-red-400"
    : trend === "Improving"
    ? "text-green-400"
    : "text-cyan-400";


  /*
   * --------------------------------------------------
   * Category Color
   * --------------------------------------------------
   */

  const categoryColor =
    category === "Good"
      ? "text-green-400"
      : category === "Satisfactory"
      ? "text-cyan-400"
      : category === "Moderate"
      ? "text-yellow-400"
      : category === "Poor"
      ? "text-orange-400"
      : "text-red-400";


  return (

    <div className="space-y-16">


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="flex flex-col lg:flex-row justify-between gap-8">

        <div>

          <h1 className="text-5xl font-extrabold">
            Prediction
          </h1>


          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">

            <Brain
              size={18}
              className="text-cyan-400"
            />

            <span className="text-cyan-300">
              AI Air Quality Forecast
            </span>

          </div>


          <h2 className="mt-8 text-3xl font-bold">
            Predict Future Air Quality
          </h2>


          <p className="mt-4 max-w-2xl text-lg text-slate-400 leading-8">

            Forecast AQI using weather conditions,
            pollutant concentrations,
            and machine learning insights.

          </p>

        </div>


        <div className="flex flex-wrap items-center gap-4">

          <div className="flex min-w-[170px] items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3">

            <Calendar
              size={18}
              className="text-cyan-400"
            />

            Next Forecast

          </div>


          <button
            onClick={loadPrediction}
            className="flex min-w-[190px] items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >

            <Sparkles size={18} />

            Run Prediction

          </button>

        </div>

      </section>


      {/* ==================================================
          PREDICTION SUMMARY
      ================================================== */}

      <section className="pt-10">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">


          <PredictionCard
            title="Predicted AQI"
            value={predictedAQI}
            subtitle={
              tomorrow
                ? `Forecast • ${tomorrow.day}`
                : "Next Forecast"
            }
            trend={
              tomorrow
                ? category
                : "--"
            }
            trendColor={categoryColor}
            valueColor={
              predictedAQI >= 300
                ? "text-red-400"
                : predictedAQI >= 200
                ? "text-orange-400"
                : predictedAQI >= 100
                ? "text-yellow-400"
                : "text-green-400"
            }
          />


          <PredictionCard
            title="Confidence"
            value={`${confidence}%`}
            subtitle="Model Confidence"
            trend={
              confidence >= 90
                ? "High"
                : "Moderate"
            }
            trendColor={
              confidence >= 90
                ? "text-green-400"
                : "text-yellow-400"
            }
            valueColor="text-cyan-400"
          />


          <PredictionCard
            title="AQI Category"
            value={category}
            subtitle="Expected Condition"
            trend="Current Forecast"
            trendColor={categoryColor}
            valueColor={categoryColor}
          />


          <PredictionCard
            title="Forecast Trend"
            value={trendValue}
            subtitle={trend}
            trend={
              forecast.length > 1
                ? `${forecast[forecast.length - 1].aqi}`
                : "--"
            }
            trendColor={trendColor}
            valueColor={trendColor}
          />

        </div>

      </section>


      {/* ==================================================
          PREDICTION FORM
      ================================================== */}

      <section className="pt-16">

      <PredictionForm
  city={selectedCity}
  onCityChange={setSelectedCity}
  onPredict={loadPrediction}
  loading={loading}
/>

      </section>


      {/* ==================================================
          AQI FORECAST
      ================================================== */}

      <section className="pt-16">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              AQI Forecast
            </h2>

            <p className="mt-2 text-slate-400">
              AI predicted Air Quality Index for the upcoming forecast period.
            </p>

          </div>


          <AQIForecastChart
            forecast={forecast}
          />

        </div>

      </section>


      {/* ==================================================
          WEATHER FORECAST
      ================================================== */}

      <section className="pt-16">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              Weather Forecast
            </h2>

            <p className="mt-2 text-slate-400">
              Expected temperature trend for the forecast period.
            </p>

          </div>


          <WeatherForecastChart
            forecast={forecast}
          />

        </div>

      </section>


      {/* ==================================================
          POLLUTANT FORECAST
      ================================================== */}

      <section className="pt-16">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              Predicted Pollutant Levels
            </h2>

            <p className="mt-2 text-slate-400">
              Current pollutant concentrations used by the prediction model.
            </p>

          </div>


          <PredictedPollutantsChart
            pollutants={prediction?.pollutants}
          />

        </div>

      </section>


      {/* ==================================================
          AI INSIGHTS
      ================================================== */}

      <section className="pt-16">

        <AIInsightsPrediction
          prediction={prediction}
        />

      </section>


    </div>

  );

}


export default Prediction;