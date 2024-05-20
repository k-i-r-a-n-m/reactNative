import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Button, Card } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const PlaceCard = ({ title, imageUri, place }) => {
  return (
    <Card style={styles.cardContiner}>
      <Card.Title
        title={title}
        subtitle={JSON.stringify(place)}
        left={LeftContent}
      />
      {/* <Card.Content>
        <Text variant="titleLarge">{JSON.stringify({ name: "kiran" })}</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content> */}

      <Card.Cover source={{ uri: imageUri }} />

      {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
    </Card>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  cardContiner: {
    margin: 10,
  },
});
