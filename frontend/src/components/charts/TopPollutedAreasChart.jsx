import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { city: "Delhi", AQI: 182 },
  { city: "Noida", AQI: 165 },
  { city: "Ghaziabad", AQI: 149 },
  { city: "Gurgaon", AQI: 138 },
  { city: "Faridabad", AQI: 126 },
];

function TopPollutedAreasChart() {
  return (
    <div className="h-[350px] w-full">

      <ResponsiveContainer>

        <BarChart
          layout="vertical"
          data={data}
        >

          <CartesianGrid
            stroke="#1e293b"
            strokeDasharray="4 4"
          />

          <XAxis
            type="number"
            stroke="#94a3b8"
          />

          <YAxis
            dataKey="city"
            type="category"
            stroke="#94a3b8"
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />

          <Bar
            dataKey="AQI"
            fill="#22d3ee"
            radius={[0,8,8,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default TopPollutedAreasChart;