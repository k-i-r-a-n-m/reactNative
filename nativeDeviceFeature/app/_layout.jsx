import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

const appLayout = () => {
  return (
    <>
      <PaperProvider>
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
      </PaperProvider>
    </>
  );
};

export default appLayout;

const styles = StyleSheet.create({});
