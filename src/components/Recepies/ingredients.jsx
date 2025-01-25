import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Ingredients=()=>{
    const { title } = useParams();
  
  const recipes = useSelector(state => [
    ...state.recipes.normal,
    ...state.recipes.lactoseFree,
    ...state.recipes.dietFriendly
  ]);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  
    const handleCheckboxChange = (ingredient) => {
      setCheckedIngredients(prevState => ({
        ...prevState,
        [ingredient]: !prevState[ingredient]
      }));
    };
  const recipe = recipes.find(
    r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
  );
    return(
        <div  style={{
          marginLeft: '200px',
          backgroundColor: "#f9f9f9",          
          color: 'black',
          height: 'auto',
          width: 'auto',
          textAlign: 'center',
          borderRadius: "5px",
          padding: '5px',
          }}>
        <h2>Ingredients</h2>
        <ul>
            {Object.entries(recipe.ingredients).map(([ingredient, quantity]) => (
            <li key={ingredient}>
                <label style={{ textDecoration: checkedIngredients[ingredient] ? 'line-through' : 'none',color: checkedIngredients[ingredient] ? 'gray' : 'black' }}>
                <input 
                    type="checkbox" 
                    checked={checkedIngredients[ingredient] || false} 
                    onChange={() => handleCheckboxChange(ingredient)} 
                />
                <span>{quantity}</span> {ingredient}
                </label>
            </li>
            ))}
        </ul>
        </div>
    );
}
export default Ingredients;