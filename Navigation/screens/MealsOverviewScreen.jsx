import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/DummyData";
import MealCard from "../Components/MealsList/MealCard";
import MealsList from "../Components/MealsList/MealsList";

const MealsOverviewScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId;

  const filteredMeals = MEALS.filter((e) => e.categoryIds.includes(catId));

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((e) => e.id === catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList data={filteredMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
