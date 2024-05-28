import { Pressable, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams, useFocusEffect } from "expo-router";
import React, { useCallback, useContext, useRef, useState } from "react";
import { Button, FAB } from "react-native-paper";
import { Colors_v1 } from "../Colors/v1";
import PlaceCard from "../components/PlaceCard";
import PlacesList from "../components/PlacesList";
import { FavPlacesContext } from "../Context/FavPlacesContext";
import { useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";

const Home = () => {
  const db = useSQLiteContext();
  const isFocused = useRef(false);

  // Data passed using navigation params
  // const params = useLocalSearchParams();
  // const { places } = useContext(FavPlacesContext);

  const [places, setPlaces] = useState([]);

  // Getting data form the params and storing in the state(in memory)
  // useFocusEffect(
  //   useCallback(() => {
  //     console.log(params);
  //     // if(params?.title && params?.imageUri && params?.place){
  //     //   setFavPlaces((prev)=>([...prev,]))
  //     // }
  //   }, [params])
  // );

  // Getting the data from DB and storing in state(Persistence)
  useFocusEffect(
    useCallback(() => {
      const getDBdata = async () => {
        console.log("usecallback-called");
        const allRows = await db.getAllAsync("SELECT * FROM dummytest");
        setPlaces(
          allRows.map((place) => ({
            ...place,
            coords: JSON.parse(place.coords),
          }))
        );
      };
      getDBdata();
    }, [])
  );

  useEffect(() => {
    (async () => {
      console.log("db--initialized");
      await db.execAsync(
        `CREATE TABLE IF NOT EXISTS dummyTest
           (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            coords TEXT NOT NULL
            );`
      );

      // Initailly All the data
      const allRows = await db.getAllAsync("SELECT * FROM dummytest");
      setPlaces(
        allRows.map((place) => ({
          ...place,
          coords: JSON.parse(place.coords),
        }))
      );

      // for (const row of allRows) {
      //   console.log(row);
      // }

      // db.execAsync(`DROP TABLE IF EXISTS dummyTest;`);
    })();
  }, []);

  console.log("home", places.length);
  return (
    <View style={styles.screen}>
      <PlacesList data={places} />

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
