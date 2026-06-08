export function computeScore(recipe) {
  const tags = (recipe.tags || []).join(" ").toLowerCase();

  return {
    protein:    tags.includes("protéine")          ? 2 : 0,
    antiInflam: tags.includes("anti-inflammatoire") ? 2 : 0,
    energy:     tags.includes("énergie") || tags.includes("récupération") ? 2 : 0,
  };
}

export function scoreTotal(score) {
  return score.protein + score.antiInflam + score.energy;
}
