import {
  Brain,
  TrendingDown,
  Wind,
  CloudRain,
  ShieldCheck,
} from "lucide-react";

function AIInsightCard() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8">

      <div className="flex items-center gap-3">

        <Brain
          size={34}
          className="text-cyan-400"
        />

        <div>

          <h2 className="text-3xl font-bold">
            AI Insights
          </h2>

          <p className="text-slate-400">
            Generated from historical pollution trends
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">

          <TrendingDown
            className="text-green-400"
            size={20}
          />

          <span>
            AQI has decreased by
            <span className="text-green-400 font-semibold">
              {" "}12%
            </span>
            compared to last month.
          </span>

        </div>

        <div className="flex items-center gap-3">

          <Wind
            className="text-cyan-400"
            size={20}
          />

          <span>
            Higher wind speed helped disperse pollutants.
          </span>

        </div>

        <div className="flex items-center gap-3">

          <CloudRain
            className="text-blue-400"
            size={20}
          />

          <span>
            Rain forecast indicates improved AQI tomorrow.
          </span>

        </div>

        <div className="flex items-center gap-3">

          <ShieldCheck
            className="text-yellow-400"
            size={20}
          />

          <span>
            Outdoor activities are recommended before 5 PM.
          </span>

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-cyan-500/10 p-5 border border-cyan-500/20">

        <p className="text-sm text-slate-400">
          Prediction Confidence
        </p>

        <h2 className="mt-2 text-5xl font-bold text-cyan-400">
          94%
        </h2>

      </div>

    </div>
  );
}

export default AIInsightCard;