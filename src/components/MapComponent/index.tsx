import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export function MapComponent() {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg shadow bg-slate-400">
      <MapContainer
        center={[-23.559054446400502, -46.66795550266769]}
        zoom={14}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-23.559054446400502, -46.66795550266769]}>
          <Popup>
            Rua Dr. Melo Alves,<br />89 sala 03 - Jardins<br />Cep: 01417-010
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
