import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  // transform the searchresuls object into
  // { latitude: 52.516272, longitude: 13.377722 }
  // object

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // Center = the latitide and longitude of the center of locations
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/iamakbarsha1/cksj2e9j5ddet17pej8sgkmjl"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl -rotate-45"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* the Popup should if we click on marker  */}
          {/* ? represents then */}
          {/* : represents Oterwise */}
          {/* () => represents mal/All function */}
          {/* this ia like if(selectedLocation.long == result.long ?) */}
          {selectedLocation.long == result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              longitude={result.long}
              latitude={result.lat}
            >
              <div
                className="text-base font-medium
                     "
              >
                {result.title}
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
