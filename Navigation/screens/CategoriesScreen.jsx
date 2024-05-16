import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React, { useEffect } from "react";

import { CATEGORIES } from "../data/DummyData";
import CategoryGridTile from "../Components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  // NOTE: USE THE LOCAL IP ADDRESS INSEAD OF "localhost"
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const res = await fetch("http://192.168.50.55:5000/CreditItemsResponse");
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  const renderCategoryItem = ({ item }) => {
    const itemOnPress = () =>
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
        category: item,
      });
    return <CategoryGridTile data={item} onPress={itemOnPress} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={CATEGORIES}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f1f1f1",
    gap: 30,
  },
});
