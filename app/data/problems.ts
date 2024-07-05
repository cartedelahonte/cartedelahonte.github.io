import circonscriptionslegislativesp10_2 from "@/data/circonscriptionslegislativesp10_2";
import antoinejuliecirconscriptions from "@/data/antoinetjuliecirconscriptionslegislativesp10_3"
import {Problem} from "@/app/definitions";

export const problems: {[id: string]: Problem} = {};

export const problemFeatures = [
  circonscriptionslegislativesp10_2,
  antoinejuliecirconscriptions,
];

let id = 0;
for (let problemFeature of problemFeatures) {
  for (let feature of problemFeature.features) {
    const properties = feature.properties;
    const circoName = properties["Candidats RN (1) (1) — Feuille 1_Field3"];
    const candidateName = properties["Candidats RN (1) (1) — Feuille 1_Field4"];
    const problemType = properties['q2wHide_Candidats RN (1) (1) — Feuille 1_Field14'];

    const candidateData = [];
    const sources = [];
    for (let i = 5; i <= 30; i++) {
      if (properties[`Candidats RN (1) (1) — Feuille 1_Field${i}`]) {
        const data = properties[`Candidats RN (1) (1) — Feuille 1_Field${i}`];
        if (-1 !== data.indexOf('https://')) {
          const elements = data.split("\n");
          for (let element of elements) {
            if (element.trim()) {
              sources.push(element);
            }
          }
        } else {
          candidateData.push(data);
        }
      }
    }

    problems[id] = {
      circoName,
      candidateName,
      candidateData,
      sources,
      problemType,
      id,
    };

    properties.problemId = id;

    id++;
  }
}

export const problemsData: {[key: string]: {fillColor: string}} = {
  'affilié à des régimes autoritaires': {
    fillColor: 'rgba(255,71,1,1.0)',
  },
  'climatosceptique': {
    fillColor: 'rgba(102,204,0,1.0)',
  },
  'conspirationniste': {
    fillColor: 'rgba(255,145,220,1.0)',
  },
  'contre votre santé': {
    fillColor: 'rgba(208,197,95,1.0)',
  },
  'coupable de fraude': {
    fillColor: 'rgba(204,17,0,1.0)',
  },
  'fraude': {
    fillColor: 'rgba(204,17,0,1.0)',
  },
  'homophobe': {
    fillColor: 'rgba(134,42,0,1.0)',
  },
  'homophobie': {
    fillColor: 'rgba(134,42,0,1.0)',
  },
  'négationniste': {
    fillColor: 'rgba(169,194,208,1.0)',
  },
  'opposé aux droits des femmes': {
    fillColor: 'rgba(182,46,114,1.0)',
  },
  'opposé aux droits des femmes ': {
    fillColor: 'rgba(182,46,114,1.0)',
  },
  'raciste et antisémite': {
    fillColor: 'rgba(56,143,194,1.0)',
  },
  'sexiste': {
    fillColor: 'rgba(209,112,56,1.0)',
  },
  'suprémaciste': {
    fillColor: 'rgba(36,25,191,1.0)',
  },
  'un peu de tout': {
    fillColor: 'rgba(59,19,19,1.0)',
  },
  'violent': {
    fillColor: 'rgba(36,114,48,1.0)',
  },
}

console.log({problems, problemFeatures});