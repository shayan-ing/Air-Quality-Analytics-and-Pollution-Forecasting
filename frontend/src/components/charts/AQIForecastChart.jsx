import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Today", aqi: 148 },
  { day: "Thu", aqi: 142 },
  { day: "Fri", aqi: 135 },
  { day: "Sat", aqi: 126 },
  { day: "Sun", aqi: 132 },
  { day: "Mon", aqi: 140 },
  { day: "Tue", aqi: 136 },
];

function AQIForecastChart() {
  return (
    <div className="h-[420px] w-full">

      <ResponsiveContainer width="100%" height="100%">

        <AreaChart data={data}>

          <defs>

            <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">

              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.45} />

              <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.02} />

            </linearGradient>

          </defs>

          <CartesianGrid
            stroke="#1e293b"
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="day"
            stroke="#94a3b8"
          />

          <YAxis
            stroke="#94a3b8"
          />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />

          <Area
            type="monotone"
            dataKey="aqi"
            stroke="#22d3ee"
            strokeWidth={4}
            fill="url(#forecastGradient)"
            dot={{
              r: 5,
              fill: "#22d3ee",
            }}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AQIForecastChart;