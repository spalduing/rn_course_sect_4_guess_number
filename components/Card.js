import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";


function Card({children}){
    return <View style={styles.inputContainer}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
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
})