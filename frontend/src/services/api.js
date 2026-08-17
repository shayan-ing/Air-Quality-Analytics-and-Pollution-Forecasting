const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";

export const fetchAQIData = async (city = "Delhi") => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/aqi?city=${encodeURIComponent(city)}`
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