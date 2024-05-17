import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import { Marker, MapView } from "react-native-maps";
import MapView, { Marker } from "react-native-maps";

const MapViewer = ({ router }) => {
  const [region, setRegion] = useState(null);

  const mapOnPressHandler = (e) => {
    console.log(e.nativeEvent);
    setRegion({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    });
  };

  return (
    <MapView style={styles.map} onPress={mapOnPressHandler}>
      {region && <Marker title="Picked location" coordinate={region} />}
    </MapView>
  );
};

export default MapViewer;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
