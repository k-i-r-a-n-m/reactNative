import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { FavPlacesProvider } from "../Context/FavPlacesContext";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";

const appLayout = () => {
  return (
    <>
      <SQLiteProvider
        databaseName="test.db"
        onError={(e) => console.log("error", e)}
      >
        {/* <FavPlacesProvider> */}
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
              // initialParams={{ name: "kiran" }}
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
        {/* </FavPlacesProvider> */}
      </SQLiteProvider>
    </>
  );
};

export default appLayout;

const styles = StyleSheet.create({});
