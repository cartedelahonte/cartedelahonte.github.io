"use client";

import {GeoJSON, MapContainer, TileLayer, ZoomControl} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {problemFeatures, problems, problemsData} from "@/app/data/problems";
import contourdesdepartements_1 from '@/data/contourdesdepartements_1';
import {isMobile} from 'react-device-detect';
import MapContent from "@/app/ui/map-content";

interface MapProps {
  onClick: (problemId: string) => void,
  problemType: string|null,
  problemId: string|null,
  centerProblemId: string|null,
  onlyElected: boolean,
}

export default function Map(props: MapProps) {
  const {onClick, problemType, problemId, centerProblemId, onlyElected} = props;

  const styleProblem = (feature: any) => {
    const featureProblemId = feature.properties.problemId;
    const problem = problems[featureProblemId];
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
    if (null !== problemId) {
      onClick(String(problemId));
    }
  }

  let filteredFeatures = [];
  let highlightedFeature = null;
  for (let problemFeature of problemFeatures) {
    const features = [];
    for (let feature of problemFeature.features) {
      // @ts-ignore
      const otherProblemId = feature.properties.problemId;
      const problem = problems[otherProblemId];
      if ((!onlyElected || problem.elected) &&  (null === problemType || problem.problemType === problemType)) {
        features.push(feature);
      }
      if (String(otherProblemId) === problemId) {
        highlightedFeature = {
          ...problemFeature,
          features: [feature],
        }
      }
    }

    filteredFeatures.push({
      ...problemFeature,
      features,
    });
  }

  // console.log('highlight', {highlightedFeature, problemId});

  // @ts-ignore
  return (
    <div className="grow fixed top-0 bottom-0 left-0 right-0">
      <MapContainer
        center={[46.44903377262644, 2.3075544460173245]}
        zoom={isMobile ? 5 : 6}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}"
          opacity={0.5}
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
        {null !== highlightedFeature && <GeoJSON
          key={JSON.stringify(highlightedFeature)}
          data={highlightedFeature as any}
          style={{
            color: 'rgba(246,233,55,1.0)',
            weight: 4.0,
            opacity: 1,
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            fill: false,
            fillOpacity: 1,
            interactive: true,
          }}
        />}
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

        <MapContent
          problemId={centerProblemId}
        />
      </MapContainer>
    </div>
  );
}
