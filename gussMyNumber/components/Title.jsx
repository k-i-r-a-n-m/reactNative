import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Title({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    padding: 15,
    borderWidth: 3,
    borderColor: "white",
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    textAlignVertical: "center",
  },
});
