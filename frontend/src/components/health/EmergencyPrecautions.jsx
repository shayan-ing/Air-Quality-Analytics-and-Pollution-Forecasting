import {
  AlertTriangle,
  Phone,
  Ambulance,
  Hospital,
} from "lucide-react";

const precautions = [
  {
    icon: AlertTriangle,
    title: "Avoid Outdoor Exercise",
    description:
      "High AQI can significantly increase respiratory stress.",
    color: "text-yellow-400",
  },
  {
    icon: Hospital,
    title: "Seek Medical Help",
    description:
      "Visit a healthcare professional if symptoms become severe.",
    color: "text-red-400",
  },
  {
    icon: Ambulance,
    title: "Asthma Patients",
    description:
      "Keep inhalers nearby and avoid prolonged outdoor exposure.",
    color: "text-cyan-400",
  },
  {
    icon: Phone,
    title: "Emergency Contact",
    description:
      "Call local emergency services immediately for breathing difficulty.",
    color: "text-green-400",
  },
];

function EmergencyPrecautions() {
  return (
    <div className="grid gap-6 md:grid-cols-2">

      {precautions.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
              p-6
              transition
              hover:border-red-500/30
            "
          >

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-slate-800 p-3">

                <Icon
                  className={item.color}
                  size={26}
                />

              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {item.description}
                </p>

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}

export default EmergencyPrecautions;