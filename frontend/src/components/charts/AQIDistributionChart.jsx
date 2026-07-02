import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Good",
    value: 35,
  },
  {
    name: "Moderate",
    value: 30,
  },
  {
    name: "Poor",
    value: 20,
  },
  {
    name: "Very Poor",
    value: 10,
  },
  {
    name: "Severe",
    value: 5,
  },
];

const COLORS = [
  "#22c55e",
  "#06b6d4",
  "#f59e0b",
  "#ef4444",
  "#7c3aed",
];

function AQIDistributionChart() {
  return (
    <div className="h-[350px] w-full">

      <ResponsiveContainer width="100%" height="100%">

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={3}
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
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AQIDistributionChart;