import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

import { fetchAQIData } from "../../services/api";

// --------------------------------------------------------
// Fix Leaflet's default marker icon not loading under Vite.
// Leaflet's built-in icon URLs are relative paths that break
// when bundled by Vite/Webpack, so the pin image silently
// fails to load. This re-points them at working URLs.
// --------------------------------------------------------
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function AirQualityMap() {

  const [stations, setStations] = useState([]);

  useEffect(() => {

    const loadStations = async () => {

      const data = await fetchAQIData();

      if (data) {
        setStations(data.monitoring_stations);
      }

    };

    loadStations();

  }, []);

  if (stations.length === 0) {

    return (
      <div className="h-[700px] flex items-center justify-center rounded-3xl border border-slate-800 bg-slate-900">
        Loading Map...
      </div>
    );

  }

  return (

    <div className="h-[700px] rounded-3xl overflow-hidden border border-slate-800">

      <MapContainer
        center={[
          stations[0].latitude,
          stations[0].longitude,
        ]}
        zoom={11}
        className="h-full w-full"
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {stations.map((station) => (

          <Marker
            key={station.name}
            position={[
              station.latitude,
              station.longitude,
            ]}
          >

            <Popup>

              <h3 className="font-bold text-lg">
                {station.name}
              </h3>

              <p>

                AQI :
                <strong> {station.aqi}</strong>

              </p>

              <p>

                Status :
                <strong> {station.status}</strong>

              </p>

            </Popup>

          </Marker>

        ))}

      </MapContainer>

    </div>

  );

}

export default AirQualityMap;