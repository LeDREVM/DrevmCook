export default function NutritionBlock({ ingredients }) {
    return (
      <div className="bg-green-900 p-3 rounded-xl">
        <h3>Apports nutritifs</h3>
        {ingredients.map((ing, i) => (
          <p key={i}>
            {ing.name} → {ing.nutrition}
          </p>
        ))}
      </div>
    );
  }