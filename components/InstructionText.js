import { StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.accent500,
  },
});
