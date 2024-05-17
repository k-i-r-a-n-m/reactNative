import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";
import { useCallback } from "react";

const addPlaces = () => {
  const router = useRouter();
//   const params = useLocalSearchParams();

//   useFocusEffect(
//     useCallback(() => {
//       console.log(params);
//     }, [params])
//   );

  return (
    <View>
      <Text>index</Text>

      <Button
        onPress={() => {
          router.navigate("between");
        }}
        title="go to map "
        color="#841584"
      />
    </View>
  );
};

export default addPlaces;

const styles = StyleSheet.create({});
