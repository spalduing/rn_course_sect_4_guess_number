import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

function GuessLogItem({ guessRound, guess }) {
  return (
    <View style={styles.itemList}>
      <Text style={styles.itemText}>#{guessRound}</Text>
      <Text style={styles.itemText}> {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    width: '100%',
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: colors.primary800,
    backgroundColor: colors.accent500,

    elevation: 4,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
  },
  itemText: {
    fontFamily: "open-sands",
  },
});
