import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Calcul = () => {
    const { title } = useParams();

    const recipes = useSelector(state => [
        ...state.recipes.normal,
        ...state.recipes.lactoseFree,
        ...state.recipes.dietFriendly,
    ]);

    const recipe = recipes.find(
        r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
    );
    const [newServings, setNewServings] = useState(recipe?.servings || 1); 

    const increment = () => setNewServings(prev => prev + 1);

    const decrement = () => setNewServings(prev => (prev > 1 ? prev - 1 : 1));

    if (!recipe) {
        return <p>Recette introuvable</p>;
    }

    const { ingredients, servings } = recipe;

    return (
        <div style={styles.container}>
            <div style={styles.servingContainer}>
                <h2>Serving</h2>
                <div style={styles.servingControls}>
                    <button
                        style={styles.button}
                        onClick={decrement}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={newServings}
                        min="1"
                        style={styles.input}
                        readOnly
                    />
                    <button style={styles.button} onClick={increment}>
                        +
                    </button>
                </div>
            </div>

            <div style={styles.ingredientsContainer}>
                {Object.entries(ingredients).map(([ingredient, quantity], index) => {
                    const originalQuantity = parseFloat(quantity) || 0;
                    const unit = quantity.replace(originalQuantity, '').trim();
                    const newQuantity = (originalQuantity * newServings) / servings || quantity;
                    return (
                        <div key={index} style={styles.ingredientItem}>
                            <span style={styles.ingredientName}>{ingredient}</span>
                            <span style={styles.ingredientQuantity}>
                                {newQuantity} {unit}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calcul;

const styles = {
    container: {
        maxWidth: '780px',
        padding: '20px',
        marginLeft:'40px',
        flexWrap: "wrap"   
     },
    title: {
        fontSize: '24px',
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center',
    },
    servingContainer: {
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px',
        
    },
 
    servingControls: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        
    },
    input: {
        width: '80px',
        padding: '10px',
        fontSize: '16px',
        border: '2px solid black', 
        borderRadius: '5px',
        textAlign: 'center',
        backgroundColor: '#fff',
        color: '#333',
    },
    button: {
        backgroundColor: '#fff',
        color: '#333',
        border: '2px solid black', 
        borderRadius: '5px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
    },
    buttonHover: {
        backgroundColor: '#9a4a3f',
    },
    ingredientsContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr', 
        gap: '10px', 
    },
    ingredientItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: 'transparent', 
        borderRadius: '5px',
    },
    ingredientName: {
        fontSize: '16px',
        color: '#333',
        fontWeight: 'bold', 
        textTransform: 'uppercase',
    },
    ingredientQuantity: {
        fontSize: '16px',
        color: '#333',
    },
};
