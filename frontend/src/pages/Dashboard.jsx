import { useEffect, useState } from "react";

import {
  Wind,
  Thermometer,
  Droplets,
  Activity,
} from "lucide-react";
import { fetchAQIData } from "../services/api";
import StatCard from "../components/cards/StatCard";
import AQIChart from "../components/charts/AQIChart";
import SummaryCard from "../components/cards/SummaryCard";
import PollutantChart from "../components/charts/PollutantChart";
import ForecastChart from "../components/charts/ForecastChart";
import AQIPieChart from "../components/charts/AQIPieChart";
import RecentAlerts from "../components/ui/RecentAlerts";
function Dashboard() {
  const [aqiData, setAqiData] = useState(null);

  // -----------------------------
// Summary Calculations
// -----------------------------

const history = aqiData?.aqi_history || [];

const highestAQI =
  history.length > 0
    ? history.reduce((max, item) => (item.aqi > max.aqi ? item : max))
    : null;

const lowestAQI =
  history.length > 0
    ? history.reduce((min, item) => (item.aqi < min.aqi ? item : min))
    : null;

const averageAQI =
  history.length > 0
    ? Math.round(
        history.reduce((sum, item) => sum + item.aqi, 0) /
          history.length
      )
    : "--";

let trend = "Stable";

if (history.length >= 2) {
  const first = history[0].aqi;
  const last = history[history.length - 1].aqi;

  if (last < first)
    trend = "Improving ↘";

  else if (last > first)
    trend = "Worsening ↗";
}

const loadAQI = async () => {

  const data = await fetchAQIData();

  if (data) {
    setAqiData(data);
  }

};

useEffect(() => {
  loadAQI();
}, []);
const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  if (hour < 21) return "Good Evening";

  return "Good Night";
};
  return (
    <div className="space-y-14">

      {/* Hero Section */}
     <section className="flex items-center justify-between">

  {/* Left Side */}

  <div className="space-y-4">

    <h1 className="text-5xl font-extrabold tracking-tight">
      Dashboard
    </h1>
<div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2">

  <span>🌤</span>

  <span className="text-cyan-300 text-sm">
    {aqiData
      ? `${aqiData.city} • ${Math.round(aqiData.temperature)}°C`
      : "Delhi • 33°C"}
  </span>

</div>
    <div>

      <h2 className="text-3xl font-bold">
        {getGreeting()}, User 👋
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

      <h2
  className={`text-4xl font-bold mt-2 ${
    aqiData?.aqi_index <= 2
      ? "text-green-400"
      : aqiData?.aqi_index === 3
      ? "text-yellow-400"
      : "text-red-400"
  }`}
>
  {
  aqiData
    ? `${aqiData.status} ${
        aqiData.aqi_index === 1
          ? "😄"
          : aqiData.aqi_index === 2
          ? "🙂"
          : aqiData.aqi_index === 3
          ? "😐"
          : aqiData.aqi_index === 4
          ? "😷"
          : "☠️"
      }`
    : "Good 😄"
}
</h2>

    </div>

  </div>

</section>

      {/* Statistics */}

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-4">
        <StatCard
          title="Air Quality Index"
          value={aqiData ? aqiData.aqi_index : "132"}
          status={aqiData ? aqiData.status : "Good"}
          icon={Activity}
        />

        <StatCard
          title="Temperature"
          value={aqiData ? `${Math.round(aqiData.temperature)}°C` : "33°C"}
          status="Hot"
          icon={Thermometer}
          valueColor="text-orange-400"
          statusColor="text-orange-300"
        />

        <StatCard
          title="Humidity"
          value={aqiData ? `${aqiData.humidity}%` : "62%"}
          status="Normal"
          icon={Droplets}
          valueColor="text-blue-400"
          statusColor="text-blue-300"
        />

        <StatCard
          title="Wind Speed"
          value={aqiData ? `${aqiData.wind_speed} m/s` : "--"}
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
      Last 30 Days Air Quality Index
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
      5-Day Temperature Forecast
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

    <RecentAlerts
    alerts={aqiData ? aqiData.alerts : []}
/>

</section>

{/* Summary */}

<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

 <SummaryCard
  title="Highest AQI"
  value={highestAQI ? highestAQI.aqi : "--"}
  subtitle={highestAQI ? highestAQI.day : "--"}
  valueColor="text-red-400"
/>

<SummaryCard
  title="Lowest AQI"
  value={lowestAQI ? lowestAQI.aqi : "--"}
  subtitle={lowestAQI ? lowestAQI.day : "--"}
  valueColor="text-green-400"
/>

<SummaryCard
  title="Average AQI"
  value={averageAQI}
  subtitle="Weekly Average"
  valueColor="text-cyan-400"
/>

<SummaryCard
  title="Trend"
  value={trend}
  subtitle="Compared to first day"
  valueColor={
    trend.includes("Improving")
      ? "text-green-400"
      : trend.includes("Worsening")
      ? "text-red-400"
      : "text-yellow-400"
  }
/>

</section>

</div>
);
}

export default Dashboard;