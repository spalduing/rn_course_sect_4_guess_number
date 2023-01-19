import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: colors.accent500,
  },
});
