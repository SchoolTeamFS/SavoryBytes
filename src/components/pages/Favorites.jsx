
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../redux/Signup/ReducerAuth';
import "../../styles/FavoritesStyle.css";
import Card from './Card';
import { div } from 'framer-motion/client';

const Favorites = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const favorites = currentUser?.favorites || [];

  const handleRemoveFavorite = (recipeTitle) => {
    if (currentUser) {
      dispatch(removeFromFavorites({ userId: currentUser.id, recipeTitle }));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite recipes yet.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {favorites.map((recipe) => (
            <div>
            <div key={recipe.recipeTitle} >
              <div className='cardC'>
                <Card recipe={recipe} />
              </div>
            </div>
            
              <div className='remove-button'> 
                <button
                  onClick={() => handleRemoveFavorite(recipe.recipeTitle)}
                  style={{
                          backgroundColor: '#ff4d4d',
                          height:"25px",
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          justifyContent:'center'
                 }}
                >
                  Remove from Favorites
                </button>
              </div>
             
            </div>

          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;