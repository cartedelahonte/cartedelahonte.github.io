import {Problem} from "@/app/definitions";

interface ProblemProps {
  problem: Problem,
}

export default function ProblemElement({problem}: ProblemProps) {
  return (
    <div>
      <h2 className="text-2xl mb-2">
        {problem.circoName}
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
                {data}
              </a>
            </p>
          )}
        </div>
      }
    </div>
  )
}
