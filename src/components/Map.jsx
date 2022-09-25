// npm
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Map({ location }) {
  // properties
  const { location_coordinate_latitude, location_coordinate_longitude } =
    location.state;
  const latitude = location_coordinate_latitude;
  const longitude = location_coordinate_longitude;

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]} />
    </MapContainer>
  );
}
