import React, { useState } from "react";
import MapGl from "react-map-gl";
import {
  MapControlFullscreen,
  MapControlGeolocate,
  MapControlMarker,
  MapControlNavigation,
  MapControlScale,
} from "../../components/map";

const Map = ({ data , ...others }) => {
  const [tooltip, setTooltip] = useState(null);
  const [viewport, setViewport] = useState({
    zoom: 2,
  });
  return (
    <>
      <MapGl {...viewport} onViewportChange={setViewport} {...others}>
        <MapControlScale />
        <MapControlNavigation />
        <MapControlGeolocate />
        <MapControlFullscreen />

        {data.map((country) => (
          <MapControlMarker
            key={country.name}
            latitude={country.latlng[0]}
            longitude={country.latlng[1]}
            onClick={() => setTooltip(country)}
          />
        ))}
      </MapGl>
      <div>
        {data.map((country, index) => (
          <div key={index}>{country.name}</div>
        ))}
      </div>
    </>
  );
};

export default Map;
