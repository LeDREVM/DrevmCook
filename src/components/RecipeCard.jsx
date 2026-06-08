export default function RecipeCard({ recipe }) {
    return (
      <div className="bg-black text-white p-4 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold">{recipe.name}</h2>
  
        <div className="mt-2">
          <h3>Ingrédients</h3>
          <ul>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>
                {ing.name} → {ing.nutrition}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="mt-2">
          <h3>Étapes</h3>
          <ol>
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
  
        <div className="mt-2 text-green-400">
          Budget : {recipe.budget}
        </div>
      </div>
    );
  }