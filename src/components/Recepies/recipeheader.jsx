import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faComments, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { addToFavorites } from '../../redux/Signup/ReducerAuth';

const RecipeHeader = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const isAdmin = currentUser && currentUser.role === 'admin';

  const recipes = useSelector((state) => [
    ...state.recipes.normal,
    ...state.recipes.lactoseFree,
    ...state.recipes.dietFriendly,
  ]);

  const [isSaved, setIsSaved] = useState(false);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          style={{ color: '#B55D51', fontSize: '1.2em' }}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" style={{ position: 'relative', display: 'inline-block' }}>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: '#ccc', fontSize: '1.2em' }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', overflow: 'hidden' }}>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: '#B55D51', fontSize: '1.2em' }}
            />
          </div>
        </div>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStar}
          style={{ color: '#ccc', fontSize: '1.2em' }}
        />
      );
    }

    return stars;
  };

  const recipe = recipes.find(
    (r) => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const commentCount = recipe.comments ? recipe.comments.length : 0;

  const handleAddToFavorites = () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    if (recipe) {
      dispatch(addToFavorites({
        userId: currentUser.id,
        recipe
      }));
      setIsSaved(true);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px' }}>
      <div>
        <h1 style={{ marginLeft: '20px', fontSize: '2em' }}>
          {recipe.description}
        </h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px', 
          marginTop: '20px',
          padding: '0 20px',
        }}
      >
        <div style={{ color: '#B55D51', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FontAwesomeIcon icon={faUser} />
          <span>{recipe.author}</span>
        </div>
        <div style={{ color: '#B55D51', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span>{recipe.date}</span>
        </div>
        <div style={{ color: '#B55D51', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FontAwesomeIcon icon={faComments} />
          <span>{commentCount} Comments</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          {renderStars(recipe.rating)}
        </div>
        {!isAdmin && (
          <div
            style={{
              color: isSaved ? '#FFFFFF' : '#B55D51',
              border: `1px solid #B55D51`,
              backgroundColor: isSaved ? '#B55D51' : 'transparent',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9em',
            }}
            onClick={handleAddToFavorites}
          >
            <FontAwesomeIcon icon={faHeart} />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeHeader;