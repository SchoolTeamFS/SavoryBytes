import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getRecipesByMode } from '../../redux/recepiesReducer';
import Card from './Card';
import "../../styles/CardStyle.css"
import Chemin from '../Recepies/chemin';

const Mode = () => {
  const { mode } = useParams();
  const recipes = useSelector(state => getRecipesByMode(state, mode));

  return (
    <div>
      <Chemin/>
      <div className='center-container'> 
      {recipes && recipes.length > 0 ? (
       <div className="card-container">
          {recipes.map(recipe => {
            const categ = recipe.category;
            return (
              <div  className="card-wrapper">
                <Link
                key={recipe.id}
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
      ) : (
        <p>Aucune recette trouvée pour cette catégorie.</p>
      )}
      </div>
    </div>
  );
};

export default Mode;
