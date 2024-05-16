import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import SubText from "../components/SubText";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import GussNum from "../components/GussNum";
import Ionicons from "@expo/vector-icons/Ionicons";

const generateRandomGuess = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let MIN = 1;
let MAX = 100;

export default function GameScreen({ userNumber, setGameOver }) {
  const initialGuess = generateRandomGuess(MIN, MAX);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    MIN = 1;
    MAX = 100;
  }, []);

  useEffect(() => {
    console.log(typeof currentGuess, typeof userNumber);
    if (currentGuess === userNumber) {
      console.log("found the number", currentGuess, userNumber);
      setGameOver(true);
    }
  }, [currentGuess]);

  const nextGuess = (direction) => {
    if (direction === "low") {
      MAX = currentGuess;
    } else if (direction === "high") {
      MIN = currentGuess;
    }
    setCurrentGuess(generateRandomGuess(MIN, MAX));
  };

  return (
    <View style={styles.rootStyle}>
      <Title>Opponent's Guess</Title>
      <GussNum>{currentGuess}</GussNum>
      <Card>
        <SubText>Higher or Lower?</SubText>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <PrimaryButton onPress={() => nextGuess("low")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton onPress={() => nextGuess("high")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootStyle: {
    marginTop: 50,
    flex: 1,
    padding: 24,
    gap: 30,
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    gap: 40,
  },
  btn: {
    flex: 1,
  },
});
