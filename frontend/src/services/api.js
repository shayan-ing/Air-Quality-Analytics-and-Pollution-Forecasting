import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
});

export const fetchAQIData = async () => {
  try {

    const response = await API.get("/aqi");

    return response.data;

  } catch (error) {

    console.error("Error fetching AQI data:", error);

    return null;
  }
};