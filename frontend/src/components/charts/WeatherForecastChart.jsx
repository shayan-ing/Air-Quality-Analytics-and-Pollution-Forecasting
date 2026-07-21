import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Today", temp: 34 },
  { day: "Thu", temp: 33 },
  { day: "Fri", temp: 32 },
  { day: "Sat", temp: 31 },
  { day: "Sun", temp: 32 },
  { day: "Mon", temp: 34 },
  { day: "Tue", temp: 35 },
];

function WeatherForecastChart() {
  return (
    <div className="h-[360px] w-full">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={data}>

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

          <Line
            type="monotone"
            dataKey="temp"
            stroke="#f97316"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#f97316",
            }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default WeatherForecastChart;