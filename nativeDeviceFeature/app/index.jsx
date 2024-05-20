import { Pressable, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams, useFocusEffect } from "expo-router";
import React, { useCallback, useContext, useState } from "react";
import { Button, FAB } from "react-native-paper";
import { Colors_v1 } from "../Colors/v1";
import PlaceCard from "../components/PlaceCard";
import PlacesList from "../components/PlacesList";
import { FavPlacesContext } from "../Context/FavPlacesContext";

const Home = () => {
  const params = useLocalSearchParams();
  const { places } = useContext(FavPlacesContext);

  // useFocusEffect(
  //   useCallback(() => {
  //     console.log(params);
  //     // if(params?.title && params?.imageUri && params?.place){
  //     //   setFavPlaces((prev)=>([...prev,]))
  //     // }
  //   }, [params])
  // );

  return (
    <View style={styles.screen}>
      <PlacesList data={places} />

      <FAB
        icon="plus"
        style={styles.fab}
        // color="white"
        onPress={() => router.navigate("/addPlaces")}
        // mode="flat"
        color="white"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors_v1.primaryBlue,
  },
});
