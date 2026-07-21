const hotspots = [
  {
    city: "Delhi",
    aqi: 182,
    status: "Very Poor",
    color: "bg-red-500",
  },
  {
    city: "Noida",
    aqi: 168,
    status: "Poor",
    color: "bg-orange-500",
  },
  {
    city: "Ghaziabad",
    aqi: 149,
    status: "Moderate",
    color: "bg-yellow-500",
  },
  {
    city: "Faridabad",
    aqi: 134,
    status: "Moderate",
    color: "bg-yellow-500",
  },
];

function PollutionHotspots() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 h-full">

      <h2 className="text-2xl font-bold">
        Pollution Hotspots
      </h2>

      <p className="mt-2 text-slate-400">
        Cities with the highest recorded AQI.
      </p>

      <div className="mt-8 space-y-5">

        {hotspots.map((spot) => (

          <div
            key={spot.city}
            className="flex items-center justify-between rounded-2xl bg-slate-800/50 p-4"
          >

            <div className="flex items-center gap-4">

              <div
                className={`h-3 w-3 rounded-full ${spot.color}`}
              />

              <div>

                <p className="font-semibold">
                  {spot.city}
                </p>

                <p className="text-sm text-slate-400">
                  {spot.status}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="text-2xl font-bold text-cyan-400">
                {spot.aqi}
              </p>

              <p className="text-xs text-slate-500">
                AQI
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PollutionHotspots;