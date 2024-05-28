import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceCard from "./PlaceCard";

const PlacesList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => (
        <PlaceCard
          title={item.title}
          imageUri={item.imageUri}
          place={item.coords}
        />
      )}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({});
