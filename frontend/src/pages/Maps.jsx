import {
  MapPinned,
  Search,
  Navigation,
  LocateFixed,
} from "lucide-react";
import AirQualityMap from "../components/maps/AirQualityMap";
import PollutionHotspots from "../components/maps/PollutionHotspots";
import MonitoringStations from "../components/maps/MonitoringStations";
function Maps() {
  return (
    <div className="space-y-16">

      {/* Hero */}

      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

        <div className="max-w-3xl">

          <h1 className="text-5xl font-extrabold">
            Pollution Map
          </h1>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">

            <MapPinned
              size={18}
              className="text-cyan-400"
            />

            <span className="text-cyan-300">
              Live Air Quality Monitoring
            </span>

          </div>

          <h2 className="mt-8 text-3xl font-bold">
            Explore Air Quality Across Cities
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            View pollution hotspots, nearby monitoring stations,
            and real-time AQI levels on an interactive map.
          </p>

        </div>

        {/* Controls */}

        <div className="flex gap-4">

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3">

            <LocateFixed
              size={18}
              className="text-cyan-400"
            />

            My Location

          </button>

          <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition">

            <Navigation size={18} />

            Open Map

          </button>

        </div>

      </section>
      <section className="pt-12">

  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

    <div className="mb-8">

      <h2 className="text-3xl font-bold">
        Live Air Quality Map
      </h2>

      <p className="mt-2 text-slate-400">
        Interactive view of AQI monitoring stations.
      </p>

    </div>

    <AirQualityMap />

  </div>

</section>
<section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

  <PollutionHotspots />

  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 flex items-center justify-center">

    <p className="text-slate-500">
   <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

  <h2 className="text-3xl font-bold">
    Monitoring Stations
  </h2>

  <p className="mt-2 text-slate-400">
    Live AQI monitoring stations.
  </p>

  <div className="mt-8">
    <MonitoringStations />
  </div>

</div>
    </p>

  </div>

</section>

    </div>
  );
}

export default Maps;