import React, { Children } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const IconButton = ({
  name,
  size,
  color,
  text,
  onPress,
  style,
  containerStyle,
}) => {
  return (
    <View style={[containerStyle]}>
      <Pressable
        android_ripple={{ color: "#f30606c2" }}
        style={({ pressed }) =>
          pressed
            ? [styles.presasbleBtn, styles.pressed, style]
            : [styles.presasbleBtn, style]
        }
        onPress={onPress}
      >
        <FontAwesome5 name={name} size={size} color={color} />
        <Text>{text}</Text>
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  btnContainer: {
    overflow: "hidden",
  },
  presasbleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.5,
  },
});
