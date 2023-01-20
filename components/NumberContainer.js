import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

function NumberContainer({children}) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    // flex: 1,
    marginTop: 24,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.accent500,
    padding: 24,
  },
  textContainer: {
    fontSize: 32,
    fontFamily: 'open-sands-bold',
    // fontWeight: "bold",
    textAlign: "center",
    color: colors.accent500
  },
});
