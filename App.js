import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sands": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sands-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setRounds(0);
    setGameOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen onGameOver={gameOverHandler} userNumber={userNumber} />
    );
  }

  if (gameOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={rounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <LinearGradient
      colors={[colors.primary700, colors.accent500]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.appContainer}
        imageStyle={styles.bakgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  bakgroundImage: {
    opacity: 0.15,
  },
});
