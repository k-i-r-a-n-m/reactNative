import React from "react";
import Title from "../components/Title";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({ onStartAgain }) {
  return (
    <View style={styles.rootStyle}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>X </Text>
        rounds to guess the number
        <Text style={styles.highlight}> Y</Text>.
      </Text>
      <PrimaryButton onPress={onStartAgain}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  imageContainer: {
    borderRadius: 200,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
