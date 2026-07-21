import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", temp: 31 },
  { day: "Tue", temp: 33 },
  { day: "Wed", temp: 35 },
  { day: "Thu", temp: 34 },
  { day: "Fri", temp: 36 },
  { day: "Sat", temp: 37 },
  { day: "Sun", temp: 35 },
];

function ForecastChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="forecast" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.7} />
            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid
          stroke="#334155"
          strokeDasharray="3 3"
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
          dataKey="temp"
          stroke="#06b6d4"
          strokeWidth={3}
          fill="url(#forecast)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default ForecastChart;