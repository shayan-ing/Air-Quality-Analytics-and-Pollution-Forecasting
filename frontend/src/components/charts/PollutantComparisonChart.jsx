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

const colors = [
  "#22d3ee",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#a855f7",
];

function PollutantComparisonChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const aqiData = await fetchAQIData();

      if (!aqiData) return;

      setData([
        {
          pollutant: "PM2.5",
          value: Number(aqiData.pm2_5.toFixed(2)),
        },
        {
          pollutant: "PM10",
          value: Number(aqiData.pm10.toFixed(2)),
        },
        {
          pollutant: "NO₂",
          value: Number(aqiData.no2.toFixed(2)),
        },
        {
          pollutant: "O₃",
          value: Number(aqiData.o3.toFixed(2)),
        },
        {
          pollutant: "CO (÷20)",
          value: Number((aqiData.co / 20).toFixed(2)),
        },
      ]);
    };

    loadData();
  }, []);

  return (
    <div className="h-[350px] w-full">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >

          <CartesianGrid
            stroke="#1e293b"
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="pollutant"
            stroke="#94a3b8"
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            stroke="#94a3b8"
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            formatter={(value, _, props) => {
              const pollutant = props.payload.pollutant;

              if (pollutant === "CO (÷20)") {
                return [
                  `${(value * 20).toFixed(2)} µg/m³`,
                  "CO (Actual)",
                ];
              }

              return [
                `${value} µg/m³`,
                pollutant,
              ];
            }}
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
            animationDuration={1500}
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.pollutant}
                fill={colors[index]}
              />
            ))}
          </Bar>

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default PollutantComparisonChart;