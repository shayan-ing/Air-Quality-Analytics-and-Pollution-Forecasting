import {
  AlertTriangle,
  CheckCircle2,
  Wind,
  CloudRain,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    icon: AlertTriangle,
    title: "High PM10 detected",
    message: "PM10 concentration increased by 18%",
    color: "text-red-400",
  },
  {
    id: 2,
    icon: Wind,
    title: "Strong Winds",
    message: "Wind speed expected to reach 24 km/h",
    color: "text-cyan-400",
  },
  {
    id: 3,
    icon: CloudRain,
    title: "Rain Expected",
    message: "AQI may improve during evening",
    color: "text-blue-400",
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: "Air Quality Stable",
    message: "No hazardous pollutants detected",
    color: "text-green-400",
  },
];

function RecentAlerts() {
  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-xl">

      <h2 className="text-3xl font-bold">
        Recent Alerts
      </h2>

      <p className="text-slate-400 mt-2 mb-8">
        Latest environmental notifications
      </p>

      <div className="space-y-5">

        {alerts.map((alert) => {
          const Icon = alert.icon;

          return (
            <div
              key={alert.id}
              className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 hover:border-cyan-500/40 transition"
            >
              <div className={`${alert.color}`}>
                <Icon size={28} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  {alert.title}
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  {alert.message}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default RecentAlerts;