import NutritionBlock from "./NutritionBlock";
import BudgetBlock from "./BudgetBlock";
import { computeScore, scoreTotal } from "../src/utils/score";

const SCORE_BARS = [
  { key: "protein",    label: "Protéines",         color: "bg-green-500" },
  { key: "antiInflam", label: "Anti-inflammatoire", color: "bg-teal-500" },
  { key: "energy",     label: "Énergie",            color: "bg-amber-500" },
];

export default function RecipeCard({ recipe }) {
  const score = computeScore(recipe);
  const total = scoreTotal(score);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Stripe top */}
      <div className="h-1 bg-brand-700" />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full">
              {recipe.category}
            </span>
            <h2 className="mt-1.5 text-base font-semibold text-gray-900 leading-snug">
              {recipe.name}
            </h2>
          </div>
          {total > 0 && (
            <span className="flex-shrink-0 text-xs font-bold text-brand-700 bg-brand-50 px-2 py-1 rounded-lg">
              {total}/6
            </span>
          )}
        </div>

        {/* Score bars */}
        {total > 0 && (
          <div className="mb-4 space-y-1.5">
            {SCORE_BARS.map(({ key, label, color }) =>
              score[key] > 0 ? (
                <div key={key} className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-36 flex-shrink-0">{label}</span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${color} rounded-full`} style={{ width: `${(score[key] / 2) * 100}%` }} />
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}

        {/* Nutrition */}
        <NutritionBlock ingredients={recipe.ingredients} />

        {/* Steps */}
        <div className="mt-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Préparation</h3>
          <ol className="space-y-1.5">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Tags */}
        {recipe.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {recipe.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Budget */}
        <BudgetBlock budget={recipe.budget} />
      </div>
    </div>
  );
}
