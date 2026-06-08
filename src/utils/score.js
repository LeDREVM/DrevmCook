export function computeScore(recipe) {
    let score = 0;
  
    recipe.ingredients.forEach(i => {
      if (i.name.includes("lentilles")) score += 2;
      if (i.name.includes("gingembre")) score += 2;
    });
  
    return score;
  }