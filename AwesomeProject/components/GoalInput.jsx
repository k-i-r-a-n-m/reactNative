import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function GoalInput({ onAddGoal, onCancel, visible }) {
  const [text, setText] = useState("");
  const goalInputHandler = (enteredText) => setText(enteredText);
  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.textAreaContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Type a goal"
          onChangeText={goalInputHandler}
          style={styles.textInput}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              color="#58A399"
              onPress={() => {
                onAddGoal(text);
                setText("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#58A399"
              onPress={() => {
                onCancel();
                setText("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textAreaContainer: {
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    flex: 1,
    // paddingVertical: 10,
    borderWidth: 2,
    // marginHorizontal: 40,
    backgroundColor: "#31156b",
  },
  textInput: {
    // flex: 1,
    width: "90%",
    marginHorizontal: 40,
    borderColor: "#e4d0ff",
    borderWidth: 3,
    padding: 16,
    color: "#120438",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
  },
  button: {
    width: "40%",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});
