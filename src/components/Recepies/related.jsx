import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RelatedRecipes({ currentRecipe }) {
  const allData = useSelector((state) => [
    ...state.recipes.normal,
    ...state.recipes.lactoseFree,
    ...state.recipes.dietFriendly,
  ]);

  const relatedRecipes = allData.filter(
    (item) => item.category === currentRecipe.category && item.id !== currentRecipe.id && item.mode=== currentRecipe.mode
  );

  const sortedRelatedRecipes = [...relatedRecipes].sort((a, b) => b.rating - a.rating);
  const topRelatedRecipes = sortedRelatedRecipes.slice(0, 3);

  return (
    <div style={{marginRight:'200px',marginBottom:'10px'}}>
      <h2>Related recipes</h2>
      <div>
        {topRelatedRecipes.map((item) => (
          <Link
            key={item.id}
            to={`/recette/${item.mode}/${item.category}/${encodeURIComponent(
              item.recipeTitle.toLowerCase().replace(/ /g, "-")
            )}`}
            style={{
              display: "block",
              textDecoration: "none",
              color: "#000",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={item.picture}
                alt={item.recipeTitle}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginRight: "20px",
                  marginTop:'10px'
                }}
              />
              <h3 style={{ fontSize: "1.5rem" }}>{item.recipeTitle}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedRecipes;
