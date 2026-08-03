import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [location, setLocation] = useState({
    city: "Delhi",
    lat: 28.6139,
    lon: 77.2090,
  });

  const [loadingLocation, setLoadingLocation] = useState(false);

  // Detect user's current location
  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          // Reverse geocoding using OpenStreetMap
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          );

          const data = await response.json();

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state ||
            "Unknown";

          setLocation({
            city,
            lat,
            lon,
          });
        } catch (error) {
          console.error(error);
        }

        setLoadingLocation(false);
      },
      () => {
        alert("Unable to retrieve your location.");
        setLoadingLocation(false);
      }
    );
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        detectLocation,
        loadingLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}