import React from 'react';
import RecipeDetail from './RecipeDetails';

const RecipeList = ({ recipes }) => {
  // Check if recipes is defined
  if (!recipes) {
    return <p>Loading...</p>; // You can adjust this loading message accordingly
  }

  // Categorize recipes
  const breakfastRecipes = recipes.filter((recipe) => recipe.category === 'breakfast');
  const lunchRecipes = recipes.filter((recipe) => recipe.category === 'lunch');
  const dinnerRecipes = recipes.filter((recipe) => recipe.category === 'dinner');

  return (
    <div>
      <h2>Breakfast Recipes</h2>
      {breakfastRecipes.length === 0 ? (
        <p>No breakfast recipes available.</p>
      ) : (
        <ul>
          {breakfastRecipes.map((recipe) => (
            <li key={recipe.id}>
              <RecipeDetail recipe={recipe} />
            </li>
          ))}
        </ul>
      )}

      <h2>Lunch Recipes</h2>
      {lunchRecipes.length === 0 ? (
        <p>No lunch recipes available.</p>
      ) : (
        <ul>
          {lunchRecipes.map((recipe) => (
            <li key={recipe.id}>
              <RecipeDetail recipe={recipe} />
            </li>
          ))}
        </ul>
      )}

      <h2>Dinner Recipes</h2>
      {dinnerRecipes.length === 0 ? (
        <p>No dinner recipes available.</p>
      ) : (
        <ul>
          {dinnerRecipes.map((recipe) => (
            <li key={recipe.id}>
              <RecipeDetail recipe={recipe} />
            </li>
          ))}
        </ul>
      )}

      {/* Add any additional details specific to the recipe */}
    </div>
  );
};

export default RecipeList;

