// recipes.mjs

export const recipes = [
  {
    id: 1,
    title: "Apple Crisp",
    ingredients: [
      "apples",
      "sugar",
      "flour",
      "cinnamon",
      "butter",
      "oats"
    ],
    tags: ["dessert"],
    image: "apple-pie.jpg",
    rating: 4,
    description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
  },
  {
    id: 2,
    title: "Spaghetti Bolognese",
    ingredients: [
      "spaghetti",
      "ground beef",
      "tomato sauce",
      "onion",
      "garlic",
      "olive oil"
    ],
    tags: ["pasta", "main"],
    image: "meat.jpg",
    rating: 5,
    description: "A classic Italian pasta dish with a rich, savory meat sauce."
  }
];

// Search recipes by title or ingredients
export function searchRecipes(query) {
  const lowerQuery = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(lowerQuery) ||
    recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerQuery))
  );
}
