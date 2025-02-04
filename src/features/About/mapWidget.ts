import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

export function createMapWidget(containerDomNode: HTMLElement) {
  const map = L.map(containerDomNode);
  map.setView([51.2277, 6.7735], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  return map;
}

export function addPopupToMapWidget(map: L.Map) {
  const popupDiv = document.createElement("div");
  L.popup().setLatLng([51.2277, 6.7735]).setContent(popupDiv).openOn(map);
  
  return popupDiv;
}
