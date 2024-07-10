"use client";

import List from "@/app/ui/list";
import dynamic from "next/dynamic";
import React, {useState} from "react";
import {NextUIProvider} from "@nextui-org/react";
import {useRouter} from "next/navigation";

const Map = dynamic(() => import("@/app/ui/map"), {
  loading: () => <div className="grow w-full h-full flex items-center justify-center flex-col gap-4 bg-[#ddd] pb-[30vh] relative">
    <div className="activeArea flex items-center justify-center flex-col gap-4">
      <div className="loader"/>

      <p>Chargement de la carte...</p>
    </div>
  </div>,
  ssr: false,
});

export default function Home() {
  const [problemId, setProblemId] = useState<string | null>(null);
  const [problemType, setProblemType] = useState<string | null>(null);
  const [centerProblemId, setCenterProblemId] = useState<string | null>(null);
  const [onlyElected, setOnlyElected] = useState<boolean>(false);
  const router = useRouter();

  const changeProblemType = (problemType: string|null) => {
    setProblemId(null);
    setProblemType(problemType);
  }

  const changeProblemIdFromList = (problemId: string|null, removeProblemType?: boolean) => {
    if (removeProblemType) {
      setProblemType(null);
    }
    setCenterProblemId(problemId);
    setProblemId(problemId);
  }

  return (
    <NextUIProvider navigate={router.push}>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Map
          problemType={problemType}
          problemId={problemId}
          centerProblemId={centerProblemId}
          onClick={setProblemId}
          onlyElected={onlyElected}
        />

        <List
          problemId={problemId}
          problemType={problemType}
          onClose={() => setProblemId(null)}
          setProblemType={changeProblemType}
          setProblemId={changeProblemIdFromList}
          onlyElected={onlyElected}
          setOnlyElected={setOnlyElected}
        />
      </main>
    </NextUIProvider>
  );
}
