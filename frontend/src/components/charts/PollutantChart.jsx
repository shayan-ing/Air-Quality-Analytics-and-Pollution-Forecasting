import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { pollutant: "PM2.5", value: 45 },
  { pollutant: "PM10", value: 82 },
  { pollutant: "NO₂", value: 28 },
  { pollutant: "SO₂", value: 12 },
  { pollutant: "CO", value: 8 },
];

function PollutantChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#334155"
        />

        <XAxis
          dataKey="pollutant"
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

        <Bar
          dataKey="value"
          fill="#06b6d4"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default PollutantChart;