import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native"
const Button = ({name,date}) => {
    return (

        <TouchableOpacity style={styles.button} >
            <View style={styles.row}>
                <Icon name={name} size={20} color="#6e6e6e" />
                <Text style={styles.text}>{date}</Text>
            </View>
        </TouchableOpacity >

    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: "#1A8EF9",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 30,
        alignSelf: "flex-start",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: "#6e6e6e",
    },
    text: {
        color: "#1A8EF9",
        fontWeight: "500",
    },

})