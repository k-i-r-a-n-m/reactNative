import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const mapView = () => {
  const router = useRouter();

  return (
    <View>
      <Text>index</Text>

      <Button
        onPress={() => {
          router.dismissAll({ pathname: "/addPlaces", params: { name: "kiran" } });
        }}
        title="go to index"
        color="#841584"
      />
    </View>
  );
};

export default mapView;

const styles = StyleSheet.create({});
