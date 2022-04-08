import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

function Mapbox({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState();
  const coordinates = searchResults?.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  console.log(coordinates);
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 10,
  });
  const setPopupInfo = (title) => {};
  // Transform search results object into the lat, long,
  return (
    <Map
      {...viewport}
      mapStyle="mapbox://styles/ddjr/cl1qqwvrn000814llit6fomqm"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map(({ long, lat, title }, idx) => (
        <div key={idx}>
          <Marker
            longitude={long}
            latitude={lat}
            offsetTop={-20}
            offsetLeft={-10}
            // anchor="bottom"
          >
            <p
              role="img"
              className="cursor-pointer text-3xl hover:-translate-y-1"
              onClick={() => setSelectedLocation(idx)}
              aria-label="marker"
            >
              🏡
            </p>
          </Marker>
          {/* pop up if click */}
          {selectedLocation === idx && (
            <Popup
              className="text-lg rounded-full"
              onClose={() => setSelectedLocation()}
              closeOnClick={true}
              longitude={long}
              latitude={lat}
            >
              {title}
            </Popup>
          )}
        </div>
      ))}
    </Map>
  );
}
export default Mapbox;
