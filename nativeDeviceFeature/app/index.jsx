import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import React from "react";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Pressable
        onPress={() => {
          router.navigate('/addPlaces');
        }}
      >
        <Text>Go to Add places Screen</Text>
      </Pressable>
      {router.canGoBack() && (
        <Pressable onPress={() => router.back()}>
          <Text>Go Back</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
