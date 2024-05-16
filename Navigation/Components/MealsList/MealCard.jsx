import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MealCard = ({ data, onPress, style }) => {
  const navigation = useNavigation();

  const onClickMealCardHandler = () => {
    navigation.navigate("MealReceipe", { data });
  };

  return (
    <View style={[styles.cardContainer, style?.cardContainer]}>
      <Pressable
        style={[styles.pressable, style?.pressabl]}
        android_ripple={{ color: "#e6e6e66c", foreground: true }}
        onPress={onClickMealCardHandler}
      >
        <Image style={[styles.image, style?.image]} src={data.imageUrl} />
        <View style={[styles.textContainer, style?.textContainer]}>
          <Text style={[styles.text, styles.durationText, style?.subtext1]}>
            "{data.duration}" Min. to prepare
          </Text>
          <Text style={[styles.text, style?.subtext2]}>{data.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 400,
    borderRadius: 10,
    overflow: "hidden",
    // borderWidth: 1,
    margin: 20,
    elevation: 5,
    zIndex: 999,
    backgroundColor: "white",
  },

  pressable: {
    flex: 1,
    elevation: 5,
  },
  image: {
    height: 300,
  },

  durationText: {
    fontStyle: "italic",
  },

  textContainer: {
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
