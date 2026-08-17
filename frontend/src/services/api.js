export const fetchAQIData = async (city = "Delhi") => {
  try {
    const response = await fetch(
  `http://127.0.0.1:5000/api/aqi?city=${encodeURIComponent(city)}`
);

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching AQI data:", error);
    return null;
  }
};