import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

const stations = [
  {
    city: "Delhi",
    aqi: 182,
    position: [28.6139, 77.2090],
  },
  {
    city: "Noida",
    aqi: 164,
    position: [28.5355, 77.3910],
  },
  {
    city: "Ghaziabad",
    aqi: 149,
    position: [28.6692, 77.4538],
  },
  {
    city: "Faridabad",
    aqi: 136,
    position: [28.4089, 77.3178],
  },
];

function AirQualityMap() {
  return (
    <div className="h-[700px] rounded-3xl overflow-hidden border border-slate-800">

      <MapContainer
        center={[28.6139, 77.2090]}
        zoom={10}
        className="h-full w-full"
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {stations.map((station) => (
          <Marker
            key={station.city}
            position={station.position}
          >
            <Popup>

              <h3 className="font-bold">
                {station.city}
              </h3>

              AQI: {station.aqi}

            </Popup>
          </Marker>
        ))}

      </MapContainer>

    </div>
  );
}

export default AirQualityMap;