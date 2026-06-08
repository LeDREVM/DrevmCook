export default function BudgetBlock({ budget }) {
  if (!budget) return null;
  return (
    <div className="mt-3 flex items-center gap-2 text-sm text-amber-800 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
      <span>💰</span>
      <span className="font-medium">Budget estimé :</span>
      <span>{budget}</span>
    </div>
  );
}
