import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const between = () => {
  const router = useRouter();

  return (
    <View>
      <Text>index</Text>

      <Button
        onPress={() => {
          router.replace("mapView");
        }}
        title="go to map "
        color="#841584"
      />
    </View>
  );
};

export default between;
