import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function validateNumber() {
    const choosedNumber = parseInt(enteredNumber);

    if (isNaN(choosedNumber) || choosedNumber <= 0 || choosedNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "The number x must be between 1 < x <= 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(choosedNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={validateNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    padding: 16,
    marginTop: 12,
    marginHorizontal: 24,
    borderRadius: 8,
    borderBottomWidth: 2,
    elevation: 4,
    alignItems: "center",

    // IOS ONLY //
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,

    backgroundColor: colors.primary800,
  },

  numberInput: {
    height: 50,
    width: 50,
    color: colors.accent500,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
    borderRadius: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent500,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  buttonContainer: {
    flex: 1,
  },
});
