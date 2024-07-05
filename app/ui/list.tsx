import {problems} from "@/app/data/problems";
import ProblemElement from "@/app/ui/problem-element";
import ProblemList from "@/app/ui/problem-list";

interface ListProps {
  problemId: string|null,
  problemType: string|null,
  onClose: () => void,
  setProblemType: (problemLabel: string|null) => void,
}

export default function List({problemId, problemType, onClose, setProblemType}: ListProps) {
  return (
    <div className="fixed bottom-0 md:bottom-auto rounded-tr-lg rounded-tl-lg md:rounded-bl-lg md:rounded-br-lg left-0 right-0 md:left-[50px] md:top-[50px] md:max-w-[600px] max-h-[300px] md:max-h-[90vh] z-[1000] bg-white overflow-y-auto">
      <div className="container mx-auto max-w-[800px] break-words">
        <div className="p-4 md:p-6">
          {null !== problemId ?
            <ProblemElement
              problem={problems[problemId]}
              closable
              onClose={onClose}
            />
            :
            <ProblemList
              setProblemType={setProblemType}
              problemType={problemType}
            />
          }
        </div>
      </div>
    </div>
  );
}
