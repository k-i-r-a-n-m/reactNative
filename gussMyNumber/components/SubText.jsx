import React from "react";
import { StyleSheet, Text } from "react-native";

export default function SubText({ style, children }) {
  return (
    <>
      <Text style={[styles.subText, style]}>{children}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  subText: {
    fontSize: 30,
    color: "yellow",
    textAlign: "center",
    // fontFamily: "roboto-500",
    fontFamily: "game",
  },
});
