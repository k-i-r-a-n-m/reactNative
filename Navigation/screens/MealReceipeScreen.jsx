import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import MealCard from "../Components/MealsList/MealCard";
import ListItem from "../Components/ListItem";
import { FavouriteContext } from "../store/context/FavouriteCntx";
import IconButton from "../Components/IconButton";

const MealReceipeScreen = ({ navigation, route }) => {
  const favouriteCntx = useContext(FavouriteContext);
  const meal = route.params.data;

  const isMeasfav = favouriteCntx.ids.includes(meal.id);

  const favBtnHandler = () => {
    isMeasfav && favouriteCntx.removeFav(meal.id);
    !isMeasfav && favouriteCntx.addFav(meal.id);
  };

  useEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          name={isMeasfav ? "star" : "star-outline"}
          color="white"
          size={24}
          onPress={favBtnHandler}
        />
      ),
    });
  }, [favouriteCntx]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image src={meal.imageUrl} style={styles.image} />
      </View>

      <ListItem items={meal.ingredients} label={"Ingredients"} />
      <ListItem items={meal.steps} label={"Steps"} />
    </ScrollView>
  );
};

export default MealReceipeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#151515",
  },
  imageContainer: {
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
