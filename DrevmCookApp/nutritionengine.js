export function computeNutrition(ingredients) {
    let score = {
      protein: 0,
      anti_inflammatory: 0,
      energy: 0
    };
  
    ingredients.forEach(i => {
      if (i.includes("lentille") || i.includes("tofu"))
        score.protein += 2;
  
      if (i.includes("gingembre") || i.includes("curcuma"))
        score.anti_inflammatory += 2;
  
      if (i.includes("riz") || i.includes("banane"))
        score.energy += 2;
    });
  
    return score;
  }