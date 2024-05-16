import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import SubText from "../components/SubText";
import Card from "../components/Card";

export default function ({ onPickNumber }) {
  const [enteredNum, setEnteredNum] = useState("");

  const textFieldHandler = (e) => {
    setEnteredNum(e);
  };

  const resetHandler = () => {
    setEnteredNum("");
  };

  const confirmHandler = () => {
    const num = parseInt(enteredNum);
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert("Error!", "Number must be between 0-99", [
        { text: "OK", onPress: resetHandler },
      ]);
    } else {
      // console.log(enteredNum);
      onPickNumber(enteredNum);
    }
  };
  return (
    <>
      <View style={styles.rootStyles}>
        <Title>Guess My Number</Title>
        <Card>
          <SubText>Enter a Number</SubText>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            onChangeText={textFieldHandler}
            value={enteredNum}
          />
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.btn}>
              <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootStyles: {
    marginTop: 100,
    flex: 1,
  },

  input: {
    fontSize: 50,
    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    textAlign: "center",
    width: 100,
    color: "yellow",
    alignSelf: "center",
  },
  btn: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-between",
  },
});
