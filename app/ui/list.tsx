import {problems} from "@/app/data/problems";
import ProblemElement from "@/app/ui/problem-element";
import ProblemList from "@/app/ui/problem-list";
import {useEffect, useRef} from "react";

interface ListProps {
  problemId: string|null,
  problemType: string|null,
  onClose: () => void,
  setProblemId: (problemId: string|null, removeProblemType?: boolean) => void,
  setProblemType: (problemLabel: string|null) => void,
  setOnlyElected: (onlyElected: boolean) => void,
  onlyElected: boolean,
}

export default function List(props: ListProps) {
  const {problemId, problemType, onClose, setProblemType, setProblemId} = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current!.scroll({
      top: 0,
    });
  }, [problemId, problemType]);

  return (
    <div ref={ref} className="fixed bottom-0 md:bottom-auto rounded-tr-lg rounded-tl-lg md:rounded-bl-lg md:rounded-br-lg left-0 right-0 md:left-[50px] md:top-[50px] md:max-w-[600px] max-h-[45%] md:max-h-[90vh] z-[1000] bg-white overflow-y-auto">
      <div className="container mx-auto max-w-[800px] break-words">
        <div className="p-4 md:p-6">
          {null !== problemId ?
            <ProblemElement
              problem={problems[problemId]}
              closable
              withoutCategory
              setProblemId={setProblemId}
              onClose={onClose}
            />
            :
            <ProblemList
              setProblemType={setProblemType}
              setProblemId={setProblemId}
              problemType={problemType}
              onlyElected={props.onlyElected}
              setOnlyElected={props.setOnlyElected}
            />
          }
        </div>
      </div>
    </div>
  );
}
