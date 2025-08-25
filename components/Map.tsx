'use client'

import React from 'react'
import { MapContainer } from 'react-leaflet'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Map = () => {
  return (
    <>
        <MapContainer center={[6.514193, 3.308678]} zoom={15} scrollWheelZoom={false} style={{
            height: '400px',
            width: '100%'
        }}>
          <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[6.514193, 3.308678]}>
    <Popup>
      <FaMapMarkerAlt/>
    </Popup>
  </Marker>
</MapContainer>
    </>
  )
}

export default Map