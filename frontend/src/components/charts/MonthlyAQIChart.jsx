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

function MonthlyAQIChart() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const loadData = async () => {

      const aqiData = await fetchAQIData();

      if (!aqiData) return;

      setData(aqiData.aqi_history);

    };

    loadData();

  }, []);

  return (

    <div className="h-[380px] w-full">

      <ResponsiveContainer width="100%" height="100%">

        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 25,
            left: 0,
            bottom: 0,
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
                offset="0%"
                stopColor="#22d3ee"
                stopOpacity={0.45}
              />

              <stop
                offset="100%"
                stopColor="#22d3ee"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid
            stroke="#1e293b"
            strokeDasharray="5 5"
          />

          <XAxis
            dataKey="day"
            stroke="#94a3b8"
          />

          <YAxis
            stroke="#94a3b8"
            domain={[0, 400]}
          />

          <Tooltip
            formatter={(value) => [`${value}`, "AQI"]}
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />

          <Area
            type="monotone"
            dataKey="aqi"
            stroke="#22d3ee"
            strokeWidth={4}
            fill="url(#aqiGradient)"
            dot={{
              r: 5,
              fill: "#22d3ee",
            }}
            activeDot={{
              r: 8,
            }}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  );

}

export default MonthlyAQIChart;