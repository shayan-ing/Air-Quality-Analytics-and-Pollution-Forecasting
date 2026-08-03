import { useEffect, useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { fetchAQIData } from "../../services/api";

function MonitoringStations() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const loadStations = async () => {
      const data = await fetchAQIData();

      if (data) {
        setStations(data.monitoring_stations);
      }
    };

    loadStations();
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
    <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2">

      {stations.map((station) => (

        <div
          key={station.name}
          className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-cyan-500/30 transition"
        >

          <div className="flex items-start justify-between">

            <div>

              <div className="flex items-center gap-2">

                <MapPin
                  size={15}
                  className="text-cyan-400"
                />

                <h3 className="font-semibold text-white">
                  {station.name}
                </h3>

              </div>

              <div className="mt-2 flex items-center gap-2 text-sm">

                <span
                  className={`h-2 w-2 rounded-full ${getColor(
                    station.status
                  )}`}
                />

                <span className="text-slate-300">
                  {station.status}
                </span>

              </div>

              <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">

                <Clock size={13} />

                Live Monitoring

              </div>

            </div>

            <div className="text-right shrink-0">

              <p className="text-3xl font-bold text-cyan-400">
                {station.aqi}
              </p>

              <p className="text-xs text-slate-500">
                AQI
              </p>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default MonitoringStations;