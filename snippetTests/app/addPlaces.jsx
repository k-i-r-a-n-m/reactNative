import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { useSQLiteContext } from "expo-sqlite";

const addPlaces = () => {
  const router = useRouter();
  const db = useSQLiteContext()
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
