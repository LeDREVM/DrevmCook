import { recipes } from "./src/data/recipes";
import RecipeCard from "./components/RecipeCard";
import FermentationGuide from "./components/FermentationGuide";
import Herbarium from "./components/Herbarium";

export default function DrevmCookApp() {
  return (
    <div className="p-6 bg-gray-950 min-h-screen text-white">

      <h1 className="text-3xl font-bold mb-6">
        🌴 DrevmCook Master
      </h1>

      {/* Recipes */}
      <div className="grid gap-4">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Fermentation */}
      <div className="mt-8">
        <FermentationGuide />
      </div>

      {/* Herbier */}
      <div className="mt-8">
        <Herbarium />
      </div>

    </div>
  );
}