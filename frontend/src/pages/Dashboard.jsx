import {
  Wind,
  Thermometer,
  Droplets,
  Activity,
} from "lucide-react";

import StatCard from "../components/cards/StatCard";
import AQIChart from "../components/charts/AQIChart";
import SummaryCard from "../components/cards/SummaryCard";
import PollutantChart from "../components/charts/PollutantChart";
import ForecastChart from "../components/charts/ForecastChart";
import AQIPieChart from "../components/charts/AQIPieChart";
import RecentAlerts from "../components/ui/RecentAlerts";
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

{/* Charts Section */}

<section className="pt-10 grid grid-cols-1 xl:grid-cols-3 gap-6">

  {/* AQI Trend */}

  <div className="xl:col-span-2 rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-xl">

    <h2 className="text-3xl font-bold">
      AQI Trend
    </h2>

    <p className="text-slate-400 mt-2 mb-6">
      Last 7 Days Air Quality Index
    </p>

    <AQIChart />

  </div>

  {/* Pollutant Chart */}

  <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-xl">

    <h2 className="text-3xl font-bold">
      Pollutant Levels
    </h2>

    <p className="text-slate-400 mt-2 mb-6">
      Current Pollutant Concentration
    </p>

    <PollutantChart />

  </div>

</section>
{/* Weather Forecast */}

<section className="pt-8">

  <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-xl">

    <h2 className="text-3xl font-bold">
      7-Day Temperature Forecast
    </h2>

    <p className="text-slate-400 mt-2 mb-6">
      Predicted temperature trend for the upcoming week
    </p>

    <ForecastChart />

  </div>

</section>
{/* AQI Distribution */}

<section className="pt-8">

  <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-xl">

    <h2 className="text-3xl font-bold">
      AQI Distribution
    </h2>

    <p className="text-slate-400 mt-2 mb-6">
      Air Quality Categories
    </p>

    <AQIPieChart />

  </div>

</section>
{/* Recent Alerts */}

<section className="pt-8">

    <RecentAlerts />

</section>

{/* Summary */}

<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

  <SummaryCard
    title="Highest AQI"
    value="141"
    subtitle="Friday"
    valueColor="text-red-400"
  />

  <SummaryCard
    title="Lowest AQI"
    value="118"
    subtitle="Monday"
    valueColor="text-green-400"
  />

  <SummaryCard
    title="Average AQI"
    value="129"
    subtitle="Weekly Average"
    valueColor="text-cyan-400"
  />

  <SummaryCard
    title="Trend"
    value="Improving ↗"
    subtitle="Compared to last week"
    valueColor="text-emerald-400"
  />

</section>

</div>
);
}

export default Dashboard;