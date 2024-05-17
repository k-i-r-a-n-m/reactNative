import { Pressable, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Button, FAB } from "react-native-paper";
import { Colors_v1 } from "../Colors/v1";

const Home = () => {
  const params = useLocalSearchParams();

  console.log(params);
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <Pressable
        onPress={() => {
          router.navigate("/addPlaces");
        }}
      >
        <Text>Go to Add places Screen</Text>
      </Pressable>

      {router.canGoBack() && (
        <Pressable onPress={() => router.back()}>
          <Text>Go Back</Text>
        </Pressable>
      )}

      <Button
        icon="camera"
        mode="contained"
        onPress={() => router.navigate("/addPlaces")}
        buttonColor="white"
        textColor="red"
        rippleColor={"purple"}
        loading={true}
      >
        Press me
      </Button>

      <Button
        icon="camera"
        mode="contained"
        onPress={() => router.navigate("/addPlaces")}
        // buttonColor="white"
        // textColor="red"
        rippleColor={"purple"}
        loading={false}
        style={{ width: 200, alignSelf: "center", marginVertical: 20 }}
      >
        Press me
      </Button>

      <FAB
        icon="plus"
        style={styles.fab}
        // color="white"
        onPress={() => router.navigate("/addPlaces")}
        // mode="flat"
        color="white"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors_v1.primaryBlue,
  },
});
