export function generateShoppingList(recipes) {
    const list = {};
  
    recipes.forEach(r => {
      r.ingredients.forEach(i => {
        list[i.name] = (list[i.name] || 0) + 1;
      });
    });
  
    return list;
  }