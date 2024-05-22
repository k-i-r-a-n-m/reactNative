import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React from "react";
import { deleteRows, dropTable, getAllRows, init } from "../utils/dbService";
import { useEffect } from "react";
import { useState } from "react";

const database = () => {
  const [data, setData] = useState("");
  //   useEffect(() => {
  //     const initializeData = async () => {
  //       const data = await init();
  //       setData(data);
  //     };

  //     initializeData();
  //   }, []);

  useEffect(() => {
    (async () => {
      const dbData = await getAllRows();
      if (dbData.length === 0) {
        const data = await init();
        setData(data);
      } else {
        setData(dbData);
      }
    })();
  }, []);

  const onDeletePress = async () => {
    console.log();
    deleteRows();
    setData(await getAllRows());
  };
  return (
    <>
      <ScrollView>
        <View>
          <Button title="Delete rows" color="#841584" onPress={onDeletePress} />
          <Text>Hello dbService</Text>
          <Text style={{ fontSize: 20 }}>{JSON.stringify(data, null, 2)}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default database;

const styles = StyleSheet.create({});
