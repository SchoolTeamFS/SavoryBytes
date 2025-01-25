import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../redux/recepiesReducer';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CommentForm = ({ recipeId }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentText.trim()) {
      alert("Le commentaire ne peut pas être vide.");
      return;
    }

    const newComment = {
      id: uuidv4(),
      user: currentUser.id,
      comment: commentText,
      rating: rating,
    };

    dispatch(addComment({ recipeId, comment: newComment }));

    setCommentText('');
    setRating(0);
  };

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{
            color: i <= rating ? '#B55D51' : '#ccc',
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
      <h3 style={styles.title}>Rate this recipe and share your opinion</h3>
      <div style={styles.ratingContainer}>
          <div style={styles.starsContainer}>
            {renderStars()}
          </div>
        </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="type here..."
          rows="4"
          style={styles.textarea}
          required
        />
        <br />

        
        <br />
        <button type="submit" style={styles.button}>
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;

const styles = {
  
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    resize: 'vertical',
    minHeight: '100px',
    transition: 'border-color 0.2s ease',
  },
  textareaFocus: {
    borderColor: '#B55D51',
    outline: 'none',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom:'5px'
  },
  label: {
    fontSize: '16px',
    color: '#333',
  },
  starsContainer: {
    display: 'flex',
    gap: '5px',
  },
  button: {
    backgroundColor: '#B55D51',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#9a4a3f',
  },
};