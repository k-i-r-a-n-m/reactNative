import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#80003e",
    // fontFamily: "game",
    fontSize: 50,
  },
});
