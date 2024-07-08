import {useMap} from "react-leaflet";
import {useEffect} from "react";
import 'leaflet-active-area';
import {problems} from "@/app/data/problems";
import {isMobile} from 'react-device-detect';

interface MapContentProps {
  problemId: string|null,
}

export default function MapContent({problemId}: MapContentProps) {
  const map = useMap();

  useEffect(() => {
    // @ts-ignore
    map?.setActiveArea("activeArea", true);
  }, [map]);


  useEffect(() => {
    if (null !== problemId) {
      const center = problems[problemId].center;
      const position = [center[1], center[0]];

      // @ts-ignore
      map?.flyTo(position, isMobile ? 7 : 8, {
        duration: 0.5,
      });
    }
  }, [problemId]);

  return (
    <div></div>
  );
};
