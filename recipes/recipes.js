// recipes.js
import { recipes, searchRecipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
  displayResults(recipes); // Show all recipes initially

  document.querySelector('form.search').addEventListener('submit', e => {
    e.preventDefault();
    const query = document.querySelector('#search').value.trim();
    const results = searchRecipes(query);
    displayResults(results);
  });
});

function displayResults(results) {
  const main = document.querySelector('main');
  main.innerHTML = '';

  if (results.length === 0) {
    main.innerHTML = '<p>No recipes found.</p>';
    return;
  }

  results.forEach(recipe => {
    const section = document.createElement('section');
    section.classList.add('recipe');
    section.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <div class="tags">
        ${recipe.tags.map(tag => `<span>${tag}</span>`).join(' ')}
      </div>
      <h2 class="recipe-title">${recipe.title}</h2>
      <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
        ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
      </span>
      <p class="description">${recipe.description}</p>
    `;
    main.appendChild(section);
  });
}
