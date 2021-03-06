import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const VegMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.mapProps.zoom}
    defaultCenter={props.mapProps.center}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={10}
    >
      {props.restaurants.map(marker => (
        <Marker
          key={marker.id}
          position={{ lat: marker.location.lat, lng: marker.location.lng }}
          onClick={(e) => props.onSelectRestaurant(marker)}
          animation={props.selectedRestaurant != null && marker.id === props.selectedRestaurant.id ? window.google.maps.Animation.BOUNCE : null}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
))

export default VegMap;



