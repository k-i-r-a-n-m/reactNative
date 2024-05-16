import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GussNum({ children }) {
  return (
    <>
      <View style={styles.gussContainer}>
        <Text style={styles.gussedNumText}>{children}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  gussContainer: {
    borderWidth: 5,
    borderColor: "yellow",
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 10,
  },
  gussedNumText: { fontSize: 30, color: "yellow", textAlign: "center" },
});
