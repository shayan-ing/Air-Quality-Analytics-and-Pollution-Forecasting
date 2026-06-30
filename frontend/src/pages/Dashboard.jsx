import {
  Wind,
  Thermometer,
  Droplets,
  Activity,
} from "lucide-react";

import StatCard from "../components/cards/StatCard";

function Dashboard() {
  return (
    <div className="space-y-14">

      {/* Hero Section */}
     <section className="flex items-center justify-between">

  {/* Left Side */}

  <div className="space-y-3">

    <h1 className="text-5xl font-extrabold tracking-tight">
      Dashboard
    </h1>

    <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2">

      <span>🌤</span>

      <span className="text-cyan-300 text-sm">
        Delhi • 33°C
      </span>

    </div>

    <div>

      <h2 className="text-3xl font-bold">
        Good Morning, Aryan 👋
      </h2>

      <p className="mt-2 text-slate-400">
        Here's today's air quality overview.
      </p>

    </div>

  </div>

  {/* Right Side */}

  <div className="hidden lg:flex">

    <div className="rounded-2xl bg-green-500/10 border border-green-500/20 px-6 py-5">

      <p className="text-sm text-green-300">
        Current AQI Status
      </p>

      <h2 className="text-4xl font-bold text-green-400 mt-2">
        Good 😊
      </h2>

    </div>

  </div>

</section>

      {/* Statistics */}

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-4">
        <StatCard
          title="Air Quality Index"
          value="132"
          status="Good"
          icon={Activity}
        />

        <StatCard
          title="Temperature"
          value="33°C"
          status="Hot"
          icon={Thermometer}
          valueColor="text-orange-400"
          statusColor="text-orange-300"
        />

        <StatCard
          title="Humidity"
          value="62%"
          status="Normal"
          icon={Droplets}
          valueColor="text-blue-400"
          statusColor="text-blue-300"
        />

        <StatCard
          title="Wind Speed"
          value="18 km/h"
          status="Moderate"
          icon={Wind}
          valueColor="text-purple-400"
          statusColor="text-purple-300"
        />

      </section>

    </div>
  );
}

export default Dashboard;