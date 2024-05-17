import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";
import { useCallback } from "react";

const index = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  // console.log(params);

  useFocusEffect(
    useCallback(() => {
      console.log(params);
    }, [params])
  );

  return (
    <View>
      <Text>index</Text>

      <Button
        onPress={() => {
          router.navigate("addPlaces");
        }}
        title="Add Places"
        color="#841584"
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
