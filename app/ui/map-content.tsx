import {useMap} from "react-leaflet";
import {useEffect} from "react";
import 'leaflet-active-area';

export default function MapContent() {
  const map = useMap();

  useEffect(() => {
    // @ts-ignore
    map?.setActiveArea("activeArea", true);
  }, [map]);

  return (
    <div></div>
  );
};
