import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { FavPlacesProvider } from "../Context/FavPlacesContext";

const appLayout = () => {
  return (
    <>
      <FavPlacesProvider>
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
      </FavPlacesProvider>
    </>
  );
};

export default appLayout;

const styles = StyleSheet.create({});
