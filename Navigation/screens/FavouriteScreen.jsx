import { View, Text } from "react-native";
import React, { useContext } from "react";
import MealCard from "../Components/MealsList/MealCard";
import { FavouriteContext } from "../store/context/FavouriteCntx";
import { MEALS } from "../data/DummyData";
import MealsList from "../Components/MealsList/MealsList";

const FavouriteScreen = () => {
  const favouriteCntx = useContext(FavouriteContext);

  const favMeals = MEALS.filter((meal) => favouriteCntx.ids.includes(meal.id));

  return <MealsList data={favMeals} />;
};

export default FavouriteScreen;
