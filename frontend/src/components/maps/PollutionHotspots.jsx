import { useEffect, useState } from "react";
import { fetchAQIData } from "../../services/api";

function PollutionHotspots() {
  const [hotspots, setHotspots] = useState([]);

  useEffect(() => {
    const loadHotspots = async () => {
      const data = await fetchAQIData();

      if (data) {
        const sortedStations = [...data.monitoring_stations].sort(
          (a, b) => b.aqi - a.aqi
        );

        setHotspots(sortedStations);
      }
    };

    loadHotspots();
  }, []);

  const getColor = (status) => {
    switch (status) {
      case "Good":
        return "bg-green-500";
      case "Fair":
        return "bg-cyan-500";
      case "Moderate":
        return "bg-yellow-500";
      case "Poor":
        return "bg-orange-500";
      case "Very Poor":
        return "bg-red-500";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 h-full">

      <h2 className="text-2xl font-bold">
        Pollution Hotspots
      </h2>

      <p className="mt-2 text-slate-400">
        Cities with the highest recorded AQI.
      </p>

      <div className="mt-8 space-y-5">

        {hotspots.map((spot) => (

          <div
            key={spot.name}
            className="flex items-center justify-between rounded-2xl bg-slate-800/50 p-4"
          >

            <div className="flex items-center gap-4">

              <div
                className={`h-3 w-3 rounded-full ${getColor(spot.status)}`}
              />

              <div>

                <p className="font-semibold">
                  {spot.name}
                </p>

                <p className="text-sm text-slate-400">
                  {spot.status}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="text-2xl font-bold text-cyan-400">
                {spot.aqi}
              </p>

              <p className="text-xs text-slate-500">
                AQI
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PollutionHotspots;