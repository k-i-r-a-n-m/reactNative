import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 10,
    backgroundColor: "#5c0230",
    // borderWidth: 2,
    padding: 20,
    gap: 20,
    borderRadius: 10,
    elevation: 10,
  },
});
