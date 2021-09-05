import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import hospitalMarker from "@iconify-icons/mdi/hospital-marker";
import silverwareVariant from "@iconify-icons/mdi/silverware-variant";
import medalOutline from "@iconify-icons/mdi/medal-outline";
import { useState } from "react";
import LocationInfoBox from "./LocationInfoBox";

const optionsArray = [
  {
    text: "Hotel MIM",
    coords: [1.8041102, 41.2347603],
    icon: hospitalMarker,
    cat: "accommodation",
  },
  {
    text: "Hotel Melià Sitges",
    coords: [1.8239189, 41.2367832],
    icon: hospitalMarker,
    cat: "accommodation",
  },
  {
    text: "PicNic",
    coords: [1.8056693, 41.2343043],
    icon: silverwareVariant,
    cat: "restaurant",
  },

  {
    text: "La Taberna del Puerto",
    coords: [1.82556, 41.23486],
    icon: silverwareVariant,
    cat: "restaurant",
  },
  {
    text: "La Daurada",
    coords: [1.7279408, 41.2098795],
    icon: silverwareVariant,
    cat: "restaurant",
  },
  {
    text: "Kayak Activity",
    coords: [1.7890417718695346, 41.22503141616244],
    icon: medalOutline,
    cat: "activity",
  },
  {
    text: "Trekking Activity",
    coords: [1.8395588, 41.2865203],
    icon: medalOutline,
    cat: "activity",
  },
/*   {
    text: "El Arenal",
    coords: [2.1958216, 41.3848301],
    icon: silverwareVariant,
    cat: "restaurant",
  },
  {
    text: "Art Nouveau Walking Tour",
    coords: [2.1585248, 41.3971034],
    icon: medalOutline,
    cat: "activity",
  }, */
];

export default function OverviewMap({ center, zoom }) {
  const [locationInfo, setLocationInfo] = useState(null);

  const handleAPILoaded = (map, maps) => {
    map.streetViewControl = true;
  };

  return (
    <div style={{ width: "100%", height: "800px", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCfSR8KYZbIyX5FwhTRN6sc6sMsBBfzHGA" }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={center}
        defaultZoom={zoom}
        onGoogleApiLoaded={({ map, maps }) => handleAPILoaded(map, maps)}
      >
        {optionsArray.map((marker, i) => (
          <LocationMarker
            key={i}
            lat={marker.coords[1]}
            lng={marker.coords[0]}
            icon={marker.icon}
            onClick={() =>
              setLocationInfo({ title: marker.text, category: marker.cat })
            }
          />
        ))}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
}

OverviewMap.defaultProps = {
  center: {
    lat: 41.2347603,
    lng: 1.8033367096917061,
  },
  zoom: 14,
};
