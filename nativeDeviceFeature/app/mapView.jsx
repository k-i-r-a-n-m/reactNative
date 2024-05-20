import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
// import { Marker, MapView } from "react-native-maps";
import MapView, { Marker } from "react-native-maps";
import { useEffect } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { Button, IconButton } from "react-native-paper";
import { useCallback } from "react";

const MapViewer = () => {
  const [region, setRegion] = useState(null);
  const navigation = useNavigation();
  const router = useRouter();

  const saveOnPressHandler = useCallback(() => {
    if (!region) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by tapping on the map) first!"
      );
      return;
    }

    router.navigate({ pathname: "/addPlaces", params: region });
  }, [region]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="content-save"
          size={24}
          iconColor="black"
          onPress={saveOnPressHandler}
        />
      ),
    });
  }, [region]);

  const mapOnPressHandler = (e) => {
    // console.log(e.nativeEvent);
    setRegion({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    });
  };

  return (
    <>
      <MapView style={styles.map} onPress={mapOnPressHandler}>
        {region && <Marker title="Picked location" coordinate={region} />}
      </MapView>
    </>
  );
};

export default MapViewer;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
