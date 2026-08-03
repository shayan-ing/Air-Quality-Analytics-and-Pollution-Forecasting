import { useEffect, useState } from "react";

import {
  Brain,
  Wind,
  Thermometer,
  ShieldCheck,
  Droplets,
} from "lucide-react";

import { fetchAQIData } from "../../services/api";

function AIInsightCard() {

  const [aqiData, setAqiData] = useState(null);

  useEffect(() => {

    const loadData = async () => {

      const data = await fetchAQIData();

      if (data) {
        setAqiData(data);
      }

    };

    loadData();

  }, []);

  if (!aqiData) {

    return (
      <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8">
        Loading AI Insights...
      </div>
    );

  }

  const insights = [];

  // AQI
  if (aqiData.aqi_index <= 2) {

    insights.push({
      icon: ShieldCheck,
      color: "text-green-400",
      text: "Air quality is currently satisfactory for most outdoor activities.",
    });

  } else {

    insights.push({
      icon: ShieldCheck,
      color: "text-red-400",
      text: "Poor air quality detected. Limit prolonged outdoor exposure.",
    });

  }

  // Wind
  if (aqiData.wind_speed >= 4) {

    insights.push({
      icon: Wind,
      color: "text-cyan-400",
      text: `Wind speed of ${aqiData.wind_speed} m/s may help disperse pollutants.`,
    });

  } else {

    insights.push({
      icon: Wind,
      color: "text-cyan-400",
      text: `Low wind speed (${aqiData.wind_speed} m/s) may allow pollutants to accumulate.`,
    });

  }

  // Temperature
  insights.push({
    icon: Thermometer,
    color: "text-orange-400",
    text: `Current temperature is ${Math.round(aqiData.temperature)}°C.`,
  });

  // Humidity
  if (aqiData.humidity > 70) {

    insights.push({
      icon: Droplets,
      color: "text-blue-400",
      text: `Humidity is ${aqiData.humidity}%. Moist air may trap pollutants.`,
    });

  } else {

    insights.push({
      icon: Droplets,
      color: "text-blue-400",
      text: `Humidity is ${aqiData.humidity}%. Atmospheric conditions are stable.`,
    });

  }

  return (

    <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8">

      <div className="flex items-center gap-3">

        <Brain
          size={34}
          className="text-cyan-400"
        />

        <div>

          <h2 className="text-3xl font-bold">
            AI Insights
          </h2>

          <p className="text-slate-400">
            Generated from live environmental data
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        {insights.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="flex items-center gap-3"
            >

              <Icon
                size={20}
                className={item.color}
              />

              <span>{item.text}</span>

            </div>

          );

        })}

      </div>

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <p className="text-sm text-slate-400">
          Data Source
        </p>

        <h2 className="mt-2 text-3xl font-bold text-cyan-400">
          OpenWeather API
        </h2>

        <p className="mt-2 text-slate-400">
          Live environmental analysis
        </p>

      </div>

    </div>

  );

}

export default AIInsightCard;