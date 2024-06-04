import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Importing the leaflet CSS for proper styling
import L from 'leaflet';


import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function Location({ loc, address }) {
  return (
    <div className='border-t mt-6'>
      <div className='text-sm font-medium mt-6'>
        Location details
      </div>

      <div className='mt-5 grid grid-cols-4'>
        <div className='border-r col-span-2 p-6'>
          <div className="text-sm font-medium">
            address :
          </div>
          <div className="text-3xl font-bold">
            {address}
          </div>
          <div>
            <div className="text-sm font-medium">
              latitude , longitude :
            </div>
            <div className="text-3xl font-bold">
              {loc.latitude} , {loc.longitude}
            </div>
          </div>
        </div>
        <div className='col-span-2 flex justify-between p-6'>
          <MapContainer center={[loc.latitude, loc.longitude]} zoom={13} style={{ height: '300px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[loc.latitude, loc.longitude]}>
              <Popup>
                {address}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Location;
