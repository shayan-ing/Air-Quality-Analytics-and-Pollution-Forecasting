import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function WeatherForecastChart({ forecast = [] }) {

  const data = forecast.map((item) => ({
    day: item.day,
    temp: item.temperature,
  }));

  return (
    <div className="h-[380px] w-full">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
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
            domain={["auto", "auto"]}
          />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
            formatter={(value) => [
              `${value}°C`,
              "Temperature",
            ]}
          />

          <Line
            type="monotone"
            dataKey="temp"
            stroke="#f97316"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#f97316",
            }}
            activeDot={{
              r: 7,
            }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default WeatherForecastChart;