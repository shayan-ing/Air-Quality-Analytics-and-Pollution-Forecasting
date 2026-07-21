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
function Health() {
  return (
    <div className="space-y-16">

      {/* Hero */}

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

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3">

            <Shield
              size={18}
              className="text-green-400"
            />

            Current AQI

          </button>

          <button className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-slate-950 hover:bg-green-400 transition">

            <RefreshCw size={18} />

            Refresh

          </button>

        </div>

      </section>
      {/* Health Summary */}

<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

  <HealthCard
    title="Risk Level"
    value="Moderate"
    subtitle="Current Health Risk"
    badge="132"
    badgeColor="text-yellow-400"
    valueColor="text-yellow-400"
  />

  <HealthCard
    title="Outdoor Activity"
    value="Safe"
    subtitle="Recommended Until 5 PM"
    badge="✓"
    badgeColor="text-green-400"
  />

  <HealthCard
    title="Mask"
    value="N95"
    subtitle="Recommended Outdoors"
    badge="Required"
    badgeColor="text-cyan-400"
    valueColor="text-cyan-400"
  />

  <HealthCard
    title="Sensitive Groups"
    value="Alert"
    subtitle="Children & Elderly"
    badge="Risk"
    badgeColor="text-red-400"
    valueColor="text-red-400"
  />

</section>
{/* Symptoms */}

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
{/* Health Recommendations */}

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