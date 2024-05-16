import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ style, onPress, children }) {
  return (
    <>
      <View style={styles.buttonOuterContainer}>
        <Pressable
          style={[styles.buttonInnerContainer, style]}
          onPress={onPress}
          android_ripple={{ color: "#e8e53f" }}
        >
          <Text style={styles.btnText}>{children}</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: "hidden",
    borderRadius: 30,
  },
  buttonInnerContainer: {
    backgroundColor: "#d12b58",
    padding: 8,
    paddingHorizontal: 16,
    elevation: 5,
  },
  btnText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
