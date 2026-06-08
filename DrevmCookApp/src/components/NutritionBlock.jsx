export default function NutritionBlock({ ingredients }) {
  return (
    <div className="bg-green-50 border border-green-100 rounded-xl p-3 mt-3">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-green-800 mb-2">
        Apports nutritifs
      </h3>
      <ul className="space-y-1">
        {ingredients.map((ing, i) => (
          <li key={i} className="flex items-baseline gap-1.5 text-xs text-gray-700">
            <span className="font-medium text-green-900">{ing.name}</span>
            <span className="text-gray-400">→</span>
            <span className="text-gray-600">{ing.nutrition}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
