import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageViewer = () => {
  return (
    <>
      <View style={styles.previewContainer}>
        <Image src={image} style={styles.image} />
      </View>

      <IconButton
        size={20}
        text={"Take a Picture"}
        name="camera"
        // color="green"
        onPress={pickImage}
        style={styles.btn}
        containerStyle={{ borderRadius: 10 }}
      />
    </>
  );
};

export default ImageViewer;

const styles = StyleSheet.create({});
