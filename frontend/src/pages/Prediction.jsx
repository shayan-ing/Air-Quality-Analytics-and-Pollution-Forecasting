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
function Prediction() {
  return (
    <div className="space-y-16">

      {/* Hero */}

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

            Next 7 Days

          </div>

<button className="flex min-w-[190px] items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
            <Sparkles size={18} />

            Run Prediction

          </button>

        </div>

      </section>
{/* Prediction Summary */}

<section className="pt-10">

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

    <PredictionCard
      title="Predicted AQI"
      value="148"
      subtitle="Tomorrow's Forecast"
      trend="+8%"
      trendColor="text-red-400"
      valueColor="text-orange-400"
    />

    <PredictionCard
      title="Confidence"
      value="94%"
      subtitle="Model Accuracy"
      trend="High"
      trendColor="text-green-400"
      valueColor="text-cyan-400"
    />

    <PredictionCard
      title="AQI Category"
      value="Moderate"
      subtitle="Expected Condition"
      trend="Stable"
      trendColor="text-cyan-400"
      valueColor="text-green-400"
    />

    <PredictionCard
      title="Forecast Trend"
      value="↑"
      subtitle="Increasing AQI"
      trend="+12"
      trendColor="text-red-400"
      valueColor="text-red-400"
    />

  </div>

</section>
{/* Prediction Form */}

<section className="pt-16">

  <PredictionForm />

</section>
<section className="pt-16">

  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

    <div className="mb-8">

      <h2 className="text-3xl font-bold">
        7-Day AQI Forecast
      </h2>

      <p className="mt-2 text-slate-400">
        AI predicted Air Quality Index for the upcoming week.
      </p>

    </div>

    <AQIForecastChart />

  </div>

</section>
<section className="pt-16">

  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

    <div className="mb-8">

      <h2 className="text-3xl font-bold">
        Weather Forecast
      </h2>

      <p className="mt-2 text-slate-400">
        Expected temperature trend for the next seven days.
      </p>

    </div>

    <WeatherForecastChart />

  </div>

</section>
<section className="pt-16">

  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

    <div className="mb-8">

      <h2 className="text-3xl font-bold">
        Predicted Pollutant Levels
      </h2>

      <p className="mt-2 text-slate-400">
        Estimated pollutant concentrations for the upcoming forecast period.
      </p>

    </div>

    <PredictedPollutantsChart />

  </div>

</section>
<section className="pt-16">

  <AIInsightsPrediction />

</section>
    </div>
  );
}

export default Prediction;