import React from 'react';

const RecipeDetail = ({ recipe }) => {
  const { title, description, ingredients, instructions } = recipe;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>

      <h4>Ingredients:</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h4>Instructions:</h4>
      <ol>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      {/* Additional details */}
      <h4>Additional Details:</h4>
      {/* Example additional details: */}
      <p>Preparation Time: 30 minutes</p>
      <p>Cooking Time: 1 hour</p>
      <p>Servings: 4</p>

      {/* Feel free to add more details based on your recipe data */}
    </div>
  );
};

export default RecipeDetail;

