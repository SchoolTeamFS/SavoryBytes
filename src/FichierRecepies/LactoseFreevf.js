import spicy_chili_oil_noodles from "../imagesRecepies/LactoseFr/spicy_chili_oil_noodles.jpg";
import aromatic_chicken_rice_soup from "../imagesRecepies/LactoseFr/aromatic_chicken_rice_soup.jpg";
import easy_focaccia from "../imagesRecepies/LactoseFr/easy_focaccia.jpg";
import strawberry_corn_salsa from "../imagesRecepies/LactoseFr/strawberry_corn_salsa.jpg";
import baked_egg_rolls from "../imagesRecepies/LactoseFr/baked_egg_rolls.jpg";

const initialeStateLactoseFree=[
    {
        "id": 1,
        "recipeTitle": "Spicy Chili Oil Noodles with Zucchini & Carrots",
        "description": "A flavorful noodle dish with a spicy kick.",
        "mode":'LactoseFree',
        "rating": 4.5,
        "date": "2025-01-14",
        "comments": [
            {"user": "User1", "comment": "Delicious and spicy!", "rating": 5},
            {"user": "User2", "comment": "Loved the flavors.", "rating": 4}
        ],
        "ingredients": {
            "noodles": "200g",
            "zucchini": "1, julienned",
            "carrots": "2, julienned",
            "chili_oil": "2 tablespoons",
            "garlic": "3 cloves, minced",
            "soy_sauce": "2 tablespoons",
            "sesame_seeds": "1 tablespoon",
            "green_onions": "2, chopped",
            "salt_and_pepper": "to taste"
        },
        "category": "Main Course",
        "preparationSteps": [
            "Cook the noodles according to package instructions and drain.",
            "In a large pan, heat the chili oil over medium heat.",
            "Add minced garlic and cook for 1 minute.",
            "Add julienned zucchini and carrots to the pan and cook until tender.",
            "Stir in soy sauce and cooked noodles.",
            "Toss to combine and cook for an additional 2-3 minutes.",
            "Season with salt and pepper.",
            "Garnish with sesame seeds and chopped green onions before serving."
        ],
        "preparationTime": "10 minutes",
        "cookingTime": "15 minutes",
        "servings": 4,
        "nutritionFacts": {
            "calories": 300,
            "protein": "8g",
            "carbohydrates": "50g",
            "fat": "10g"
        },
        "difficultyLevel": "Easy",
        "author": "Noodle Master",
        "picture": spicy_chili_oil_noodles
    },
    {
        "id": 2,
        "recipeTitle": "Chicken & Rice Soup with Garlic Oil",
        "description": "A comforting and aromatic soup.",
        "mode":'LactoseFree',
        "rating": 4.7,
        "date": "2025-01-14",
        "comments": [
            {"user": "User1", "comment": "Very comforting and delicious.", "rating": 5},
            {"user": "User2", "comment": "Perfect for a cold day.", "rating": 4}
        ],
        "ingredients": {
            "chicken_breasts": "2",
            "rice": "1 cup",
            "chicken_broth": "4 cups",
            "garlic": "4 cloves, sliced",
            "ginger": "1 inch, sliced",
            "soy_sauce": "2 tablespoons",
            "sesame_oil": "1 tablespoon",
            "green_onions": "2, chopped",
            "salt_and_pepper": "to taste"
        },
        "category": "Main Course",
        "preparationSteps": [
            "In a pot, bring chicken broth to a boil.",
            "Add sliced ginger and chicken breasts to the broth. Simmer until the chicken is cooked through.",
            "Remove the chicken and shred it into bite-sized pieces.",
            "Add rice to the broth and cook until tender.",
            "In a separate pan, heat sesame oil over medium heat and add sliced garlic. Cook until golden and crispy.",
            "Return the shredded chicken to the pot and stir in soy sauce.",
            "Season with salt and pepper.",
            "Garnish with crispy garlic and chopped green onions before serving."
        ],
        "preparationTime": "15 minutes",
        "cookingTime": "30 minutes",
        "servings": 4,
        "nutritionFacts": {
            "calories": 350,
            "protein": "30g",
            "carbohydrates": "40g",
            "fat": "8g"
        },
        "difficultyLevel": "Medium",
        "author": "Soup Lover",
        "picture": aromatic_chicken_rice_soup
    },
    {
        "id": 3,
        "recipeTitle": "Easy Focaccia (No-Knead)",
        "description": "A golden, chewy focaccia perfect for sharing.",
        "mode":'LactoseFree',
        "rating": 4.8,
        "date": "2025-01-14",
        "comments": [
            {"user": "User1", "comment": "So easy to make and so tasty!", "rating": 5},
            {"user": "User2", "comment": "Best focaccia I've ever had.", "rating": 4}
        ],
        "ingredients": {
            "flour": "500g",
            "water": "350ml",
            "yeast": "1 packet",
            "salt": "2 teaspoons",
            "olive_oil": "3 tablespoons",
            "rosemary": "1 tablespoon, chopped",
            "sea_salt_flakes": "to taste"
        },
        "category": "Appetizer",
        "preparationSteps": [
            "In a large bowl, combine flour, water, yeast, and salt. Mix until a shaggy dough forms.",
            "Cover the bowl with a damp cloth and let it rise for 8-12 hours.",
            "Preheat the oven to 220°C (425°F).",
            "Pour 2 tablespoons of olive oil into a baking pan and transfer the dough into it.",
            "Use your fingers to stretch the dough to fit the pan and create dimples on the surface.",
            "Drizzle the remaining olive oil over the dough and sprinkle with chopped rosemary and sea salt flakes.",
            "Bake for 20-25 minutes until golden and crispy.",
            "Let it cool slightly before serving."
        ],
        "preparationTime": "15 minutes",
        "cookingTime": "25 minutes",
        "servings": 8,
        "nutritionFacts": {
            "calories": 200,
            "protein": "5g",
            "carbohydrates": "35g",
            "fat": "5g"
        },
        "difficultyLevel": "Easy",
        "author": "Bread Maker",
        "picture": easy_focaccia
    },
    {
        "id": 4,
        "recipeTitle": "Strawberry Corn Salsa",
        "description": "A fresh and light dessert salsa.",
        "mode":'LactoseFree',
        "rating": 4.5,
        "date": "2025-01-14",
        "comments": [
            {"user": "User1", "comment": "So refreshing and delicious!", "rating": 5},
            {"user": "User2", "comment": "Perfect for summer.", "rating": 4}
        ],
        "ingredients": {
            "strawberries": "2 cups, chopped",
            "corn_kernels": "1 cup",
            "red_onion": "1/4 cup, chopped",
            "cilantro": "1/4 cup, chopped",
            "lime_juice": "2 tablespoons",
            "salt_and_pepper": "to taste"
        },
        "category": "Dessert",
        "preparationSteps": [
            "In a large bowl, combine chopped strawberries, corn kernels, red onion, and cilantro.",
            "Add lime juice and toss to combine.",
            "Season with salt and pepper.",
            "Chill in the refrigerator for at least 30 minutes before serving."
        ],
        "preparationTime": "10 minutes",
        "cookingTime": "0 minutes",
        "servings": 4,
        "nutritionFacts": {
            "calories": 80,
            "protein": "1g",
            "carbohydrates": "18g",
            "fat": "0.5g"
        },
        "difficultyLevel": "Easy",
        "author": "Fruit Lover",
        "picture": strawberry_corn_salsa
    },
    {
        "id": 5,
        "recipeTitle": "Baked Egg Rolls",
        "description": "Crispy baked egg rolls that are perfect for snacking.",
        "mode":'LactoseFree',
        "rating": 4.7,
        "date": "2025-01-14",
        "comments": [
            {"user": "User1", "comment": "So crispy and delicious!", "rating": 5},
            {"user": "User2", "comment": "Best egg rolls I've ever had.", "rating": 4}
        ],
        "ingredients": {
            "egg_roll_wrappers": "12",
            "cabbage": "2 cups, shredded",
            "carrots": "1 cup, shredded",
            "green_onions": "2, chopped",
            "soy_sauce": "2 tablespoons",
            "garlic": "2 cloves, minced",
            "ginger": "1 teaspoon, grated",
            "sesame_oil": "1 tablespoon",
            "cooking_spray": "for baking"
        },
        "category": "Appetizer",
        "preparationSteps": [
            "Preheat the oven to 200°C (400°F).",
            "In a large bowl, combine shredded cabbage, shredded carrots, chopped green onions, minced garlic, grated ginger, soy sauce, and sesame oil.",
            "Place a small amount of the filling in the center of each egg roll wrapper.",
            "Fold the bottom corner of the wrapper over the filling, then fold in the sides and roll up tightly. Brush the edge with a little water to seal.",
            "Place the egg rolls on a baking sheet lined with parchment paper.",
            "Lightly spray the egg rolls with cooking spray.",
            "Bake for 15-20 minutes, until golden and crispy.",
            "Serve hot with your favorite dipping sauce."
        ],
        "preparationTime": "20 minutes",
        "cookingTime": "20 minutes",
        "servings": 4,
        "nutritionFacts": {
            "calories": 150,
            "protein": "5g",
            "carbohydrates": "20g",
            "fat": "5g"
        },
        "difficultyLevel": "Easy",
        "author": "Snack Enthusiast",
        "picture": baked_egg_rolls
    }
]    
export default initialeStateLactoseFree