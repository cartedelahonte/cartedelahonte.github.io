import {problems} from "@/app/data/problems";
import ProblemElement from "@/app/ui/problem-element";

export default function ProblemList() {
  return (
    <div>
      <p>
        125 preuves que le RN est toujours...
        affilié à des régimes autoritaires, climatosceptique, conspirationniste, contre votre santé, coupable de fraude, homophobe, négationniste,
        opposé aux droits des femmes, raciste et antisémite, sexiste, suprémaciste, violent, voire tout à la fois

      </p>

      {Object.entries(problems).map(([problemId, problem]) =>
        <div key={problemId} className="mt-6 border-b border-b-[#00000022] pb-6">
          <ProblemElement
            problem={problem}
          />
        </div>
      )}
    </div>
  )
}
