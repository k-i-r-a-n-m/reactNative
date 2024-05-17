import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const appLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="addPlaces" />
        <Stack.Screen name="between" />
        <Stack.Screen name="mapView" />
      </Stack>
    </>
  );
};

export default appLayout;

const styles = StyleSheet.create({});
