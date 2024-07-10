import {useEffect, useRef, useState} from "react";
import {problems} from "@/app/data/problems";
import SearchIcon from "@/app/images/glass.svg";
import Image from "next/image";
import {Switch} from "@nextui-org/react";

interface FiltersProps {
  setProblemId: (problemId: string|null) => void,
  setOnlyElected: (onlyElected: boolean) => void,
  onlyElected: boolean,
}

export default function Filters({setProblemId, setOnlyElected, onlyElected}: FiltersProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (problemId: string) => {
    setQuery(() => "");
    setProblemId(problemId);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e: any) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (query) return query;

    return "";
  };

  const formatString = (a: string) => {
    return a
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();
  };


  const filteredProblems = Object.entries(problems).filter(([problemId, problem]) => {
    return -1 !== formatString(problem.circoName).indexOf(formatString(query))
      || -1 !== formatString(problem.candidateName).indexOf(formatString(query));
  });

  const electedCount = Object.values(problems).filter(a => a.elected).length;

  return (
    <div className="">
      <div className="relative">
        <div className="selected-value relative">
          <div>
            <Image
              width={18}
              height={18}
              src={SearchIcon}
              alt="Search"
              className="absolute left-[10px] top-[12px]"
            />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={getDisplayValue()}
            name="searchTerm"
            autoComplete="off"
            placeholder="Circonscription ou candidat"
            className="rounded-full bg-[white] px-6 pl-9 py-2 w-full border border-[#ccc]"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onClick={toggle}
          />
        </div>
      </div>

      <div
        className={`bg-[white] hidden border border-[#ccc] rounded-lg w-full max-h-[200px] mt-1 overflow-y-auto ${isOpen ? "!block" : ""}`}>
        {filteredProblems.map(([problemId, problem], index) => {
          return (
            <div
              onClick={() => selectOption(problemId)}
              className={`cursor-pointer text-[#666] py-2 px-4 hover:bg-[#F2F9FC] hover:text-[#333]`}
              key={problemId}
            >
              {problem.circoName} - {problem.candidateName}
            </div>
          );
        })}
        {0 === filteredProblems.length && <div
          className={`text-[#666] py-2 px-4 select-none`}
        >
          Aucun résultat
        </div>}
      </div>

      <div className="mt-4">
        <Switch isSelected={onlyElected} onValueChange={setOnlyElected}>
          Afficher uniquement les {electedCount} élus
        </Switch>
      </div>
    </div>
  );
}
