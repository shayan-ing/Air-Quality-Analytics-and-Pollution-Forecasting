import { useState } from "react";
import { Brain } from "lucide-react";

function PredictionForm({
  onPredict,
  loading = false,
  city,
  onCityChange,
}) {

  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [pm25, setPm25] = useState("");
  const [pm10, setPm10] = useState("");
  const [no2, setNo2] = useState("");
  const [so2, setSo2] = useState("");
  const [co, setCo] = useState("");

  const handleSubmit = (e) => {
     e.preventDefault();

  console.log("SELECTED CITY:", city);

  onPredict(city);
};



  return (

    <form onSubmit={handleSubmit}>

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <Brain
          className="text-cyan-400"
          size={28}
        />

        <div>

          <h2 className="text-3xl font-bold">
            Prediction Inputs
          </h2>

          <p className="mt-1 text-slate-400">
            Select a location and review environmental conditions for AQI prediction.
          </p>

        </div>

      </div>


      {/* Inputs */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">


        {/* City */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            City
          </label>

          <select
           value={city}
            onChange={(e) => onCityChange(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          >

            <option value="Delhi">
              Delhi
            </option>

            <option value="Noida">
              Noida
            </option>

            <option value="Gurgaon">
              Gurgaon
            </option>

            <option value="Ghaziabad">
              Ghaziabad
            </option>

          </select>

        </div>


        {/* Temperature */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Temperature (°C)
          </label>

          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Auto from weather API"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

        </div>


        {/* Humidity */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Humidity (%)
          </label>

          <input
            type="number"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            placeholder="Auto from weather API"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

        </div>


        {/* Wind */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Wind Speed (km/h)
          </label>

          <input
            type="number"
            value={windSpeed}
            onChange={(e) => setWindSpeed(e.target.value)}
            placeholder="Auto from weather API"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

        </div>


        {/* PM2.5 */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            PM2.5
          </label>

          <input
            type="number"
            value={pm25}
            onChange={(e) => setPm25(e.target.value)}
            placeholder="Auto from air quality API"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

        </div>


        {/* PM10 */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            PM10
          </label>

          <input
            type="number"
            value={pm10}
            onChange={(e) => setPm10(e.target.value)}
            placeholder="Auto from air quality API"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

        </div>


        {/* NO2 */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            NO₂
          </label>

          <input
            type="number"
            value={no2}
            onChange={(e) => setNo2(e.target.value)}
            placeholder="Auto from air quality API"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

        </div>


        {/* SO2 */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            SO₂
          </label>

          <input
            type="number"
            value={so2}
            onChange={(e) => setSo2(e.target.value)}
            placeholder="Auto from air quality API"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

        </div>


        {/* CO */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            CO
          </label>

          <input
            type="number"
            value={co}
            onChange={(e) => setCo(e.target.value)}
            placeholder="Auto from air quality API"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

        </div>

      </div>


      {/* Button */}

      <div className="mt-10 flex justify-center">

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-10 py-3 text-lg font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
        >

          <Brain size={20} />

          {loading ? "Running Prediction..." : "Predict AQI"}

        </button>

      </div>

    </form>

  );

}

export default PredictionForm;