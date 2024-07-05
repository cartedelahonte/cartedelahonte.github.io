import {problems} from "@/app/data/problems";

interface ListProps {
  problemId: string|null,
}

export default function List({problemId}: ListProps) {
  if (null === problemId) {
    return null;
  }

  const problem = problems[problemId];

  return (
    <div className="fixed bottom-0 md:bottom-auto rounded-tr-lg rounded-tl-lg md:rounded-bl-lg md:rounded-br-lg left-0 right-0 md:left-[50px] md:top-[120px] md:max-w-[600px] md:bottom-[50px] max-h-[300px] md:max-h-none z-[1000] bg-white overflow-y-auto">
      <div className="container mx-auto max-w-[800px] ">
        <div className="p-4">
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
                  <a href={data} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">{data}</a>
                </p>
              )}
            </div>
          }
        </div>
      </div>
    </div>
  );
}
