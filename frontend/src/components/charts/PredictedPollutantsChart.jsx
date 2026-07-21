import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { name: "PM2.5", value: 82 },
  { name: "PM10", value: 128 },
  { name: "NO₂", value: 44 },
  { name: "SO₂", value: 20 },
  { name: "CO", value: 2.1 },
];

const colors = [
  "#22d3ee",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#a855f7",
];

function PredictedPollutantsChart() {
  return (
    <div className="h-[380px] w-full">

      <ResponsiveContainer>

        <BarChart data={data}>

          <CartesianGrid
            stroke="#1e293b"
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="name"
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
            radius={[8, 8, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={colors[index]}
              />
            ))}
          </Bar>

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default PredictedPollutantsChart;