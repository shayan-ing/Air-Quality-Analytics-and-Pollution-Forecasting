import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function AQIForecastChart({ forecast = [] }) {

  const data = forecast.map((item) => ({
    day: item.day,
    aqi: item.aqi,
  }));

  return (

    <div className="h-[380px] w-full">

      <ResponsiveContainer width="100%" height="100%">

        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >

          <defs>

            <linearGradient
              id="forecastGradient"
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
                stopOpacity={0.02}
              />

            </linearGradient>

          </defs>


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
            domain={[0, "auto"]}
          />


          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
            formatter={(value) => [
              `${value} AQI`,
              "Predicted AQI",
            ]}
          />


          <Area
            type="monotone"
            dataKey="aqi"
            stroke="#22d3ee"
            strokeWidth={4}
            fill="url(#forecastGradient)"
            dot={{
              r: 5,
              fill: "#22d3ee",
            }}
            activeDot={{
              r: 7,
            }}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  );
}

export default AQIForecastChart;