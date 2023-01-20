import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import GuessLogItem from "../components/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (userNumber == currentGuess) {
      onGameOver(guessRounds.length);
    }
  }, [userNumber, currentGuess, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "Give the true indications", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const rndNumb = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(rndNumb);
    setGuessRounds((currentGuessArray) => [...currentGuessArray, rndNumb]);
  }

  const guesRoundListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Give a Hint
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer} >
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => {
            return (
              <GuessLogItem
                guessRound={guesRoundListLength - index}
                guess={item}
              ></GuessLogItem>
            );
          }}
          keyExtractor={(item, index) => item}
        ></FlatList>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 24,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
