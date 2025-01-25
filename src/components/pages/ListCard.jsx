import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'; 

const ListCard = ({ normal, dietFriendly, lactoseFree }) => {

  const allRecipes = [...normal, ...dietFriendly, ...lactoseFree];

  const top10Recipes = allRecipes
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <div style={{ margin: '2%' }}>
      <div> <h1>Top Recipes</h1></div>
  
      {top10Recipes.length > 0 ? (
        <div>
         
          <div className="card-container">
            {top10Recipes.map((recipe) => {
              const mode = recipe.mode;
              const categ = recipe.category;
              return (
                <div key={recipe.id} className="card-wrapper">
                  <Link
                    to={`/recette/${mode}/${categ}/${encodeURIComponent(
                      recipe.recipeTitle.toLowerCase().replace(/ /g, '-')
                    )}`}
                    className="plain-link"
                  >
                    <Card recipe={recipe} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>Aucune recette disponible.</p>
      )}
    </div>
  );
};

export default ListCard;