import { useEffect, useState } from "react";
import { fetchAQIData } from "../../services/api";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#22c55e",
  "#06b6d4",
  "#eab308",
  "#f97316",
  "#ef4444",
];

function AQIPieChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const aqiData = await fetchAQIData();

      if (!aqiData) return;

      const chartData = [
        {
          name: "Good",
          value: aqiData.status === "Good" ? 100 : 0,
        },
        {
          name: "Fair",
          value: aqiData.status === "Fair" ? 100 : 0,
        },
        {
          name: "Moderate",
          value: aqiData.status === "Moderate" ? 100 : 0,
        },
        {
          name: "Poor",
          value: aqiData.status === "Poor" ? 100 : 0,
        },
        {
          name: "Very Poor",
          value: aqiData.status === "Very Poor" ? 100 : 0,
        },
      ];

      setData(chartData);
    };

    loadData();
  }, []);

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