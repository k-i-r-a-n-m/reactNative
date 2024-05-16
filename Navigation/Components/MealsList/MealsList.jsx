import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealCard from "./MealCard";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({ data }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={({ item }) => <MealCard data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({});
