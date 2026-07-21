import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { day: "1", PM25: 72, PM10: 110, NO2: 38, SO2: 16, CO: 22 },
  { day: "5", PM25: 75, PM10: 115, NO2: 40, SO2: 18, CO: 24 },
  { day: "10", PM25: 84, PM10: 122, NO2: 45, SO2: 20, CO: 27 },
  { day: "15", PM25: 78, PM10: 118, NO2: 42, SO2: 19, CO: 25 },
  { day: "20", PM25: 92, PM10: 132, NO2: 48, SO2: 22, CO: 29 },
  { day: "25", PM25: 86, PM10: 126, NO2: 44, SO2: 20, CO: 26 },
  { day: "30", PM25: 79, PM10: 120, NO2: 41, SO2: 18, CO: 23 },
];

function PollutantTrendChart() {
  return (
    <div className="h-[420px] w-full">

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
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="PM25"
            stroke="#22d3ee"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="PM10"
            stroke="#3b82f6"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="NO2"
            stroke="#22c55e"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="SO2"
            stroke="#f59e0b"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="CO"
            stroke="#a855f7"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default PollutantTrendChart;