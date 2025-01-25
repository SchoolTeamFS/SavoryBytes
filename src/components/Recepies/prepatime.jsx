import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PreparationTime = () => {
    const { title } = useParams();
  
    const recipes = useSelector(state => [
      ...state.recipes.normal,
      ...state.recipes.lactoseFree,
      ...state.recipes.dietFriendly
    ]);
    const recipe = recipes.find(
        r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
      );
    return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around', width:'50%',flexWrap: "wrap"}}>
        <div style={{display:'flex', flexDirection:'column'}}>
          <p style={{color:'grey', fontWeight:'bold'}}>Preparation Time</p>
          <p style={{ fontWeight:'bold',fontSize:'12px',textAlign:'center'}}>{recipe.preparationTime}</p>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          <p style={{color:'grey', fontWeight:'bold'}}>Cooking Time</p>
          <p style={{ fontWeight:'bold',fontSize:'12px',textAlign:'center'}}>{recipe.cookingTime}</p>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          <p style={{color:'grey', fontWeight:'bold'}}>Serving</p>
          <p style={{ fontWeight:'bold',fontSize:'12px',textAlign:'center'}}>{recipe.servings} serving</p>
        </div>
    </div>
    );  
} 
export default PreparationTime;