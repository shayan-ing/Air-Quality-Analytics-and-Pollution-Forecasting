import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", aqi: 118 },
  { day: "Tue", aqi: 121 },
  { day: "Wed", aqi: 132 },
  { day: "Thu", aqi: 126 },
  { day: "Fri", aqi: 141 },
  { day: "Sat", aqi: 137 },
  { day: "Sun", aqi: 129 },
];

function AQIChart() {
  return (
    <ResponsiveContainer width="100%" height={360}>
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 10,
        }}
      >
        {/* Gradient */}
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
          tick={{ fill: "#94a3b8" }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          cursor={{
            stroke: "#06b6d4",
            strokeWidth: 2,
          }}
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