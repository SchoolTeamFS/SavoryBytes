import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
 
function TopRecipes() {
  const allData = useSelector((state) => [
    ...state.recipes.normal,
    ...state.recipes.lactoseFree,
    ...state.recipes.dietFriendly,
  ]);
 
  const sortedRecipes = [...allData].sort((a, b) => b.rating - a.rating);
  const topRecipes = sortedRecipes.slice(0, 5);
 
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topRecipes.length);
    }, 4000);
 
    return () => clearInterval(interval);
  }, [topRecipes.length]);
 
  return (
<div style={{ width: "90%", margin: "2%", position: "relative" }}>
<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
          height: "700px",
        }}
>
        {topRecipes.map((item, index) => {
          const mode = item.mode;
          const categ = item.category;
          const isActive = index === currentIndex;
 
          return (
            <Link
              key={item.id}
              to={`/recette/${mode}/${categ}/${encodeURIComponent(
                item.recipeTitle.toLowerCase().replace(/ /g, '-')
              )}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: isActive ? 1 : 0,
                transition: "opacity 1s ease", 
                pointerEvents: isActive ? "auto" : "none", 
                textDecoration: "none",
              }}
              >
              <img
                src={item.picture}
                alt={item.recipeTitle}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <h3
                style={{
                  fontSize: "3rem",
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
                  textAlign: "center",
                }}
              > 
                {item.recipeTitle}
              </h3>
            </Link>
                      );
        })}
        </div>
        </div>
)
}
 
export default TopRecipes;
