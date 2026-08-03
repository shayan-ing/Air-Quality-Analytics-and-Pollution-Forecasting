import { useEffect, useState } from "react";
import { fetchAQIData } from "../../services/api";

const days = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

const time = [
  "Morning",
  "Afternoon",
  "Evening",
  "Night",
];

const colors = {
  Good: "bg-green-500",
  Moderate: "bg-cyan-500",
  Poor: "bg-yellow-500",
  "Very Poor": "bg-red-500",
};

function AQIHeatmap() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const loadHeatmap = async () => {

      const response = await fetchAQIData();

      if (!response) return;

      const history = response.aqi_history.slice(-7);

      const heatmap = [];

      const getCategory = (aqi) => {

        if (aqi <= 50) return "Good";
        if (aqi <= 100) return "Moderate";
        if (aqi <= 150) return "Poor";
        return "Very Poor";

      };

      for (let row = 0; row < 4; row++) {

        const rowData = history.map((item) => {

          const variation =
  item.aqi +
  (row - 1) * 25 +
  Math.floor(Math.random() * 30 - 15);

          return getCategory(Math.max(20, variation));

        });

        heatmap.push(rowData);

      }

      setData(heatmap);

    };

    loadHeatmap();

  }, []);

  return (

    <div className="space-y-4">

      <div className="grid grid-cols-8 gap-3">

        <div></div>

        {days.map((day) => (

          <div
            key={day}
            className="text-center text-sm font-semibold text-slate-400"
          >
            {day}
          </div>

        ))}

        {time.map((t, row) => (

          <div key={t} className="contents">

            <div className="flex items-center font-semibold text-slate-400">
              {t}
            </div>

            {data[row]?.map((value, col) => (

              <div
                key={`${row}-${col}`}
                className={`h-12 rounded-xl ${colors[value]} transition hover:scale-105`}
                title={`${days[col]} • ${t} • ${value}`}
              />

            ))}

          </div>

        ))}

      </div>

    </div>

  );

}

export default AQIHeatmap;