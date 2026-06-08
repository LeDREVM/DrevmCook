import { useState } from "react";
import { extractRecipe } from "../api/aiExtractor";
import { saveRecipe } from "../api/recipeService";

export default function Recipes() {
  const [input, setInput] = useState("");

  const handleExtract = async () => {
    const recipe = await extractRecipe(input);
    await saveRecipe(recipe);
    console.log(recipe);
  };

  return (
    <div>
      <textarea onChange={(e) => setInput(e.target.value)} />

      <button onClick={handleExtract}>
        Générer recette DrevmCook
      </button>
    </div>
  );
}