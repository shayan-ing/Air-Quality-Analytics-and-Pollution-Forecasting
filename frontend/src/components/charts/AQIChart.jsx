import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { fetchAQIData } from "../../services/api";

function AQIChart() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadAQI = async () => {
      const data = await fetchAQIData();

      if (data) {
        setHistory(data.aqi_history);
      }
    };

    loadAQI();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={360}>
      <AreaChart
        data={history}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient
            id="aqiGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="5%"
              stopColor="#06b6d4"
              stopOpacity={0.45}
            />
            <stop
              offset="95%"
              stopColor="#06b6d4"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

        <CartesianGrid
          stroke="#1e293b"
          strokeDasharray="4 4"
          vertical={false}
        />

        <XAxis
          dataKey="day"
          tick={{ fill: "#94a3b8" }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
  domain={[0, 400]}
  ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
  tick={{ fill: "#94a3b8" }}
  axisLine={false}
  tickLine={false}
/>

        <Tooltip
          formatter={(value) => [`${value}`, "AQI"]}
          contentStyle={{
            backgroundColor: "#0f172a",
            border: "1px solid #334155",
            borderRadius: "12px",
            color: "#fff",
          }}
        />

        <Area
          type="monotone"
          dataKey="aqi"
          stroke="#06b6d4"
          strokeWidth={4}
          fill="url(#aqiGradient)"
          animationDuration={1800}
          activeDot={{
            r: 8,
            fill: "#06b6d4",
            stroke: "#ffffff",
            strokeWidth: 2,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AQIChart;