import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export function MapComponent() {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg shadow bg-slate-400">
      <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2601062488125!2d-46.670492089282725!3d-23.55909996142038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582b289aa615%3A0xefb37e9ff43b96c!2sR.%20Dr.%20Melo%20Alves%2C%2089%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001417-010!5e0!3m2!1spt-BR!2sbr!4v1702243297429!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}
