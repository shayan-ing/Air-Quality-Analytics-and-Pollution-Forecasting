import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

import { fetchAQIData } from "../../services/api";

const COLORS = [
  "#22d3ee",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#a855f7",
  "#ec4899",
  "#f97316",
];

function TopPollutedAreasChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchAQIData();

      if (!response) return;

      const stations = [...response.monitoring_stations]
        .sort((a, b) => b.aqi - a.aqi)
        .map((station) => ({
          city: station.name,
          AQI: station.aqi,
        }));

      setData(stations);
    };

    loadData();
  }, []);

  return (
    <div className="h-[350px] w-full">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 20,
            left: 30,
            bottom: 5,
          }}
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
            type="category"
            dataKey="city"
            stroke="#94a3b8"
            width={110}
          />

          <Tooltip
            formatter={(value) => [`${value}`, "AQI"]}
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />

          <Bar
            dataKey="AQI"
            radius={[0, 8, 8, 0]}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default TopPollutedAreasChart;