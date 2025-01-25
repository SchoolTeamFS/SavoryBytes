import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { addToFavorites } from '../../redux/Signup/ReducerAuth';
import { useNavigate } from 'react-router-dom';
import { removeRecipe } from '../../redux/recepiesReducer';
import Chemin from './chemin';
import PreparationTime from './prepatime';
import NutritionFacts from './nutritionfacts';
import Instruction from './instruction';
import Ingredients from './ingredients';
import RecipeHeader from './recipeheader';
import { deleteComment, updateComment } from '../../redux/recepiesReducer';
import CommentList from './commentlist'; 
import Calcul from './calcul'

const RecipeDetails = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const recipes = useSelector(state => [
    ...state.recipes.normal,
    ...state.recipes.lactoseFree,
    ...state.recipes.dietFriendly,
  ]);
  const users = useSelector(state => state.auth.users); 
  const [isSaved, setIsSaved] = useState(false);


  const recipe = recipes.find(
    r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
  );
  
  const getCommenterUsername = (userId) => {
    const userIdNumber = Number(userId);
    const user = users.find((user) => user.id === userIdNumber);
 
    console.log("Found user:", user);
    return user ? user.username : 'User1';
  };
  const commentsWithUsernames = recipe && recipe.comments
  ? recipe.comments.map((comment) => ({
      ...comment,
      username: getCommenterUsername(comment.user),
    }))
  : [];



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
  

  const handleDeleteRecipe = () => {
    if (recipe) {
      const isConfirmed = window.confirm('Are you sure you want to delete this recipe?');
      if (isConfirmed) {
        dispatch(removeRecipe({ mode: recipe.mode, id: recipe.id }));
        alert('Recipe deleted successfully!');
        navigate('/');
      }
    }
  };

const handleEditRecipe = () => {
  navigate(`/edit-recipe/${recipe.recipeTitle.replace(/\s+/g, '-')}`);
};

 const isAdmin = currentUser && currentUser.role === 'admin';

 if (!recipe) {
   return <p>Recipe not found.</p>;
 }

 const handleDeleteComment = (recipeId, commentId) => {
   const isConfirmed = window.confirm('Are you sure you want to delete this comment?');
   if (isConfirmed) {
     dispatch(deleteComment({ recipeId, commentId }));
     alert('Comment deleted successfully!');
   }
 };

 const handleUpdateComment = (recipeId, commentId, updatedData) => {
   dispatch(updateComment({ recipeId, commentId, updatedComment: updatedData }));
   alert('Comment updated successfully!');
 };



  return (
    <div>
      <Chemin/>
      
      <div>
        <div>
            <RecipeHeader 
          recipe={recipe}
          isSaved={isSaved}
          onAddToFavorites={handleAddToFavorites}
        />
              {isAdmin &&  (
                <div style={{ margin: '40px 23% 0%', display: 'flex', gap: '10px' }}>
                  <button
                    onClick={handleEditRecipe}
                    style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} /> Edit Recipe
                  </button>
                  <button
                    onClick={handleDeleteRecipe}
                    style={{
                      backgroundColor: '#ff4d4d',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete Recipe
                  </button>
                </div>
              )}
     
            <div style={{ margin: '0 auto', padding: 0, display:'flex',     flexWrap: "wrap" }}>
              
                <div style={{ width: '50%', marginLeft: '20px' }}>
                <img
                  src={recipe.picture}
                  style={{
                    marginLeft: '30px',
                    marginTop: '10px',
                    width: '100%', 
                    height: 'auto', 
                    maxHeight: '500px', 
                    objectFit: 'cover', 
                    border: '1px solid #ccc', 
                    borderRadius: '10px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                  alt={recipe.recipeTitle}
                />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    padding: '20px',
                    maxWidth: '1200px', 
                  }}
                >
                  <NutritionFacts />
                  <Ingredients />
                </div>
                

              </div>   
        </div>
      </div>
      
      <PreparationTime/>
      <Instruction/>
      <Calcul/>
      <CommentList
        comments={commentsWithUsernames}
        currentUser={currentUser}
        isAdmin={isAdmin}
        recipeId={recipe.id}
        onDeleteComment={handleDeleteComment}
        onUpdateComment={handleUpdateComment}
      />

     
      
    </div>
  );
};
 
export default RecipeDetails;
 
