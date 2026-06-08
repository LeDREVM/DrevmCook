import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
import FermentationGuide from "./components/FermentationGuide";
import Herbarium from "./components/Herbarium";

export default function App() {
  return (
    <div style={{ padding: 20, background: "#0f172a", color: "white" }}>
      <h1>DrevmCook Master</h1>

      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}

      <FermentationGuide />
      <Herbarium />
    </div>
  );
}