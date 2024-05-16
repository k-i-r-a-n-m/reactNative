import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const appLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "All Places",
          }}
        />
        <Stack.Screen
          name="addPlaces"
          options={{
            title: "Add Fav❤ places",
          }}
        />
        <Stack.Screen
          name="mapView"
          options={{
            title: "Map",
          }}
        />
      </Stack>
    </>
  );
};

export default appLayout;

const styles = StyleSheet.create({});
