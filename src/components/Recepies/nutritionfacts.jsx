import { useSelector } from "react-redux";
import { useParams } from "react-router";
      import Calcul from './calcul'

const NutritionFacts = () => {
    const { title } = useParams();
    
    const recipes = useSelector(state => [
      ...state.recipes.normal,
      ...state.recipes.lactoseFree,
      ...state.recipes.dietFriendly
    ]);
    
    const recipe = recipes.find(
      r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
    );
    return(
        <div
            style={{
            marginLeft: '200px',
            marginBottom:'10px',
            backgroundColor: "rgba(181, 93, 81, 0.9)",          
            color: 'white',
            height: 'auto',
            width: '60%',
            textAlign: 'center',
            borderRadius: "5px",
            padding: '5px',
            alignItems:'center',
            flexWrap: "wrap"
            }}
        >
        <h2>Nutrition Facts</h2>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {[
            { label: "Calories:", value: recipe.nutritionFacts.calories },
            { label: "Protein:", value: recipe.nutritionFacts.protein },
            { label: "Carbohydrates:", value: recipe.nutritionFacts.carbohydrates },
            { label: "Fat:", value: recipe.nutritionFacts.fat },
          ].map((item, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
              }}
            >
              <span style={{ fontWeight: 'bold' }}>{item.label}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>

      </div>
      
      
    )

    
} 
export default NutritionFacts