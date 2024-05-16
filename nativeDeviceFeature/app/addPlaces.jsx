import React, { useState } from "react";
import { router } from "expo-router";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { Colors_v1 } from "../Colors/v1";
import IconButton from "../components/IconButton";
import ImagePreview from "../components/ImagePreview";
import { getGoogleMapUri } from "../utils/common";

const addPlaces = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      //   mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    setLocation(location);
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.placeLabel}>Place:</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
      />

      {/* <ImagePreview uri={image} /> */}

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

      <View style={styles.previewContainer}>
        {location ? (
          <Image
            source={{
              uri: getGoogleMapUri({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
              }),
            }}
            style={styles.image}
          />
        ) : (
          <Text>No Location is picked</Text>
        )}
      </View>

      <View style={styles.btnContainer}>
        <IconButton
          size={20}
          text={"Get Location"}
          name="map-marker-alt"
          color={Colors_v1.red300}
          onPress={getLocation}
          style={styles.btn}
          containerStyle={{ borderRadius: 10 }}
        />

        <IconButton
          size={20}
          text={"View Map"}
          name="map-marked-alt"
          color="green"
          onPress={() => Alert.alert("view map clicked!")}
          style={styles.btn}
          containerStyle={{ borderRadius: 10 }}
        />
      </View>
    </View>
  );
};

export default addPlaces;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    backgroundColor: Colors_v1.secondaryPeach,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 1,
    borderColor: "none",
  },
  placeLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
  previewContainer: {
    marginVertical: 10,
    height: 300,
    backgroundColor: Colors_v1.primaryRed,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  image: { height: "100%", width: "100%" },
});
