import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import { fetchAQIData } from "../../services/api";

const COLORS = [
  "#22c55e",
  "#06b6d4",
  "#f59e0b",
  "#ef4444",
  "#7c3aed",
  "#7f1d1d",
];

function AQIDistributionChart() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const loadData = async () => {

      const aqiData = await fetchAQIData();

      if (!aqiData) return;

      const counts = {
        Good: 0,
        Satisfactory: 0,
        Moderate: 0,
        Poor: 0,
        "Very Poor": 0,
        Severe: 0,
      };

      aqiData.aqi_history.forEach((item) => {

        const value = item.aqi;

        if (value <= 50)
          counts.Good++;

        else if (value <= 100)
          counts.Satisfactory++;

        else if (value <= 200)
          counts.Moderate++;

        else if (value <= 300)
          counts.Poor++;

        else if (value <= 400)
          counts["Very Poor"]++;

        else
          counts.Severe++;

      });

      const chartData = Object.entries(counts)
        .filter(([_, value]) => value > 0)
        .map(([name, value]) => ({
          name,
          value,
        }));

      setData(chartData);

    };

    loadData();

  }, []);

  return (

    <div className="h-[350px] w-full">

      <ResponsiveContainer width="100%" height="100%">

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={3}
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}

export default AQIDistributionChart;