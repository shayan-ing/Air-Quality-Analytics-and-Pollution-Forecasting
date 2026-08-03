import { useEffect, useState } from "react";
import { fetchAQIData } from "../../services/api";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function PollutantChart() {
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
          pollutant: "CO",
          value: Number(aqiData.co.toFixed(2)),
        },
      ]);
    };

    loadData();
  }, []);

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