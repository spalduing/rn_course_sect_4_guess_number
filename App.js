import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#52063c", "#ddb52f"]} style={styles.appContainer}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.appContainer}
        imageStyle={styles.bakgroundImage}
        resizeMode="cover"
      >
        <StartGameScreen />
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
