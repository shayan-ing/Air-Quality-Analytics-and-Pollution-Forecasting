import { MapPin, Clock } from "lucide-react";

const stations = [
  {
    name: "Delhi Central",
    aqi: 142,
    updated: "2 min ago",
    status: "Online",
    color: "bg-green-500",
  },
  {
    name: "Noida Sector 62",
    aqi: 126,
    updated: "5 min ago",
    status: "Online",
    color: "bg-green-500",
  },
  {
    name: "Ghaziabad",
    aqi: 171,
    updated: "1 min ago",
    status: "Online",
    color: "bg-red-500",
  },
  {
    name: "Faridabad",
    aqi: 118,
    updated: "7 min ago",
    status: "Online",
    color: "bg-yellow-400",
  },
];

function MonitoringStations() {
  return (
    <div className="space-y-4">

      {stations.map((station, index) => (

        <div
          key={index}
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
                  className={`h-2 w-2 rounded-full ${station.color}`}
                />

                <span className="text-slate-300">
                  {station.status}
                </span>

              </div>

              <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">

                <Clock size={13} />

                Updated {station.updated}

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