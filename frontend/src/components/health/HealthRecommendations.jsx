import {
  Shield,
  Wind,
  Droplets,
  Home,
  Trees,
} from "lucide-react";

const recommendations = [
  {
    icon: Shield,
    title: "Wear an N95 Mask",
    description:
      "Reduces inhalation of PM2.5 particles when AQI exceeds 100.",
  },
  {
    icon: Home,
    title: "Limit Outdoor Activity",
    description:
      "Avoid prolonged outdoor exposure during afternoon hours.",
  },
  {
    icon: Wind,
    title: "Use Air Purifier",
    description:
      "Maintain cleaner indoor air for sensitive individuals.",
  },
  {
    icon: Droplets,
    title: "Stay Hydrated",
    description:
      "Drink plenty of water to reduce irritation caused by pollution.",
  },
  {
    icon: Trees,
    title: "Visit Parks Carefully",
    description:
      "Prefer green areas during low AQI periods in the morning.",
  },
];

function HealthRecommendations() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

      {recommendations.map((item) => {

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
              hover:border-green-500/30
              transition
            "
          >

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">

              <Icon
                className="text-green-400"
                size={24}
              />

            </div>

            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-400 leading-7">
              {item.description}
            </p>

          </div>

        );

      })}

    </div>
  );
}

export default HealthRecommendations;