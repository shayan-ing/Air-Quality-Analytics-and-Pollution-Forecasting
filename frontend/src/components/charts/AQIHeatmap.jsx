const data = [
  ["Good", "Moderate", "Good", "Poor", "Very Poor", "Moderate", "Good"],
  ["Moderate", "Poor", "Very Poor", "Poor", "Poor", "Moderate", "Good"],
  ["Good", "Good", "Moderate", "Poor", "Very Poor", "Poor", "Moderate"],
  ["Good", "Good", "Good", "Moderate", "Poor", "Moderate", "Good"],
];

const days = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

const time = [
  "Morning",
  "Afternoon",
  "Evening",
  "Night",
];

const colors = {
  Good: "bg-green-500",
  Moderate: "bg-cyan-500",
  Poor: "bg-yellow-500",
  "Very Poor": "bg-red-500",
};

function AQIHeatmap() {
  return (
    <div className="space-y-4">

      <div className="grid grid-cols-8 gap-3">

        <div></div>

        {days.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-semibold text-slate-400"
          >
            {day}
          </div>
        ))}

        {time.map((t, row) => (
          <>
            <div
              key={t}
              className="flex items-center font-semibold text-slate-400"
            >
              {t}
            </div>

            {data[row].map((value, col) => (
              <div
                key={col}
                className={`h-12 rounded-xl ${colors[value]} transition hover:scale-105`}
                title={value}
              />
            ))}
          </>
        ))}

      </div>

    </div>
  );
}

export default AQIHeatmap;