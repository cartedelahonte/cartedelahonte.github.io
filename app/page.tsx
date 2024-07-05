"use client";

import Filters from "@/app/ui/filters";
import List from "@/app/ui/list";
import dynamic from "next/dynamic";
import {useState} from "react";

const Map = dynamic(() => import("@/app/ui/map"), {
  loading: () => <p>Chargement...</p>,
  ssr: false,
});

export default function Home() {
  const [problemId, setProblemId] = useState<string|null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Filters/>
      <Map
        onClick={setProblemId}
      />
      <List
        problemId={problemId}
      />
    </main>
  );
}
