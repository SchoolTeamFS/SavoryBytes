import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave, faTimes, faStar } from '@fortawesome/free-solid-svg-icons';
import CommentForm from './commentaire';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const CommentList = ({ comments, currentUser, isAdmin, recipeId, onDeleteComment, onUpdateComment }) => {
  const [editingCommentId, setEditingCommentId] = useState(null); 
  const [updatedCommentText, setUpdatedCommentText] = useState(''); 
  const [updatedRating, setUpdatedRating] = useState(0); 

  // Récupérer la liste des utilisateurs depuis le Redux
  const users = useSelector((state) => state.auth.users);

  const recipes = useSelector(state => [
    ...state.recipes.normal,
    ...state.recipes.lactoseFree,
    ...state.recipes.dietFriendly,
  ]);
  const { title } = useParams();

  const recipe = recipes.find(
    r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
  );

  const getCommenterPhoto = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user?.profilePicture || 'https://th.bing.com/th/id/OIP.GHGGLYe7gDfZUzF_tElxiQHaHa?rs=1&pid=ImgDetMain'; 
  };

  const startEditingComment = (commentId, currentComment, currentRating) => {
    setEditingCommentId(commentId);
    setUpdatedCommentText(currentComment);
    setUpdatedRating(currentRating);
  };
  
  const cancelEditingComment = () => {
    setEditingCommentId(null);
    setUpdatedCommentText('');
    setUpdatedRating(0);
  };

  const saveEditedComment = (commentId) => {
    if (updatedCommentText.trim() && updatedRating >= 1 && updatedRating <= 5) {
      onUpdateComment(recipeId, commentId, {
        comment: updatedCommentText,
        rating: updatedRating,
      });
      setEditingCommentId(null);
      setUpdatedCommentText('');
      setUpdatedRating(0);
    } else {
      alert('Please enter a valid comment and rating (1-5).');
    }
  };

  const handleRatingClick = (ratingValue) => {
    setUpdatedRating(ratingValue);
  };

  const renderStars = (ratingValue) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{
            color: i <= ratingValue ? '#B55D51' : '#ccc',
            fontSize: '1.5em',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
          }}
          onClick={() => handleRatingClick(i)}
        />
      );
    }
    return stars;
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Comments</h2>
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} style={styles.commentItem}>
            <div style={styles.userInfo}>
             
              <img
                src={getCommenterPhoto(comment.user)} 
                alt={comment.username || 'User'}
                style={styles.userPhoto}
              />
              <strong style={styles.username}>{comment.username}</strong>
            </div>
            {editingCommentId === comment.id ? (
              <div>
                <div style={styles.editContainer}>
                  <input
                    type="text"
                    value={updatedCommentText}
                    onChange={(e) => setUpdatedCommentText(e.target.value)}
                    style={styles.editInput}
                    placeholder="Edit your comment"
                  />
                  <div style={styles.starsContainer}>
                    {renderStars(updatedRating)}
                  </div>
                </div>
                <div style={styles.buttonContainer}>
                  <button
                    onClick={() => saveEditedComment(comment.id)}
                    style={styles.saveButton}
                  >
                    <FontAwesomeIcon icon={faSave} /> Save
                  </button>
                  <button
                    onClick={cancelEditingComment}
                    style={styles.cancelButton}
                  >
                    <FontAwesomeIcon icon={faTimes} /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p style={styles.commentText}>{comment.comment}</p>
                <div style={styles.starsContainer}>
                  {renderStars(comment.rating)}
                </div>
              </>
            )}
            {currentUser && currentUser.id === Number(comment.user) && (
              <div style={styles.buttonContainer}>
                {editingCommentId !== comment.id && (
                  <button
                    onClick={() => startEditingComment(comment.id, comment.comment, comment.rating)}
                    style={styles.editButton}
                  >
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                )}
              </div>
            )}
            {(currentUser && (currentUser.id === Number(comment.user) || isAdmin)) && (
              <div style={styles.buttonContainer}>
                <button
                  onClick={() => onDeleteComment(recipeId, comment.id)}
                  style={styles.deleteButton}
                >
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </div>
            )}
          </div>
        ))
      ) : null}
      <CommentForm recipeId={recipe.id} />
    </div>
  );
};

export default CommentList;

// Styles
const styles = {
  container: {
    margin: '40px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    width: '50%',
  },
  commentItem: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '5px',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  userPhoto: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  username: {
    fontSize: '16px',
    color: '#B55D51',
  },
  commentText: {
    fontSize: '14px',
    color: '#333',
    margin: '10px 0',
  },
  editContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '10px',
  },
  editInput: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
  },
  starsContainer: {
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  cancelButton: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  noComments: {
    textAlign: 'center',
    color: '#666',
    fontSize: '16px',
  },
};