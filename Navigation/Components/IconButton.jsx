import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, size, color, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && { opacity: 0.7 }}
      onPress={onPress}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
