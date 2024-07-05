import {Problem} from "@/app/definitions";
import {problemsData} from "@/app/data/problems";
import Image from "next/image";
import CloseIcon from '@/app/images/close.svg';

interface ProblemProps {
  problem: Problem,
  closable?: boolean,
  onClose?: () => void,
}

export default function ProblemElement({problem, closable, onClose}: ProblemProps) {
  const truncateLength = 80;
  const truncate = (link: string) => {
    if (link.length < truncateLength) {
      return link;
    }

    return link.substring(0, truncateLength) + '...';
  };

  const fillColor = problemsData[problem.problemType]?.fillColor;

  return (
    <div>
      <div className="flex gap-2">
        <h2 className="mb-2 grow">
          <span className="text-2xl">
            {problem.circoName}
          </span>
        </h2>
        {closable && <div>
          <Image
            width={36}
            height={36}
            src={CloseIcon}
            alt="Close"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>}
      </div>


      {problem.problemType &&
        <div className="rounded-full font-bold px-3 py-1 text-sm inline-block mb-4" style={{background: fillColor, color: 'white'}}>
        {problem.problemType}
      </div>}

      <h3 className="text-xl font-bold mb-4">
        {problem.candidateName}
      </h3>

      {problem.candidateData.map((data, i) =>
        <p className="mt-2" key={i}>
          {data}
        </p>
      )}

      {problem.sources.length &&
        <div className="mt-6">
          <p className="font-bold">Sources :</p>

          {problem.sources.map((data, i) =>
            <p className="mt-2 text-xs" key={i}>
              <a href={data} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank" rel="noopener noreferrer">
                {truncate(data)}
              </a>
            </p>
          )}
        </div>
      }
    </div>
  )
}
