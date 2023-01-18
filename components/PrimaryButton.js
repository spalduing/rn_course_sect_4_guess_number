import { Text, View, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        style={({ pressed }) => {
            return pressed
              ? [styles.onPress, styles.buttonInnerContainer]
              : styles.buttonInnerContainer;
          }}
        android_ripple={{ color: "#640233" }}
        onPress={pressHandler}
      >
        <Text style={styles.textButton}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    backgroundColor: "#72063c",
  },
  onPress: {
    color: "#640233",
    opacity: 0.75,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",

  },
});
