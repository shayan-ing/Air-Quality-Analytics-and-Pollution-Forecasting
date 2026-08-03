import {
  TrendingUp,
  Calendar,
  Download,
} from "lucide-react";

import AnalyticsCard from "../components/cards/AnalyticsCard";
import MonthlyAQIChart from "../components/charts/MonthlyAQIChart";
import PollutantComparisonChart from "../components/charts/PollutantComparisonChart";
import AQIDistributionChart from "../components/charts/AQIDistributionChart";
import PollutantTrendChart from "../components/charts/PollutantTrendChart";
import AQIHeatmap from "../components/charts/AQIHeatmap";
import TopPollutedAreasChart from "../components/charts/TopPollutedAreasChart";
import AIInsightCard from "../components/cards/AIInsightCard";
import { useEffect, useState } from "react";
import { fetchAQIData } from "../services/api";
import { exportAQIReport } from "../utils/exportReport";
function Analytics() {
  const [aqiData, setAqiData] = useState(null);

useEffect(() => {
  const loadAnalytics = async () => {
    const data = await fetchAQIData();
    setAqiData(data);
  };

  loadAnalytics();
}, []);
const history = aqiData?.aqi_history || [];

const averageAQI =
  history.length > 0
    ? Math.round(
        history.reduce((sum, item) => sum + item.aqi, 0) /
          history.length
      )
    : "--";

const highestAQI =
  history.length > 0
    ? history.reduce((a, b) =>
        a.aqi > b.aqi ? a : b
      )
    : null;

const lowestAQI =
  history.length > 0
    ? history.reduce((a, b) =>
        a.aqi < b.aqi ? a : b
      )
    : null;

const unhealthyDays =
  history.filter((item) => item.aqi > 100).length;

const poorDays =
  history.filter((item) => item.aqi > 200).length;
  return (
    <div className="space-y-16">

      {/* Hero Section */}

<section className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

  {/* Left */}

  <div className="max-w-3xl">

    <h1 className="text-5xl font-extrabold tracking-tight">
      Analytics
    </h1>

    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">

      <TrendingUp
        size={18}
        className="text-cyan-400"
      />

      <span className="text-cyan-300 font-medium">
        Air Quality Analytics & Insights
      </span>

    </div>

    <h2 className="mt-8 text-3xl font-bold">
      Pollution Analysis Dashboard
    </h2>

    <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
      Explore historical air quality trends,
      pollutant distribution,
      environmental reports,
      and AI-powered insights.
    </p>

  </div>

  {/* Right */}

  <div className="flex items-center gap-4">

    <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3">

      <Calendar
        size={18}
        className="text-cyan-400"
      />

      <span className="font-medium text-slate-300">
        Last 30 Days
      </span>

    </div>

    <button
  disabled={!aqiData}
  onClick={() => exportAQIReport(aqiData)}
  className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-50"
>
  <Download size={18} />
  Export Report
</button>

  </div>

</section>

      {/* KPI Cards */}

<section className="mt-10">

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

    <AnalyticsCard
  value={averageAQI}
  subtitle="Monthly Average"
  trend={`${unhealthyDays} Days`}
  trendColor="text-cyan-400"
/>

    <AnalyticsCard
      value={highestAQI?.aqi || "--"}
subtitle="Highest Recorded"
trend={highestAQI?.day || "--"}
trendColor="text-red-400"
    />
<AnalyticsCard
  value={lowestAQI?.aqi || "--"}
  subtitle="Lowest Recorded"
  trend={lowestAQI?.day || "--"}
  trendColor="text-green-400"
/>

  <AnalyticsCard
  value={poorDays}
  subtitle="Poor AQI Days"
  valueColor="text-orange-400"
  trend="AQI > 200"
  trendColor="text-orange-400"
/>

  </div>

</section>
<section className="pt-16">

  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

    <div className="mb-8">

      <h2 className="text-3xl font-bold">
        Monthly AQI Trend
      </h2>

      <p className="mt-2 text-slate-400">
        Historical air quality performance over the last 30 days.
      </p>

    </div>

    <MonthlyAQIChart />

  </div>

</section>
<section className="pt-14">

  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

    {/* Pollutant Comparison */}

    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold">
        Pollutant Comparison
      </h2>

      <p className="mt-2 text-slate-400">
        Current concentration of major pollutants.
      </p>

      <div className="mt-8">
        <PollutantComparisonChart />
      </div>

    </div>

    {/* Empty card for next chart */}

    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

  <h2 className="text-2xl font-bold">
    AQI Distribution
  </h2>

  <p className="mt-2 text-slate-400">
    Percentage of days by AQI category.
  </p>

  <div className="mt-8">

    <AQIDistributionChart />

  </div>

</div>

  </div>

</section>
<section className="pt-14">

  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

    <h2 className="text-3xl font-bold">
      Pollutant Trends
    </h2>

    <p className="mt-2 text-slate-400">
      Monthly comparison of all major pollutants.
    </p>

    <div className="mt-8">

      <PollutantTrendChart />

    </div>

  </div>

</section>
<section className="pt-14">

  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

    <h2 className="text-3xl font-bold">
      Weekly AQI Heatmap
    </h2>

    <p className="mt-2 text-slate-400">
      Air quality by time of day throughout the week.
    </p>

    <div className="mt-10">

      <AQIHeatmap />

    </div>

  </div>

</section>
<section className="pt-14">

  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

    <h2 className="text-3xl font-bold">
      Top Polluted Areas
    </h2>

    <p className="mt-2 text-slate-400">
      Cities with the highest recorded AQI this month.
    </p>

    <div className="mt-8">

      <TopPollutedAreasChart />

    </div>

  </div>

</section>
<section className="pt-14">

  <AIInsightCard />

</section>

    </div>
  );
}


export default Analytics;