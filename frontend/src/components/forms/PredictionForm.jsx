import { Brain } from "lucide-react";

function PredictionForm() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="mb-8 flex items-center gap-3">

        <Brain className="text-cyan-400" size={28} />

        <div>

          <h2 className="text-3xl font-bold">
            Prediction Inputs
          </h2>

          <p className="mt-1 text-slate-400">
            Enter weather and pollutant values to predict AQI.
          </p>

        </div>

      </div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6">
        <div>
          <label className="mb-2 block text-sm text-slate-400">
            City
          </label>

          <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400">

            <option>Delhi</option>
            <option>Noida</option>
            <option>Gurgaon</option>
            <option>Ghaziabad</option>

          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Temperature (°C)
          </label>

          <input
            type="number"
            placeholder="32"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Humidity (%)
          </label>

          <input
            type="number"
            placeholder="58"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Wind Speed (km/h)
          </label>

          <input
            type="number"
            placeholder="15"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            PM2.5
          </label>

          <input
            type="number"
            placeholder="78"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            PM10
          </label>

          <input
            type="number"
            placeholder="120"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            NO₂
          </label>

          <input
            type="number"
            placeholder="42"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            SO₂
          </label>

          <input
            type="number"
            placeholder="18"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            CO
          </label>

          <input
            type="number"
            placeholder="1.3"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>

      </div>

      <div className="mt-10 flex justify-center">

  <button
    className="
      flex
      items-center
      gap-2
      rounded-xl
      bg-cyan-500
      px-10
      py-3
      text-lg
      font-semibold
      text-slate-950
      transition
      hover:bg-cyan-400
    "
  >
    Predict AQI
  </button>

</div>

    </div>
  );
}

export default PredictionForm;