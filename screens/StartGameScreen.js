import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        maxLength={2}
      ></TextInput>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
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

    backgroundColor: "#52063c",
  },
  numberInput: {
    height: 50,
    width: 50,
    color: "#ddb52f",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
    borderRadius: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  buttonContainer: {
    flex: 1,
  },
});
