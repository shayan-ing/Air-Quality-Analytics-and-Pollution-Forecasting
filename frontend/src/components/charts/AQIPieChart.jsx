import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Good", value: 35 },
  { name: "Moderate", value: 40 },
  { name: "Poor", value: 15 },
  { name: "Very Poor", value: 10 },
];

const COLORS = [
  "#22c55e",
  "#06b6d4",
  "#f59e0b",
  "#ef4444",
];

function AQIPieChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={70}
          outerRadius={105}
          paddingAngle={4}
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}
        </Pie>

        <Tooltip
          contentStyle={{
            background: "#0f172a",
            border: "1px solid #334155",
            borderRadius: "12px",
          }}
        />

        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default AQIPieChart;