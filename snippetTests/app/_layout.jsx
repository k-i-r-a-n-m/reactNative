import { SQLiteProvider, useSQLiteContext, SQLiteDatabase } from "expo-sqlite";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const appLayout = () => {
  return (
    <>
      <SQLiteProvider
        databaseName="test.db3"
        onError={(e) => console.log("error", e)}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="addPlaces" />
        <Stack.Screen name="between" />
        <Stack.Screen name="mapView" />
        <Stack.Screen name="database" />
      </SQLiteProvider>
      <Stack></Stack>
    </>
  );
};

export default appLayout;

const styles = StyleSheet.create({});
