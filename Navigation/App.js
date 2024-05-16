import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { Button, StatusBar } from "react-native";
import MealReceipeScreen from "./screens/MealReceipeScreen";
import IconButton from "./Components/IconButton";
import FavouriteScreen from "./screens/FavouriteScreen";
import { FavouriteContextProvider } from "./store/context/FavouriteCntx";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#ffae00" },
          headerTintColor: "#ffffff",
          drawerContentStyle: {
            margin: 10,
          },
          drawerActiveBackgroundColor: "#ffffc2",
          drawerActiveTintColor: "#ffae00",
          sceneContainerStyle: {
            backgroundColor: "#ffffc2",
          },
        }}
      >
        <Drawer.Screen
          name="catagories"
          component={CategoriesScreen}
          options={{ title: "All Catagory" }}
        />
        <Drawer.Screen
          name="favourite"
          component={FavouriteScreen}
          options={{ title: "Favourites" }}
        />
      </Drawer.Navigator>
    </>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: { backgroundColor: "#ffffc2" },
              headerStyle: { backgroundColor: "#ffae00" },
              headerTintColor: "#ffffff",
            }}
          >
            <Stack.Screen
              name="category"
              component={DrawerNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealReceipe" component={MealReceipeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
};

export default App;
