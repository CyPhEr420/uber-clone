import React from 'react'
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components"
import { useEffect } from "react";


mapboxgl.accessToken = 'pk.eyJ1IjoiY3lwaGVydmsiLCJhIjoiY2t3a281Y3ZpMWkwcTJvbWx5bjd3ZWFmeiJ9.dNgWHqCrkHnDbNubm0EzRw';

const Map = ({ pickupCoord, dropoffCoord }) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [77.3525, 12.99153],
            zoom: 7
        });

        if (pickupCoord && dropoffCoord) {
            addToMap(map, pickupCoord, dropoffCoord);
        }

    }, [pickupCoord, dropoffCoord]);

    const addToMap = (map, pickupCoord, dropoffCoord) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat([pickupCoord[0], pickupCoord[1]])
            .addTo(map);

        const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
            .setLngLat([dropoffCoord[0], dropoffCoord[1]])
            .addTo(map);

        const bounds = new mapboxgl.LngLatBounds();
        bounds.extend([pickupCoord[0], pickupCoord[1]]);
        bounds.extend([dropoffCoord[0], dropoffCoord[1]]);
        map.fitBounds(bounds, { padding: 100 });

    }
    return <Wrapper id="map"></Wrapper>
}

export default Map

const Wrapper = tw.div`
  flex-1 h-1/2
`