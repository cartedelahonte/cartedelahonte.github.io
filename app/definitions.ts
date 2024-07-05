import {Position} from "geojson";

export interface Problem {
  circoName: string,
  candidateName: string,
  candidateData: string[],
  sources: string[],
  problemType: string,
  id: string,
  center: Position,
}