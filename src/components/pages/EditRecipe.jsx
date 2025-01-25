
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateRecipe } from '../../redux/recepiesReducer';
import '../../styles/FormsRecipes.css'; 

const EditRecipe = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipes = useSelector(state => [
    ...state.recipes.normal,
    ...state.recipes.lactoseFree,
    ...state.recipes.dietFriendly,
  ]);

  const recipe = recipes.find(
    r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
  );

  const [updatedRecipe, setUpdatedRecipe] = useState({
    recipeTitle: '',
    description: '',
    picture: '',
    preparationTime: '',
    cookingTime: '',
    servings: '',
    ingredients: {},
    nutritionFacts: {},
  });

  const [uploadedFile, setUploadedFile] = useState(null); 

  useEffect(() => {
    if (recipe) {
      setUpdatedRecipe({
        recipeTitle: recipe.recipeTitle,
        description: recipe.description,
        picture: recipe.picture, 
        preparationTime: recipe.preparationTime,
        cookingTime: recipe.cookingTime,
        servings: recipe.servings,
        ingredients: recipe.ingredients,
        nutritionFacts: recipe.nutritionFacts,
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({
      ...updatedRecipe,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      const imageURL = URL.createObjectURL(file);
      setUpdatedRecipe({ ...updatedRecipe, picture: imageURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe) {
      dispatch(updateRecipe({
        mode: recipe.mode,
        id: recipe.id,
        updatedRecipe,
      }));
      alert('Recipe updated successfully!');
      navigate('/');
    }
  };

  if (!recipe) {
    return <p>No recipe found for this category.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form-container">
      <h2>Edit Recipe</h2>

      <div className="mb-3">
        <label className="form-label">Recipe Title</label>
        <input
          type="text"
          name="recipeTitle"
          value={updatedRecipe.recipeTitle}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          name="description"
          value={updatedRecipe.description}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Recipe Image</label>
        <input
          type="file"
          name="picture"
          onChange={handleFileChange}
          className="form-control"
          accept="image/*" 
        />
       
        <div className="image-preview">
          {uploadedFile ? (
            <img
              src={URL.createObjectURL(uploadedFile)}
              alt="Uploaded"
              className="uploaded-image"
            />
          ) : (
            updatedRecipe.picture && (
              <img
                src={updatedRecipe.picture}
                alt="Current Recipe"
                className="uploaded-image"
              />
            )
          )}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Preparation Time (minutes)</label>
        <input
          type="text"
          name="preparationTime"
          value={updatedRecipe.preparationTime}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Cooking Time (minutes)</label>
        <input
          type="text"
          name="cookingTime"
          value={updatedRecipe.cookingTime}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Servings</label>
        <input
          type="text"
          name="servings"
          value={updatedRecipe.servings}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Ingredients</label>
        {Object.entries(updatedRecipe.ingredients).map(([ingredient, quantity], index) => (
          <div key={index} className="ingredient-row">
            <input
              type="text"
              placeholder="Ingredient Name"
              value={ingredient}
              onChange={(e) => {
                const newIngredients = { ...updatedRecipe.ingredients };
                delete newIngredients[ingredient];
                newIngredients[e.target.value] = quantity;
                setUpdatedRecipe({ ...updatedRecipe, ingredients: newIngredients });
              }}
              className="form-control"
              required
            />
            <input
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => {
                const newIngredients = { ...updatedRecipe.ingredients };
                newIngredients[ingredient] = e.target.value;
                setUpdatedRecipe({ ...updatedRecipe, ingredients: newIngredients });
              }}
              className="form-control"
              required
            />
          </div>
        ))}
      </div>

      <div className="mb-3">
        <label className="form-label">Nutrition Facts</label>
        {Object.entries(updatedRecipe.nutritionFacts).map(([name, value], index) => (
          <div key={index} className="nutrition-row">
            <input
              type="text"
              placeholder="Fact Name"
              value={name}
              onChange={(e) => {
                const newNutritionFacts = { ...updatedRecipe.nutritionFacts };
                delete newNutritionFacts[name];
                newNutritionFacts[e.target.value] = value;
                setUpdatedRecipe({ ...updatedRecipe, nutritionFacts: newNutritionFacts });
              }}
              className="form-control"
              required
            />
            <input
              type="text"
              placeholder="Value"
              value={value}
              onChange={(e) => {
                const newNutritionFacts = { ...updatedRecipe.nutritionFacts };
                newNutritionFacts[name] = e.target.value;
                setUpdatedRecipe({ ...updatedRecipe, nutritionFacts: newNutritionFacts });
              }}
              className="form-control"
              required
            />
          </div>
        ))}
      </div>

      <button type="submit" className="btn btn-submit">
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipe;