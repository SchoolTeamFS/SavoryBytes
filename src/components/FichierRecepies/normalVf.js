import classicBeef from "../images/Normal/classic_beef_burger.jpg";
import mac_and_cheese from "../images/Normal/mac_and_cheese.jpg";
import pepperoni_pizza from "../images/Normal/pepperoni_pizza.jpg";
import fried_chicken from "../images/Normal/fried_chicken.jpg";
import spaghetti_carbonara from "../images/Normal/spaghetti_carbonara.jpg";
import bbq_ribs from "../images/Normal/bbq_ribs.jpg";
import chicken_alfredo from "../images/Normal/chicken_alfredo.jpg";
import tacos from "../images/Normal/tacos.jpg";
import lasagna from "../images/Normal/lasagna.jpg";
import chili_cheese_fries from "../images/Normal/chili_cheese_fries.jpg";
//------------------------------------------------------
import vegetable_curry from "../images/Normal/Indian-vegetable-curry.jpg";
import lemon_herb_salmon from "../images/Normal/lemon_herb_salmon.jpg";
import chicken_stir_fry from "../images/Normal/chicken_stir_fry.jpg";
import quinoa_salad from "../images/Normal/quinoa_salad.jpg";
import veggie_pizza from "../images/Normal/veggie_pizza.jpg";
import chicken_caesar_wrap from "../images/Normal/chicken_caesar_wrap.jpg";
import lentil_soup from "../images/Normal/lentil_soup.jpg";
import grilled_veggie_skewers from "../images/Normal/grilled_veggie_skewers.jpg";
import chocolate_mousse from "../images/Normal/chocolate_mousse.jpg";
import apple_pie from "../images/Normal/apple_pie.jpg";
import berry_parfait from "../images/Normal/berry_parfait.jpg";

export const initialStateNormal = [
    // Classic Beef Burger
    {
        "id": 1,
        "recipeTitle": "Classic Beef Burger",
        "description": "A juicy beef burger with cheese, lettuce, and tomato.",
        "mode":'Normal',
        "rating": 4.8,
        "date": "2025-01-11",
        "comments": [
            {"id":"1","user": "4", "comment": "Delicious and juicy!", "rating": 5},
            {"id":"2","user": "3", "comment": "Very tasty!", "rating": 4}
        ],
        "ingredients": {
            "ground_beef": "500 g",
            "egg": "1",
            "breadcrumbs": "1/2 cup",
            "cheese_slices": "4",
            "hamburger_buns": "4",
            "lettuce": "to taste",
            "tomato": "to taste",
            "salt_and_pepper": "to taste"
        },
        "category": "Main Course",
        "preparationSteps": [
            "In a large bowl, mix the ground beef, beaten egg, breadcrumbs, salt, and pepper.",
            "Form the mixture into patties.",
            "Preheat a grill to medium-high heat.",
            "Grill the patties for about 5-7 minutes on each side, until fully cooked.",
            "Place a slice of cheese on each patty during the last minute of grilling.",
            "Toast the hamburger buns on the grill.",
            "Assemble the burgers with lettuce, tomato, and the beef patty.",
            "Serve immediately."
        ],
        "preparationTime": "20 minutes",
        "cookingTime": "15 minutes",
        "servings": 4,
        "nutritionFacts": {
            "calories": 500,
            "protein": "30g",
            "carbohydrates": "35g",
            "fat": "25g"
        },
        "difficultyLevel": "Easy",
        "author": "John Doe",
        "picture": classicBeef
    },
    // Mac and Cheese
    {
        "id": 2,
        "recipeTitle": "Mac and Cheese",
        "description": "Creamy and cheesy macaroni pasta.",
        "mode":'Normal',
        "rating": 4.2,
        "date": "2025-01-11",
        "comments": [
            {"id":"1","user": "2", "comment": "Creamy and comforting!", "rating": 4},
            {"id":"2","user": "5", "comment": "Needs more cheese.", "rating": 3}
        ],
        "ingredients": {
            "elbow_macaroni": "300 g",
            "shredded_cheddar_cheese": "2 cups",
            "milk": "2 cups",
            "butter": "2 tablespoons",
            "flour": "2 tablespoons",
            "salt_and_pepper": "to taste"
        },
        "category": "Main Course",
        "preparationSteps": [
            "Cook the macaroni according to package instructions and drain.",
            "In a saucepan, melt the butter over medium heat.",
            "Stir in the flour and cook for 1-2 minutes.",
            "Gradually whisk in the milk and cook until the sauce thickens.",
            "Add the shredded cheddar cheese and stir until melted.",
            "Season with salt and pepper to taste.",
            "Combine the cheese sauce with the cooked macaroni.",
            "Serve hot."
        ],
        "preparationTime": "10 minutes",
        "cookingTime": "20 minutes",
        "servings": 4,
        "nutritionFacts": {
            "calories": 400,
            "protein": "15g",
            "carbohydrates": "45g",
            "fat": "15g"
        },
        "difficultyLevel": "Easy",
        "author": "Jane Smith",
        "picture": mac_and_cheese
    },
    // Pepperoni Pizza
    {
        "id": 3,
        "recipeTitle": "Pepperoni Pizza",
        "description": "A classic pizza topped with pepperoni and mozzarella cheese.",
        "mode":'Normal',
        "rating": 4.2,
        "date": "2025-01-11",
        "comments": [
            {"id":"1","user": "3", "comment": "A family favorite!", "rating": 5},
            {"id":"2","user": "5", "comment": "Good but could use more toppings.", "rating": 4}
        ],
        "ingredients": {
            "pizza_dough": "1",
            "tomato_sauce": "1 cup",
            "shredded_mozzarella_cheese": "2 cups",
            "pepperoni_slices": "20",
            "oregano": "1 teaspoon"
        },
        "category": "Main Course",
        "preparationSteps": [
            "Preheat the oven to 220°C (425°F).",
            "Roll out the pizza dough on a baking sheet.",
            "Spread the tomato sauce over the dough.",
            "Sprinkle the shredded mozzarella cheese on top.",
            "Arrange the pepperoni slices over the cheese.",
            "Sprinkle oregano on top.",
            "Bake for 15-20 minutes until the crust is golden and the cheese is bubbly.",
            "Serve hot."
        ],
        "preparationTime": "15 minutes",
        "cookingTime": "20 minutes",
        "servings": 4,
        "nutritionFacts": {
            "calories": 600,
            "protein": "25g",
            "carbohydrates": "55g",
            "fat": "30g"
        },
        "difficultyLevel": "Medium",
        "author": "Chef Mario",
        "picture": pepperoni_pizza
    },
    // Fried Chicken
    {
        "id": 4,
        "recipeTitle": "Fried Chicken",
        "description": "Crispy fried chicken with a golden crust.",
        "mode":'Normal',
        "rating": 4.5,
        "date": "2025-01-11",
        "comments": [
            {"id":"1","user": "2", "comment": "Crispy and delicious!", "rating": 5},
            {"id":"2","user": "4", "comment": "Perfectly cooked.", "rating": 4}
        ],
        "ingredients": {
            "chicken_pieces": "8",
            "buttermilk": "2 cups",
            "flour": "2 cups",
            "paprika": "1 teaspoon",
            "garlic_powder": "1 teaspoon",
            "salt": "1 teaspoon",
            "black_pepper": "1 teaspoon",
            "vegetable_oil": "for frying"
        },
        "category": "Main Course",
        "preparationSteps": [
            "Soak the chicken pieces in buttermilk for at least 1 hour.",
            "In a large bowl, combine flour, paprika, garlic powder, salt, and black pepper.",
            "Heat vegetable oil in a deep pan or fryer to 175°C (350°F).",
            "Dredge the soaked chicken pieces in the flour mixture.",
            "Fry the chicken pieces in batches until golden brown and cooked through, about 10-15 minutes per batch.",
            "Drain on paper towels and serve hot."
        ],
        "preparationTime": "15 minutes",
        "cookingTime": "30 minutes",
        "servings": 4,
        "nutritionFacts": {
            "calories": 700,
            "protein": "35g",
            "carbohydrates": "40g",
            "fat": "40g"
        },
        "difficultyLevel": "Medium",
        "author": "Grandma's Recipe",
        "picture": fried_chicken
    },
   
    // Spaghetti Carbonara
{
    "id": 5,
    "recipeTitle": "Spaghetti Carbonara",
    "description": "Classic Italian pasta with eggs, cheese, and pancetta.",
    "mode":'Normal',
    "rating": 4.0,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "2", "comment": "Rich and creamy!", "rating": 5},
        {"id":"2","user": "3", "comment": "Authentic taste.", "rating": 4}
    ],
    "ingredients": {
        "spaghetti": "200g",
        "pancetta": "100g",
        "eggs": "2",
        "parmesan_cheese": "1 cup",
        "garlic": "2 cloves",
        "salt_and_pepper": "to taste",
        "parsley": "for garnish"
    },
    "category": "Main Course",
    "preparationSteps": [
        "Cook the spaghetti according to package instructions and drain, reserving some pasta water.",
        "In a large pan, cook the pancetta over medium heat until crispy.",
        "Add minced garlic and cook for 1 minute.",
        "In a bowl, whisk together eggs and grated Parmesan cheese.",
        "Add the cooked spaghetti to the pan with the pancetta.",
        "Remove the pan from heat and quickly stir in the egg and cheese mixture, adding pasta water as needed to create a creamy sauce.",
        "Season with salt and pepper.",
        "Garnish with parsley and serve immediately."
    ],
    "preparationTime": "10 minutes",
    "cookingTime": "15 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 600,
        "protein": "25g",
        "carbohydrates": "75g",
        "fat": "20g"
    },
    "difficultyLevel": "Easy",
    "author": "Luca Rossi",
    "picture": spaghetti_carbonara
},

    // BBQ Ribs
    {
        "id": 6,
        "recipeTitle": "BBQ Ribs",
        "description": "Tender and flavorful barbecue ribs with a smoky sauce.",
        "mode":'Normal',
        "rating": 4.1,
        "date": "2025-01-11",
        "comments": [
            {"id":"1","user": "3", "comment": "Tender and flavorful!", "rating": 5},
            {"id":"2","user": "5", "comment": "Great smoky flavor.", "rating": 4}
        ],
        "ingredients": {
            "ribs": "1 rack",
            "barbecue_sauce": "1 cup",
            "brown_sugar": "2 tablespoons",
            "paprika": "1 tablespoon",
            "garlic_powder": "1 teaspoon",
            "onion_powder": "1 teaspoon",
            "salt_and_pepper": "to taste"
        },
        "category": "Main Course",
        "preparationSteps": [
            "Preheat the oven to 160°C (325°F).",
            "In a small bowl, mix brown sugar, paprika, garlic powder, onion powder, salt, and pepper.",
            "Rub the spice mixture all over the ribs.",
            "Place the ribs on a baking sheet and cover with foil.",
            "Bake for 2-3 hours until the ribs are tender.",
            "Remove the foil and brush the ribs with barbecue sauce.",
            "Increase the oven temperature to 220°C (425°F) and bake for an additional 15-20 minutes until the sauce is bubbly.",
            "Serve hot."
        ],
        "preparationTime": "15 minutes",
        "cookingTime": "3 hours",
        "servings": 4,
        "nutritionFacts": {
            "calories": 700,
            "protein": "40g",
            "carbohydrates": "50g",
            "fat": "30g"
        },
        "difficultyLevel": "Medium",
        "author": "BBQ Master",
        "picture": bbq_ribs
    },
    // Chicken Alfredo
    {
        "id": 7,
        "recipeTitle": "Chicken Alfredo",
        "description": "Creamy fettuccine Alfredo with grilled chicken.",
        "mode":'Normal',
        "rating": 4.7,
        "date": "2025-01-11",
        "comments": [
            {"id":"1","user": "4", "comment": "Creamy and delicious!", "rating": 5},
            {"id":"2","user": "5", "comment": "Very tasty.", "rating": 4}
        ],
        "ingredients": {
            "chicken_breasts": "2",
            "fettuccine": "200g",
            "heavy_cream": "1 cup",
            "parmesan_cheese": "1/2 cup",
            "garlic": "2 cloves",
            "butter": "2 tablespoons",
            "salt_and_pepper": "to taste",
            "parsley": "for garnish"
        },
        "category": "Main Course",
        "preparationSteps": [
            "Cook the fettuccine according to package instructions and drain.",
            "Season the chicken breasts with salt and pepper.",
            "Grill the chicken until fully cooked and slice.",
            "In a large pan, melt the butter over medium heat.",
            "Add minced garlic and cook for 1 minute.",
            "Add heavy cream and bring to a simmer.",
            "Stir in grated Parmesan cheese until the sauce is smooth.",
            "Add the cooked fettuccine and sliced chicken to the pan.",
            "Toss to combine and coat the pasta in the sauce.",
            "Garnish with parsley and serve immediately."
        ],
        "preparationTime": "15 minutes",
        "cookingTime": "20 minutes",
        "servings": 4,
        "nutritionFacts": {
            "calories": 600,
            "protein": "40g",
            "carbohydrates": "45g",
            "fat": "30g"
        },
        "difficultyLevel": "Medium",
        "author": "Chef Alfredo",
        "picture": chicken_alfredo
    },
    // Tacos
    {
        "id": 8,
        "recipeTitle": "Tacos",
        "description": "Ground beef tacos with fresh toppings.",
        "mode":'Normal',
        "rating": 4.8,
        "date": "2025-01-11",
        "comments": [
            {"id":"1","user": "3", "comment": "So good!", "rating": 5},
            {"id":"1","user": "2", "comment": "Perfect for a quick meal.", "rating": 4}
        ],
        "ingredients": {
            "ground_beef": "500g",
            "taco_seasoning": "1 packet",
            "taco_shells": "8",
            "lettuce": "to taste",
            "tomato": "to taste",
            "cheese": "to taste",
            "sour_cream": "to taste",
            "salsa": "to taste"
        },
        "category": "Main Course",
        "preparationSteps": [
            "Cook the ground beef in a large pan over medium heat until browned.",
            "Add the taco seasoning packet and follow the package instructions.",
            "Warm the taco shells in the oven or microwave.",
            "Assemble the tacos with the seasoned beef, lettuce, diced tomato, shredded cheese, sour cream, and salsa.",
            "Serve immediately."
        ],
        "preparationTime": "10 minutes",
        "cookingTime": "15 minutes",
        "servings": 4,
        "nutritionFacts": {
            "calories": 300,
            "protein": "20g",
            "carbohydrates": "30g",
            "fat": "15g"
        },
        "difficultyLevel": "Easy",
        "author": "Taco Specialist",
        "picture": tacos
    },
    // Lasagna
    {
        "id": 9,
        "recipeTitle": "Lasagna",
        "description": "Layers of pasta, meat sauce, and cheese baked to perfection.",
        "mode":'Normal',
        "rating": 4.0,
        "date": "2025-01-11",
        "comments": [
            {"id":"1","user": "3", "comment": "Rich and hearty!", "rating": 5},
            {"id":"2","user": "4", "comment": "A bit heavy.", "rating": 3}
        ],
        "ingredients": {
            "lasagna_noodles": "12",
            "ground_beef": "500g",
            "onion": "1",
            "garlic": "2 cloves",
            "canned_tomatoes": "800g",
            "ricotta_cheese": "2 cups",
            "mozzarella_cheese": "2 cups",
            "parmesan_cheese": "1 cup",
            "egg": "1",
            "basil": "1 tablespoon",
            "oregano": "1 tablespoon",
            "salt_and_pepper": "to taste"
        },
        "category": "Main Course",
        "preparationSteps": [
            "Preheat the oven to 175°C (350°F).",
            "Cook the lasagna noodles according to package instructions and drain.",
            "In a large skillet, cook the ground beef, diced onion, and minced garlic until the beef is browned.",
            "Add the canned tomatoes, basil, oregano, salt, and pepper to the skillet.",
            "Simmer the meat sauce for 15-20 minutes.",
            "In a bowl, mix the ricotta cheese, egg, and half of the Parmesan cheese.",
            "Spread a layer of meat sauce on the bottom of a baking dish.",
            "Layer with lasagna noodles, ricotta mixture, shredded mozzarella, and meat sauce.",
            "Repeat the layers, ending with a layer of meat sauce and remaining Parmesan cheese.",
            "Cover with foil and bake for 25 minutes.",
            "Remove the foil and bake for an additional 25 minutes.",
            "Let the lasagna rest for 10 minutes before serving."
        ],
        "preparationTime": "30 minutes",
        "cookingTime": "50 minutes",
        "servings": 8,
        "nutritionFacts": {
            "calories": 450,
            "protein": "30g",
            "carbohydrates": "50g",
            "fat": "20g"
        },
        "difficultyLevel": "Medium",
        "author": "Italian Chef",
        "picture": lasagna
    },
   // Chili Cheese Fries
{
    "id": 10,
    "recipeTitle": "Chili Cheese Fries",
    "description": "Crispy fries topped with chili and melted cheese.",
    "mode":'Normal',
    "rating": 3.8,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "5", "comment": "So tasty!", "rating": 4},
        {"id":"2","user": "3", "comment": "A bit greasy.", "rating": 3}
    ],
    "ingredients": {
        "potatoes": "4 large",
        "ground_beef": "500g",
        "onion": "1",
        "garlic": "2 cloves",
        "kidney_beans": "1 can",
        "diced_tomatoes": "1 can",
        "chili_powder": "1 tablespoon",
        "cumin": "1 teaspoon",
        "shredded_cheddar_cheese": "2 cups",
        "salt_and_pepper": "to taste",
        "vegetable_oil": "for frying"
    },
    "category": "Appetizer",
    "preparationSteps": [
        "Preheat the oven to 200°C (400°F).",
        "Peel and cut the potatoes into fries.",
        "Toss the fries with vegetable oil, salt, and pepper.",
        "Spread the fries on a baking sheet and bake for 20-25 minutes, until crispy.",
        "In a skillet, cook the ground beef, diced onion, and minced garlic until the beef is browned.",
        "Add the kidney beans, diced tomatoes, chili powder, cumin, salt, and pepper to the skillet.",
        "Simmer the chili for 15-20 minutes.",
        "Arrange the baked fries on a serving platter.",
        "Top with the chili and shredded cheddar cheese.",
        "Bake for an additional 5 minutes, until the cheese is melted."
    ],
    "preparationTime": "20 minutes",
    "cookingTime": "25 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 600,
        "protein": "25g",
        "carbohydrates": "70g",
        "fat": "25g"
    },
    "difficultyLevel": "Medium",
    "author": "Snack Lover",
    "picture": chili_cheese_fries
},
      
// Vegetable Curry
{
    "id": 11,
    "recipeTitle": "Vegetable Curry",
    "description": "A flavorful vegetable curry with coconut milk and spices.",
    "mode":'Normal',
    "rating": 4.5,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "2", "comment": "Rich and aromatic!", "rating": 5},
        {"id":"2","user": "4", "comment": "Great vegetarian option.", "rating": 4}
    ],
    "ingredients": {
        "potatoes": "2",
        "carrots": "2",
        "cauliflower_florets": "2 cups",
        "green_peas": "1 cup",
        "coconut_milk": "1 can",
        "onion": "1",
        "garlic": "2 cloves",
        "ginger": "1 teaspoon",
        "curry_powder": "2 tablespoons",
        "cumin": "1 teaspoon",
        "coriander": "1 teaspoon",
        "salt_and_pepper": "to taste",
        "vegetable_oil": "2 tablespoons",
        "cilantro": "for garnish"
    },
    "category": "Main Course",
    "preparationSteps": [
        "Heat the vegetable oil in a large pot over medium heat.",
        "Add diced onion, minced garlic, and grated ginger. Cook until the onion is soft.",
        "Stir in curry powder, cumin, and coriander. Cook for 1 minute until fragrant.",
        "Add diced potatoes, carrots, and cauliflower florets. Cook for 5 minutes.",
        "Pour in the coconut milk and bring to a simmer.",
        "Add green peas and cook until the vegetables are tender, about 10-15 minutes.",
        "Season with salt and pepper.",
        "Garnish with cilantro and serve hot with rice."
    ],
    "preparationTime": "15 minutes",
    "cookingTime": "30 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 350,
        "protein": "8g",
        "carbohydrates": "50g",
        "fat": "15g"
    },
    "difficultyLevel": "Easy",
    "author": "Spice Master",
    "picture": vegetable_curry
},
// Lemon Herb Salmon
{
    "id": 12,
    "recipeTitle": "Lemon Herb Salmon",
    "description": "Fresh salmon fillets baked with lemon and herbs.",
    "mode":'Normal',
    "rating": 4.7,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "4", "comment": "Perfectly cooked!", "rating": 5},
        {"id":"2","user": "3", "comment": "Delicious and healthy.", "rating": 4}
    ],
    "ingredients": {
        "salmon_fillets": "4",
        "lemon": "1",
        "olive_oil": "2 tablespoons",
        "garlic": "2 cloves",
        "rosemary": "1 teaspoon",
        "thyme": "1 teaspoon",
        "salt_and_pepper": "to taste",
        "parsley": "for garnish"
    },
    "category": "Main Course",
    "preparationSteps": [
        "Preheat the oven to 180°C (350°F).",
        "Place the salmon fillets on a baking sheet lined with parchment paper.",
        "Drizzle the salmon with olive oil and season with minced garlic, rosemary, thyme, salt, and pepper.",
        "Slice the lemon and place the slices on top of the salmon fillets.",
        "Bake for 15-20 minutes until the salmon is cooked through.",
        "Garnish with fresh parsley and serve hot."
    ],
    "preparationTime": "10 minutes",
    "cookingTime": "20 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 400,
        "protein": "35g",
        "carbohydrates": "5g",
        "fat": "25g"
    },
    "difficultyLevel": "Easy",
    "author": "Seafood Lover",
    "picture": lemon_herb_salmon
},
// Chicken Stir Fry
{
    "id": 13,
    "recipeTitle": "Chicken Stir Fry",
    "description": "Quick and easy chicken stir fry with vegetables.",
    "mode":'Normal',
    "rating": 4.6,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "3", "comment": "Healthy and tasty!", "rating": 5},
        {"id":"2","user": "2", "comment": "Simple and delicious.", "rating": 4}
    ],
    "ingredients": {
        "chicken_breasts": "2",
        "broccoli_florets": "2 cups",
        "bell_pepper": "1",
        "carrot": "1",
        "soy_sauce": "2 tablespoons",
        "ginger": "1 teaspoon",
        "garlic": "2 cloves",
        "sesame_oil": "1 tablespoon",
        "salt_and_pepper": "to taste",
        "sesame_seeds": "for garnish"
    },
    "category": "Main Course",
    "preparationSteps": [
        "Cut the chicken breasts into thin strips.",
        "Heat sesame oil in a large pan or wok over medium-high heat.",
        "Add minced garlic and ginger. Cook for 1 minute until fragrant.",
        "Add the chicken strips and cook until browned.",
        "Add the broccoli florets, sliced bell pepper, and carrot. Stir fry for 5-7 minutes until the vegetables are tender-crisp.",
        "Stir in the soy sauce and season with salt and pepper.",
        "Garnish with sesame seeds and serve hot with rice."
    ],
    "preparationTime": "10 minutes",
    "cookingTime": "15 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 300,
        "protein": "25g",
        "carbohydrates": "15g",
        "fat": "15g"
    },
    "difficultyLevel": "Easy",
    "author": "Quick Cook",
    "picture": chicken_stir_fry
},
// Quinoa Salad
{
    "id": 14,
    "recipeTitle": "Quinoa Salad",
    "description": "A refreshing salad with quinoa, vegetables, and lemon dressing.",
    "mode":'Normal',
    "rating": 4.4,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "5", "comment": "Light and healthy!", "rating": 5},
        {"id":"2","user": "4", "comment": "Perfect for lunch.", "rating": 4}
    ],
    "ingredients": {
        "quinoa": "1 cup",
        "cucumber": "1",
        "cherry_tomatoes": "1 cup",
        "red_bell_pepper": "1",
        "red_onion": "1/2",
        "parsley": "1/4 cup",
        "olive_oil": "2 tablespoons",
        "lemon_juice": "2 tablespoons",
        "salt_and_pepper": "to taste"
    },
    "category": "Salad",
    "preparationSteps": [
        "Cook the quinoa according to package instructions and let it cool.",
        "Chop the cucumber, cherry tomatoes, red bell pepper, and red onion.",
        "In a large bowl, combine the cooked quinoa and chopped vegetables.",
        "Add chopped parsley, olive_oil, lemon juice, salt, and pepper.",
        "Toss to combine and serve chilled."
    ],
    "preparationTime": "15 minutes",
    "cookingTime": "15 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 250,
        "protein": "8g",
        "carbohydrates": "30g",
        "fat": "10g"
    },
    "difficultyLevel": "Easy",
    "author": "Health Nut",
    "picture": quinoa_salad
},
// Veggie Pizza
{
    "id": 15,
    "recipeTitle": "Veggie Pizza",
    "description": "A delicious pizza topped with a variety of fresh vegetables.",
    "mode":'Normal',
    "rating": 4.3,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "4", "comment": "Loaded with veggies!", "rating": 5},
        {"id":"2","user": "3", "comment": "Great vegetarian option.", "rating": 4}
    ],
    "ingredients": {
        "pizza_dough": "1",
        "tomato_sauce": "1 cup",
        "mozzarella_cheese": "2 cups",
        "bell_peppers": "1 cup",
        "red_onion": "1/2 cup",
        "mushrooms": "1 cup",
        "black_olives": "1/2 cup",
        "spinach": "1 cup",
        "oregano": "1 teaspoon"
    },
    "category": "Main Course",
    "preparationSteps": [
        "Preheat the oven to 220°C (425°F).",
        "Roll out the pizza dough on a baking sheet.",
        "Spread the tomato sauce over the dough.",
        "Sprinkle the shredded mozzarella cheese on top.",
        "Add sliced bell peppers, red onion, mushrooms, black olives, and spinach.",
        "Sprinkle oregano on top.",
        "Bake for 15-20 minutes until the crust is golden and the cheese is bubbly.",
        "Serve hot."
    ],
    "preparationTime": "15 minutes",
    "cookingTime": "20 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 500,
        "protein": "20g",
        "carbohydrates": "60g",
        "fat": "20g"
    },
    "difficultyLevel": "Easy",
    "author": "Veggie Enthusiast",
    "picture": veggie_pizza
},
// Chicken Caesar Wrap
{
    "id": 16,
    "recipeTitle": "Chicken Caesar Wrap",
    "description": "A fresh wrap with grilled chicken, lettuce, and Caesar dressing.",
    "mode":'Normal',
    "rating": 4.5,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "5", "comment": "Perfect for lunch!", "rating": 5},
        {"id":"2","user": "4", "comment": "Very tasty and healthy.", "rating": 4}
    ],
    "ingredients": {
        "chicken_breasts": "2",
        "romaine_lettuce": "2 cups",
        "caesar_dressing": "1/2 cup",
        "parmesan_cheese": "1/4 cup",
        "whole_wheat_tortillas": "4",
        "croutons": "1/2 cup"
    },
    "category": "Main Course",
    "preparationSteps": [
        "Grill the chicken breasts until fully cooked and slice into strips.",
        "In a bowl, mix the sliced chicken with romaine lettuce, Caesar dressing, grated Parmesan cheese, and croutons.",
        "Place the mixture in the center of each tortilla.",
        "Fold the sides of the tortilla and roll it up to form a wrap.",
        "Serve immediately."
    ],
    "preparationTime": "15 minutes",
    "cookingTime": "10 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 350,
        "protein": "25g",
        "carbohydrates": "30g",
        "fat": "15g"
    },
    "difficultyLevel": "Easy",
    "author": "Wrap Specialist",
    "picture": chicken_caesar_wrap
},
// Lentil Soup
{
    "id": 17,
    "recipeTitle": "Lentil Soup",
    "description": "A hearty and nutritious lentil soup with vegetables.",
    "mode":'Normal',
    "rating": 4.8,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "4", "comment": "Comforting and filling!", "rating": 5},
        {"id":"2","user": "3", "comment": "Perfect for a cold day.", "rating": 4}
    ],
    "ingredients": {
        "lentils": "1 cup",
        "carrots": "2",
        "celery_stalks": "2",
        "onion": "1",
        "garlic": "2 cloves",
        "canned_tomatoes": "1 can",
        "vegetable_broth": "4 cups",
        "bay_leaf": "1",
        "cumin": "1 teaspoon",
        "paprika": "1 teaspoon",
        "salt_and_pepper": "to taste",
        "olive_oil": "2 tablespoons",
        "parsley": "for garnish"
    },
    "category": "Soup",
    "preparationSteps": [
        "Heat the olive oil in a large pot over medium heat.",
        "Add diced onion, minced garlic, chopped carrots, and celery. Cook until the vegetables are soft.",
        "Stir in cumin, paprika, salt, and pepper.",
        "Add the lentils, canned tomatoes, vegetable broth, and bay leaf. Bring to a boil.",
        "Reduce the heat and simmer for 25-30 minutes until the lentils are tender.",
        "Remove the bay leaf and season with additional salt and pepper if needed.",
        "Garnish with chopped parsley and serve hot."
    ],
    "preparationTime": "15 minutes",
    "cookingTime": "30 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 250,
        "protein": "12g",
        "carbohydrates": "40g",
        "fat": "5g"
    },
    "difficultyLevel": "Easy",
    "author": "Soup Lover",
    "picture": lentil_soup
},
// Grilled Veggie Skewers
{
    "id": 18,
    "recipeTitle": "Grilled Veggie Skewers",
    "description": "Colorful skewers with a variety of grilled vegetables.",
    "mode":'Normal',
    "rating": 4.4,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "2", "comment": "A great side dish!", "rating": 5},
        {"id":"2","user": "5", "comment": "Very flavorful.", "rating": 4}
    ],
    "ingredients": {
        "bell_peppers": "2",
        "zucchini": "2",
        "red_onion": "1",
        "mushrooms": "1 cup",
        "cherry_tomatoes": "1 cup",
        "olive_oil": "2 tablespoons",
        "garlic_powder": "1 teaspoon",
        "dried_oregano": "1 teaspoon",
        "salt_and_pepper": "to taste",
        "bamboo_skewers": "8"
    },
    "category": "Appetizer",
    "preparationSteps": [
        "Preheat the grill to medium-high heat.",
        "Cut the bell peppers, zucchini, and red onion into chunks.",
        "Thread the vegetables onto the bamboo skewers, alternating between different vegetables.",
        "In a small bowl, mix olive oil, garlic powder, dried oregano, salt, and pepper.",
        "Brush the vegetable skewers with the olive oil mixture.",
        "Grill the skewers for 10-15 minutes, turning occasionally, until the vegetables are tender and slightly charred.",
        "Serve hot."
    ],
    "preparationTime": "15 minutes",
    "cookingTime": "15 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 150,
        "protein": "4g",
        "carbohydrates": "15g",
        "fat": "10g"
    },
    "difficultyLevel": "Easy",
    "author": "Grill Master",
    "picture": grilled_veggie_skewers
},
// Chocolate Mousse
{
    "id": 19,
    "recipeTitle": "Chocolate Mousse",
    "description": "A rich and creamy chocolate mousse dessert.",
    "mode":'Normal',
    "rating": 4.9,
    "date": "2025-01-11",
    "comments": [
        {"user": "User1", "comment": "Heavenly and smooth!", "rating": 5},
        {"user": "User2", "comment": "Best dessert ever!", "rating": 5}
    ],
    "ingredients": {
        "dark_chocolate": "200g",
        "heavy_cream": "1 cup",
        "sugar": "2 tablespoons",
        "vanilla_extract": "1 teaspoon",
        "egg_whites": "3",
        "salt": "a pinch"
    },
    "category": "Dessert",
    "preparationSteps": [
        "Melt the dark chocolate in a heatproof bowl over a pot of simmering water.",
        "In a separate bowl, whip the heavy cream with the sugar and vanilla extract until soft peaks form.",
        "In another bowl, beat the egg whites with a pinch of salt until stiff peaks form.",
        "Fold the melted chocolate into the whipped cream mixture.",
        "Gently fold in the beaten egg whites until fully combined.",
        "Spoon the mousse into serving dishes and refrigerate for at least 2 hours before serving."
    ],
    "preparationTime": "20 minutes",
    "cookingTime": "0 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 300,
        "protein": "5g",
        "carbohydrates": "25g",
        "fat": "20g"
    },
    "difficultyLevel": "Medium",
    "author": "Dessert Chef",
    "picture": chocolate_mousse
},
// Apple Pie
{
    "id": 20,
    "recipeTitle": "Apple Pie",
    "description": "A classic apple pie with a flaky crust and sweet apple filling.",
    "mode":'Normal',
    "rating": 4.8,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "4", "comment": "Perfectly sweet and tart!", "rating": 5},
        {"id":"2","user": "2", "comment": "A family favorite.", "rating": 4}
    ],
    "ingredients": {
        "pie_crusts": "2",
        "apples": "6",
        "sugar": "3/4 cup",
        "brown_sugar": "1/4 cup",
        "flour": "2 tablespoons",
        "cinnamon": "1 teaspoon",
        "nutmeg": "1/4 teaspoon",
        "lemon_juice": "1 tablespoon",
        "butter": "2 tablespoons"
    },
    "category": "Dessert",
    "preparationSteps": [
        "Preheat the oven to 220°C (425°F).",
        "Peel, core, and slice the apples.",
        "In a large bowl, combine the sliced apples, sugar, brown sugar, flour, cinnamon, nutmeg, and lemon juice.",
        "Place one pie crust in a pie dish and fill with the apple mixture.",
        "Dot the filling with small pieces of butter.",
        "Cover with the second pie crust and crimp the edges to seal.",
        "Cut slits in the top crust to allow steam to escape.",
        "Bake for 45-50 minutes until the crust is golden and the filling is bubbly.",
        "Let the pie cool before serving."
    ],
    "preparationTime": "30 minutes",
    "cookingTime": "50 minutes",
    "servings": 8,
    "nutritionFacts": {
        "calories": 400,
        "protein": "3g",
        "carbohydrates": "60g",
        "fat": "15g"
    },
    "difficultyLevel": "Medium",
    "author": "Baker Extraordinaire",
    "picture": apple_pie
},
// Berry Parfait
{
    "id": 21,
    "recipeTitle": "Berry Parfait",
    "description": "A refreshing parfait with layers of yogurt, granola, and mixed berries.",
    "mode":'Normal',
    "rating": 4.5,
    "date": "2025-01-11",
    "comments": [
        {"id":"1","user": "4", "comment": "Light and delicious!", "rating": 5},
        {"id":"2","user": "5", "comment": "Perfect summer dessert.", "rating": 4}
    ],
    "ingredients": {
        "greek_yogurt": "2 cups",
        "granola": "1 cup",
        "mixed_berries": "2 cups",
        "honey": "2 tablespoons",
        "mint_leaves": "for garnish"
    },
    "category": "Dessert",
    "preparationSteps": [
        "In serving glasses or bowls, layer the Greek yogurt, granola, and mixed berries.",
        "Drizzle each layer with honey.",
        "Repeat the layers until the glasses are filled.",
        "Garnish with fresh mint leaves.",
        "Serve immediately or refrigerate until ready to serve."
    ],
    "preparationTime": "10 minutes",
    "cookingTime": "0 minutes",
    "servings": 4,
    "nutritionFacts": {
        "calories": 200,
        "protein": "8g",
        "carbohydrates": "30g",
        "fat": "5g"
    },
    "difficultyLevel": "Easy",
    "author": "Healthy Eater",
    "picture": berry_parfait
}
];

export default  initialStateNormal

