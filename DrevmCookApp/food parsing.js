export function normalizeFoodData(aiData) {
    return {
      ingredients: aiData.ingredients.map(i => ({
        name: i,
        category: classifyIngredient(i)
      })),
      method: aiData.cooking_method,
      steps: aiData.steps
    };
  }
  
  function classifyIngredient(item) {
    if (item.includes("chicken")) return "protein animal";
    if (item.includes("rice")) return "glucide";
    if (item.includes("avocado")) return "lipide";
    return "vegetal";
  }