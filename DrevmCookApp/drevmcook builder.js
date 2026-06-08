export function buildRecipe(aiData) {
    return {
      name: aiData.recipe_guess || "Recette détectée DrevmCook",
      ingredients: aiData.ingredients,
      steps: aiData.steps.length
        ? aiData.steps
        : ["Analyser plat", "Reproduire cuisson", "Ajuster assaisonnement"],
      tags: ["vision-ai", "auto-generated"]
    };
  }