import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const colors = [
  "#22d3ee",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#a855f7",
];

function PredictedPollutantsChart({ pollutants = {} }) {

  const data = [
    {
      name: "PM2.5",
      value: pollutants.pm25 ?? 0,
    },
    {
      name: "PM10",
      value: pollutants.pm10 ?? 0,
    },
    {
      name: "NO₂",
      value: pollutants.no2 ?? 0,
    },
    {
      name: "SO₂",
      value: pollutants.so2 ?? 0,
    },
    {
      name: "CO",
      value: pollutants.co ?? 0,
    },
  ];

  return (

    <div className="h-[380px] w-full">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart
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
            dataKey="name"
            stroke="#94a3b8"
          />

          <YAxis
            stroke="#94a3b8"
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
            formatter={(value) => [
              `${value} µg/m³`,
              "Concentration",
            ]}
          />

          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
          >

            {data.map((entry, index) => (

              <Cell
                key={entry.name}
                fill={colors[index]}
              />

            ))}

          </Bar>

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default PredictedPollutantsChart;