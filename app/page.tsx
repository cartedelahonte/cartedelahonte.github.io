"use client";

import Filters from "@/app/ui/filters";
import List from "@/app/ui/list";
import dynamic from "next/dynamic";
import {useState} from "react";


const Map = dynamic(() => import("@/app/ui/map"), {
  loading: () => <div className="grow w-full h-full flex items-center justify-center flex-col gap-4 bg-[#ddd] pb-[30vh]">
    <div className="loader"/>

    <p>Chargement de la carte...</p>
  </div>,
  ssr: false,
});

export default function Home() {
  const [problemId, setProblemId] = useState<string | null>(null);
  const [problemType, setProblemType] = useState<string | null>(null);

  const changeProblemType = (problemType: string|null) => {
    setProblemId(null);
    setProblemType(problemType);
  }

  const changeProblemId = (problemId: string|null) => {
    setProblemId(problemId);
    setProblemType(null);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Filters/>
      <Map
        problemType={problemType}
        onClick={changeProblemId}
      />
      <List
        problemId={problemId}
        problemType={problemType}
        onClose={() => setProblemId(null)}
        setProblemType={changeProblemType}
      />
    </main>
  );
}
