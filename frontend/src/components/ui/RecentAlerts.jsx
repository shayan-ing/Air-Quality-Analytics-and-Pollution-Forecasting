import {
  AlertTriangle,
  CheckCircle2,
  Wind,
  CloudRain,
} from "lucide-react";

function RecentAlerts({ alerts = [] }) {

  const getIcon = (title) => {

    if (title.includes("PM"))
      return {
        icon: AlertTriangle,
        color: "text-red-400",
      };

    if (title.includes("Wind"))
      return {
        icon: Wind,
        color: "text-cyan-400",
      };

    if (title.includes("Rain"))
      return {
        icon: CloudRain,
        color: "text-blue-400",
      };

    return {
      icon: CheckCircle2,
      color: "text-green-400",
    };
  };

  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-xl">

      <h2 className="text-3xl font-bold">
        Recent Alerts
      </h2>

      <p className="text-slate-400 mt-2 mb-8">
        Latest environmental notifications
      </p>

      <div className="space-y-5">

        {alerts.map((alert, index) => {

          const { icon: Icon, color } = getIcon(alert.title);

          return (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 hover:border-cyan-500/40 transition"
            >
              <div className={color}>
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