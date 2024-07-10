import {problems, problemsData} from "@/app/data/problems";
import ProblemElement from "@/app/ui/problem-element";
import Image from "next/image";
import CloseWhiteIcon from "@/app/images/close-white.svg";
import React from "react";
import Filters from "@/app/ui/filters";

interface ProblemListProps {
  setProblemId: (problemId: string|null, removeProblemType?: boolean) => void,
  setProblemType: (problemLabel: string|null) => void,
  problemType: string|null,
}

export default function ProblemList({setProblemType, problemType, setProblemId}: ProblemListProps) {
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

  const filterSetProblemId = (problemId: string|null) => {
    setProblemId(problemId, true);
  };

  return (
    <div>
      <h1 className="text-[1.15rem] md:text-5xl font-bold md:font-normal mb-4 md:mb-6">
        {problemsCount} preuves que le RN est toujours...
      </h1>

      <div className="flex gap-1 md:gap-2 flex-wrap mb-6">
        {Object.entries(problemsData).map(([problemLabel, problemData], i) =>
          <div
            className="rounded-full px-3 py-1 text-xs md:text-sm inline-flex cursor-pointer items-center gap-2 justify-center font-bold"
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

      <Filters
        setProblemId={filterSetProblemId}
      />

      <hr className="mt-6"/>

      {displayedProblems.map(([problemId, problem]) =>
        <div key={problemId} className="mt-4 md:mt-6 border-b border-b-[#00000022] pb-6">
          <ProblemElement
            problem={problem}
            setProblemId={setProblemId}
            link
          />
        </div>
      )}

      <p className="mt-20">
        Cartographie actualisée le 10/07/2024 à l'aide des informations disponibles à ce jour.
        Partage autorisé sans limite.
        Contact : <i>lacartedelahonte@gmail.com</i>
      </p><br/>
      <h5><i> La carte de la honte est une initiatie étudiante indépendante et entièrement sourcée, publiée le 25 juin
        2024. Elle n'est affiliée à aucune organisation politique, et n'a à ce titre aucun lien avec le "Tour de France
        de la honte", carte diffusée depuis le 1er juillet par le parti Renaissance, bien que le concept, le titre et
        les informations de cette dernière en semblent très largement inspirés voire copiés.
      </i></h5>
    </div>
  )
}
