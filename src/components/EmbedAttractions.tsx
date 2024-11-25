import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Local assets
import defaultMarkerIcon from 'leaflet/dist/images/marker-icon.png';
import hotelMarkerIcon from '../assets/logo.svg'; // Local marker image
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Default Marker Icon
const DefaultIcon = L.icon({
  iconUrl: defaultMarkerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});

// Hotel Marker Icon
const HotelIcon = L.icon({
  iconUrl: hotelMarkerIcon,
  shadowUrl: markerShadow,
  iconSize: [100, 100],
  iconAnchor: [17, 45],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Attractions data
const attractions = [
  {
    name: 'Phewa Lake',
    lat: 28.2096,
    lng: 83.9595,
    info: 'A beautiful freshwater lake.',
  },
  {
    name: 'Sarangkot',
    lat: 28.2433,
    lng: 83.9486,
    info: 'A scenic viewpoint for sunrise and mountains.',
  },
  {
    name: 'Peace Pagoda',
    lat: 28.2167,
    lng: 83.9441,
    info: 'A Buddhist pagoda offering panoramic views.',
  },
  {
    name: 'Davis Fall',
    lat: 28.1988,
    lng: 83.9626,
    info: 'A unique waterfall.',
  },
  {
    name: 'Gupteshwor Cave',
    lat: 28.1983,
    lng: 83.9633,
    info: 'A cave near Davis Fall.',
  },
  {
    name: 'Mahendra Cave',
    lat: 28.2722,
    lng: 83.9798,
    info: 'A large limestone cave.',
  },
  {
    name: 'Begnas Lake',
    lat: 28.1917,
    lng: 84.0617,
    info: 'A tranquil freshwater lake.',
  },
];

const hotel = {
  name: 'Temple Bell Hotel & Spa',
  lat: 28.2119254,
  lng: 83.9605281,
  info: 'This is the property.',
};

const EmbedAttractions: React.FC = () => {
  return (
    <MapContainer
      center={[hotel.lat, hotel.lng]}
      zoom={14}
      scrollWheelZoom={true}
      className="z-10 h-[110vh] w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //   attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      {/* Highlighted Hotel Marker */}
      <Marker position={[hotel.lat, hotel.lng]} icon={HotelIcon}>
        <Popup>
          <h3 className="font-bold text-blue-600">{hotel.name}</h3>
          <p>{hotel.info}</p>
        </Popup>
      </Marker>
      {/* Nearby Attractions */}
      {attractions.map((attraction, index) => (
        <Marker key={index} position={[attraction.lat, attraction.lng]}>
          <Popup>
            <h3 className="font-bold">{attraction.name}</h3>
            <p>{attraction.info}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default EmbedAttractions;
