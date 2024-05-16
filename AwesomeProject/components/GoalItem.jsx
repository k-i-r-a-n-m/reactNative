import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ text, id, onPress }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        // onPress={() => onPress(id)} android_ripple={{ color: "red" }}>
        onPress={onPress.bind(this, id)}
        android_ripple={{ color: "red" }}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalText: {
    fontSize: 20,
    color: "white",
    padding: 10,
  },
  goalItem: {
    backgroundColor: "purple",
    margin: 10,
    borderRadius: 6,
  },
});
