import {
  Brain,
  TrendingUp,
  Wind,
  CloudRain,
  ShieldCheck,
} from "lucide-react";

function AIInsightsPrediction() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center gap-3 mb-6">

        <Brain className="text-cyan-400" size={34} />

        <div>

          <h2 className="text-3xl font-bold">
            AI Prediction Insights
          </h2>

          <p className="text-slate-400">
            Machine learning based forecast explanation
          </p>

        </div>

      </div>

      <div className="space-y-5">

        <div className="flex items-center gap-3">

          <TrendingUp className="text-green-400" />

          <p>
            AQI is expected to
            <span className="text-green-400 font-semibold">
              {" "}improve by nearly 8%
            </span>
            {" "}during the next 48 hours.
          </p>

        </div>

        <div className="flex items-center gap-3">

          <Wind className="text-cyan-400" />

          <p>
            Higher wind speed will help disperse suspended PM2.5 particles.
          </p>

        </div>

        <div className="flex items-center gap-3">

          <CloudRain className="text-blue-400" />

          <p>
            Rainfall expected this weekend may significantly reduce pollution.
          </p>

        </div>

        <div className="flex items-center gap-3">

          <ShieldCheck className="text-yellow-400" />

          <p>
            Outdoor activities are recommended before 4 PM.
          </p>

        </div>

      </div>

      <div className="mt-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-6">

        <p className="text-slate-400">
          Prediction Confidence
        </p>

        <h1 className="mt-2 text-6xl font-black text-cyan-400">
          94%
        </h1>

      </div>

    </div>
  );
}

export default AIInsightsPrediction;