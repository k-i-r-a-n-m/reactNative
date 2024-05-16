import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ListItem = ({ items, label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      {items.map((e) => (
        <Text key={e} style={styles.text}>
          {e}
        </Text>
      ))}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 30,
    positon: "absolute",
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: "white",
  },
  label: {
    position: "relative",
    top: -35,
    alignItems: "flex-start",
  },
  labelText: {
    fontSize: 28,
    fontWeight: "bold",
    backgroundColor: "#FFB000",
    borderRadius: 10,
    borderWidth: 1,
    padding: 4,
    borderColor: "white",
  },
});
