import { useEffect, useState } from "react";

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

import { fetchAQIData } from "../../services/api";

function PollutantTrendChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const aqiData = await fetchAQIData();

      if (!aqiData) return;

      const history = aqiData.pollutant_history;

      const chartData = history.pm2_5.map((item, index) => ({
        day: item.day,

        PM25: history.pm2_5[index].value,

        PM10: history.pm10[index].value,

        NO2: history.no2[index].value,

        O3: history.o3[index].value,

        // Normalize CO so it doesn't flatten other lines
        CO: +(history.co[index].value / 25).toFixed(2),
      }));

      setData(chartData);
    };

    loadData();
  }, []);

  return (
    <div className="h-[420px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 10,
          }}
        >
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
            domain={[0, 40]}
          />

          <Tooltip
            formatter={(value, name) => {
              if (name === "CO") {
                return [
                  `${(value * 25).toFixed(2)} µg/m³`,
                  "CO",
                ];
              }

              return [
                `${value} µg/m³`,
                name,
              ];
            }}
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
            dot={false}
            activeDot={{ r: 6 }}
          />

          <Line
            type="monotone"
            dataKey="PM10"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />

          <Line
            type="monotone"
            dataKey="NO2"
            stroke="#22c55e"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />

          <Line
            type="monotone"
            dataKey="O3"
            stroke="#f59e0b"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />

          <Line
            type="monotone"
            dataKey="CO"
            stroke="#a855f7"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PollutantTrendChart;