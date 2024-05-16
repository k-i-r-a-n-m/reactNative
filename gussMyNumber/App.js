import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import Loading from "./components/Loading";

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    "roboto-300": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
    game: require("./assets/fonts/Jersey15-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  const onPickNumber = (num) => {
    console.log("picked");
    setUserNumber(parseInt(num));
  };

  const restartGame = () => {
    setUserNumber("");
    setGameOver(false);
  };

  let screen = <StartGameScreen onPickNumber={onPickNumber} />;

  if (userNumber && !gameOver) {
    screen = <GameScreen userNumber={userNumber} setGameOver={setGameOver} />;
  }

  if (gameOver) {
    screen = <GameOverScreen onStartAgain={restartGame} />;
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={["#3b021f", "#dbb403"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imgBackground}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imgBackground: {
    opacity: 0.15,
  },
});
