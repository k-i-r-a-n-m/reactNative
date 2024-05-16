import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryGridTile = ({ data, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <Pressable
        android_ripple={{ color: "#f4f4f4ea" }}
        onPress={onPress}
        style={[styles.pressContainer, { backgroundColor: data.color }]}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data.title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 20,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  pressContainer: {
    flex: 1,
    dispaly: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
