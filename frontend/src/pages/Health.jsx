import { useEffect, useState } from "react";

import {
  HeartPulse,
  Shield,
  RefreshCw,
} from "lucide-react";

import HealthCard from "../components/cards/HealthCard";
import SymptomChecker from "../components/health/SymptomChecker";
import HealthRecommendations from "../components/health/HealthRecommendations";
import EmergencyPrecautions from "../components/health/EmergencyPrecautions";
import NearbyHospitals from "../components/health/NearbyHospitals";
import { fetchAQIData } from "../services/api";

function Health() {

  const [aqiData, setAqiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const loadHealthData = async () => {
  try {
    setLoading(true);
    setError(null);

    const data = await fetchAQIData("Delhi");

    if (!data) {
      throw new Error("Failed to fetch current air quality data");
    }

    setAqiData(data);

  } catch (err) {
    console.error("Health AQI error:", err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {

    loadHealthData();

  }, []);


  // --------------------------------------------------
  // AQI DATA
  // --------------------------------------------------

  const aqi = aqiData?.aqi_index ?? 0;
const category = aqiData?.status ?? "Unknown";


  // --------------------------------------------------
  // HEALTH RISK
  // --------------------------------------------------

let riskLevel;
let riskColor;

if (aqi === 1) {
  riskLevel = "Good";
  riskColor = "text-green-400";
} else if (aqi === 2) {
  riskLevel = "Fair";
  riskColor = "text-green-400";
} else if (aqi === 3) {
  riskLevel = "Moderate";
  riskColor = "text-yellow-400";
} else if (aqi === 4) {
  riskLevel = "Poor";
  riskColor = "text-orange-400";
} else if (aqi === 5) {
  riskLevel = "Very Poor";
  riskColor = "text-red-400";
} else {
  riskLevel = "Unknown";
  riskColor = "text-slate-400";
}


  // --------------------------------------------------
  // OUTDOOR ACTIVITY
  // --------------------------------------------------

  const outdoorActivity =
  aqi <= 2
    ? "Safe"
    : aqi === 3
    ? "Limit"
    : "Avoid";

const outdoorColor =
  aqi <= 2
    ? "text-green-400"
    : aqi === 3
    ? "text-yellow-400"
    : "text-red-400";


  // --------------------------------------------------
  // MASK
  // --------------------------------------------------

  const maskRecommendation =
  aqi >= 3
    ? "N95"
    : "Optional";


  // --------------------------------------------------
  // SENSITIVE GROUPS
  // --------------------------------------------------

  const sensitiveStatus =
  aqi >= 3
    ? "Alert"
    : "Normal";

const sensitiveColor =
  aqi >= 3
    ? "text-red-400"
    : "text-green-400";


  return (

    <div className="space-y-16">


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

        <div className="max-w-3xl">

          <h1 className="text-5xl font-extrabold">
            Health
          </h1>


          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">

            <HeartPulse
              size={18}
              className="text-green-400"
            />

            <span className="text-green-300">
              Air Quality Health Assistant
            </span>

          </div>


          <h2 className="mt-8 text-3xl font-bold">
            Protect Yourself From Air Pollution
          </h2>


          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">

            Get personalized health recommendations,
            pollution alerts, and safety guidance based on
            current air quality conditions.

          </p>

        </div>


        {/* Right Controls */}

        <div className="flex gap-4">

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3"
          >

            <Shield
              size={18}
              className="text-green-400"
            />

            Current AQI: {loading ? "--" : `${aqi}/5`}

          </button>


          <button
            type="button"
            onClick={loadHealthData}
            disabled={loading}
            className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-slate-950 hover:bg-green-400 transition disabled:opacity-50"
          >

            <RefreshCw
              size={18}
              className={loading ? "animate-spin" : ""}
            />

            {loading ? "Refreshing..." : "Refresh"}

          </button>

        </div>

      </section>


      {/* ==================================================
          ERROR
      ================================================== */}

      {error && (

        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-red-400">

          Failed to load current AQI: {error}

        </div>

      )}


      {/* ==================================================
          HEALTH SUMMARY
      ================================================== */}

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">


        <HealthCard
  title="Risk Level"
  value={loading ? "--" : riskLevel}
  subtitle="Current Health Risk"
  badge={loading ? "--" : `${aqi}/5`}
  badgeColor={riskColor}
  valueColor={riskColor}
/>


        <HealthCard
  title="Outdoor Activity"
  value={loading ? "--" : outdoorActivity}
  subtitle={
    aqi <= 2
      ? "Outdoor activities are generally safe"
      : aqi === 3
      ? "Reduce prolonged outdoor exposure"
      : "Avoid prolonged outdoor exposure"
  }
  badge={loading ? "--" : `AQI ${aqi}/5`}
  badgeColor={outdoorColor}
  valueColor={outdoorColor}
/>

       <HealthCard
  title="Mask"
  value={loading ? "--" : maskRecommendation}
  subtitle="Recommended outdoors"
  badge={
    loading
      ? "--"
      : aqi >= 4
      ? "Required"
      : aqi >= 3
      ? "Recommended"
      : "Optional"
  }
  badgeColor="text-cyan-400"
  valueColor="text-cyan-400"
/>


        <HealthCard
          title="Sensitive Groups"
          value={loading ? "--" : sensitiveStatus}
          subtitle="Children & Elderly"
          badge={
            loading
              ? "--"
              : aqi > 3
              ? "Risk"
              : "Low Risk"
          }
          badgeColor={sensitiveColor}
          valueColor={sensitiveColor}
        />

      </section>


      {/* ==================================================
          SYMPTOMS
      ================================================== */}

      <section className="pt-12">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            Symptom Checker
          </h2>

          <p className="mt-2 text-slate-400">
            Select symptoms you're currently experiencing.
          </p>

          <div className="mt-8">

            <SymptomChecker />

          </div>

        </div>

      </section>


      {/* ==================================================
          HEALTH RECOMMENDATIONS
      ================================================== */}

      <section className="pt-12">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            Health Recommendations
          </h2>

          <p className="mt-2 text-slate-400">
            Personalized suggestions to reduce health risks from air pollution.
          </p>

          <div className="mt-8">

            <HealthRecommendations />

          </div>

        </div>

      </section>


      {/* ==================================================
          EMERGENCY PRECAUTIONS
      ================================================== */}

      <section className="pt-12">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            Emergency Precautions
          </h2>

          <p className="mt-2 text-slate-400">
            Important safety actions during unhealthy air quality conditions.
          </p>

          <div className="mt-8">

            <EmergencyPrecautions />

          </div>

        </div>

      </section>


      {/* ==================================================
          NEARBY HOSPITALS
      ================================================== */}

      <section className="pt-12">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            Nearby Hospitals
          </h2>

          <p className="mt-2 text-slate-400">
            Medical facilities available near your current location.
          </p>

          <div className="mt-8">

            <NearbyHospitals />

          </div>

        </div>

      </section>


    </div>

  );

}


export default Health;