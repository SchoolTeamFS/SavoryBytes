import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import Card from "./Card";
import "../../styles/CardStyle.css";
import { div } from "framer-motion/client";
import TopRecipes from '../Recepies/toprecipies';
import Popularcat from '../Recepies/popular';
import Latest from '../Recepies/latestreceip';
import ListCard from "./ListCard";
const Home = () => {
  const { normal, dietFriendly, lactoseFree } = useSelector((state) => state.recipes);

  const allRecipes = [...normal, ...dietFriendly, ...lactoseFree];

  return (
    <div className="center-container">
      <TopRecipes />
      <Popularcat />
      <Latest />
      <ListCard normal={normal} dietFriendly={dietFriendly} lactoseFree={lactoseFree} />
    </div>
  );
};

export default Home;
