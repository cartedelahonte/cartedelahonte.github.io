"use client";

import {GeoJSON, MapContainer, TileLayer, ZoomControl} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {problemFeatures, problems, problemsData} from "@/app/data/problems";
import contourdesdepartements_1 from '@/data/contourdesdepartements_1';
import {isMobile} from 'react-device-detect';

interface MapProps {
  onClick: (problemId: string) => void,
  problemType: string|null,
}

export default function Map({onClick, problemType}: MapProps) {
  const styleProblem = (feature: any) => {
    const problemId = feature.properties.problemId;
    const problem = problems[problemId];
    const problemType = problem.problemType;
    // console.log({feature, problemId, problem});

    const problemData = problemsData[problemType];

    // console.log({feature, problemId, problem, problemData});
    return {
      opacity: 1,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0,
      fill: true,
      fillOpacity: 1,
      fillColor: problemData?.fillColor,
      interactive: true,
    };
  };

  const clickLayer = (clickEvent: any) => {
    const {layer: {feature: {properties: {problemId}}}} = clickEvent;
    if (problemId) {
      onClick(problemId);
    }
  }

  let filteredFeatures = problemFeatures;
  if (null !== problemType) {
    filteredFeatures = [];
    for (let problemFeature of problemFeatures) {
      const features = [];
      for (let feature of problemFeature.features) {
        // @ts-ignore
        const problemId = feature.properties.problemId;
        const problem = problems[problemId];
        if (problem.problemType === problemType) {
          features.push(feature);
        }
      }

      filteredFeatures.push({
        ...problemFeature,
        features,
      });
    }
  }

  // @ts-ignore
  return (
    <div className="grow h-[100vh] w-full">
      <MapContainer
        center={isMobile ? [40.95019635026425, 2.239993297605371] : [46.57079614389821, -1.666576696525189]}
        zoom={isMobile ? 5 : 6}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredFeatures.map((problemFeature, i) =>
          <GeoJSON
            key={JSON.stringify(problemFeature)}
            data={problemFeature as any}
            eventHandlers={{
              click: clickLayer,
            }}
            style={styleProblem as any}
          />
        )}
        <GeoJSON
          data={contourdesdepartements_1 as any}
          style={{
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fillOpacity: 0,
            interactive: false,
          }}
        />

        <ZoomControl
          position="topright"
        />
      </MapContainer>
    </div>
  );
}
