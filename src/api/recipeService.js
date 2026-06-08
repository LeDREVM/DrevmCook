import { supabase } from "./supabaseClient";

export async function saveRecipe(recipe) {
  return await supabase.from("recipes").insert([
    {
      name: recipe.name,
      ingredients: recipe.ingredients,
      steps: recipe.steps,
      budget: recipe.budget_estimate,
      tags: recipe.tags,
      health_score: recipe.health_score
    }
  ]);
}