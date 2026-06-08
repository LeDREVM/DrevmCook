import { createClient } from "@supabase/supabase-js";

const supabase = createClient(URL, KEY);

export async function saveRecipe(recipe) {
  return await supabase.from("recipes").insert([recipe]);
}