import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const data = [
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
  "hello",
];
export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [goalList, setGoalList] = useState([]);

  const addGoalhandler = (text) => {
    setGoalList((prev) => [...prev, { text, id: Math.random().toString() }]);
    closeModal();
  };

  const deleteGoalHandler = (id) => {
    setGoalList((prev) => prev.filter((goal) => goal.id !== id));
  };

  const startAddGoalHandler = () => {
    setModalVisibility(true);
  };

  function closeModal() {
    setModalVisibility(false);
  }

  console.log(goalList);
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalVisibility}
          onAddGoal={addGoalhandler}
          onCancel={closeModal}
        />
        <View style={styles.goalsListContainer}>
          <FlatList
            data={goalList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GoalItem
                text={item.text}
                id={item.id}
                onPress={deleteGoalHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#1e0858",
    color: "white",
    paddingVertical: 50,
    paddingHorizontal: 20,
    flexDirection: "column",

    gap: 10,
    flex: 1,
  },

  goalsListContainer: {
    // flexDirection: "column",
    flex: 1,
    // backgroundColor:'black',
    // borderWidth:2
  },
});
