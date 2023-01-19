import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={[colors.primary700, colors.accent500]} style={styles.appContainer}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.appContainer}
        imageStyle={styles.bakgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.appContainer} >{screen}</SafeAreaView>
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
