import {Problem} from "@/app/definitions";
import {problemsData} from "@/app/data/problems";
import {getOppositeColor} from "@/app/helpers/colors";

interface ProblemProps {
  problem: Problem,
}

export default function ProblemElement({problem}: ProblemProps) {
  const truncateLength = 80;
  const truncate = (link: string) => {
    if (link.length < truncateLength) {
      return link;
    }

    return link.substring(0, truncateLength) + '...';
  };

  const fillColor = problemsData[problem.problemType]?.fillColor;
  const oppositeColor = getOppositeColor(fillColor);

  return (
    <div>
      <h2 className=" mb-2 flex gap-4 items-center">
        <span className="text-2xl">
          {problem.circoName}
        </span>

        {problem.problemType && <div className="rounded-full px-3 py-1 text-sm ml-2" style={{background: fillColor, color: oppositeColor}}>
          {problem.problemType}
        </div>}
      </h2>

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
