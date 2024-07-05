import {problems, problemsData} from "@/app/data/problems";
import ProblemElement from "@/app/ui/problem-element";
import Image from "next/image";
import CloseWhiteIcon from "@/app/images/close-white.svg";
import React from "react";

interface ProblemListProps {
  setProblemType: (problemLabel: string|null) => void,
  problemType: string|null,

}

export default function ProblemList({setProblemType, problemType}: ProblemListProps) {
  const problemsCount = Object.values(problems).length;

  let displayedProblems = Object.entries(problems);
  if (null !== problemType) {
    displayedProblems = displayedProblems.filter(a => problemType === a[1].problemType);
  }

  const cancelProblemType = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setProblemType(null);
  }

  return (
    <div>
      <h1 className="text-2xl md:text-5xl mb-6">
        {problemsCount} preuves que le RN est toujours...
      </h1>

      <div className="flex gap-1 md:gap-2 flex-wrap mb-10">
        {Object.entries(problemsData).map(([problemLabel, problemData], i) =>
          <div
            className="rounded-full px-3 py-1 text-xs md:text-sm inline-flex cursor-pointer items-center gap-2 justify-center"
            key={i}
            style={{backgroundColor: problemData.fillColor, color: 'white'}}
            onClick={() => setProblemType(problemLabel)}
          >
            {problemLabel}
            {problemType === problemLabel && <div>
              <Image
                width={16}
                height={16}
                src={CloseWhiteIcon}
                alt="Close"
                className="cursor-pointer text-white"
                onClick={cancelProblemType}
              />
            </div>}
          </div>
        )}
      </div>

      <hr/>

      {displayedProblems.map(([problemId, problem]) =>
        <div key={problemId} className="mt-6 border-b border-b-[#00000022] pb-6">
          <ProblemElement
            problem={problem}
          />
        </div>
      )}
    </div>
  )
}
