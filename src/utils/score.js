export function computeScore(recipe) {


    let score = {
        protein: 0,
        antiInflammatory: 0,
        energy: 0
      };
    
  
    recipe.ingredients.forEach(i => {
      if (i.name.includes("lentilles")) score += 2;
      if (i.name.includes("gingembre")) score += 2;
        
      if (i.name.includes("pois") || i.name.includes("lentilles"))
        score.protein += 2;
  
      if (i.name.includes("gingembre") || i.name.includes("curcuma"))
        score.antiInflammatory += 2;
  
      if (i.name.includes("banane") || i.name.includes("riz"))
        score.energy += 2;
    });
  








    
    return score;
  }