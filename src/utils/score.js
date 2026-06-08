export function computeScore(recipe) {
  const tags = recipe.tags || [];
  const text = tags.join(' ').toLowerCase();

  return {
    protein:    text.includes('protéine')           ? 2 : 0,
    antiInflam: text.includes('anti-inflammatoire') ? 2 : 0,
    energy:     text.includes('énergie') || text.includes('récupération') ? 2 : 0,
  };
}

export function scoreTotal(score) {
  return score.protein + score.antiInflam + score.energy;
}
