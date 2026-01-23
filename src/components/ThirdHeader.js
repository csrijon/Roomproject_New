import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
const ThirdHeader = () => {
    return (
        <View style={styles.topBar}>
            <View style={styles.logoWrap}>
                <Image style={styles.logo} source={require("../images/logoweb.png")} />
                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.appName}>RoomAI Designer</Text>
                </View>
            </View>

            <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={22} color="#00C29B" />
            </TouchableOpacity>
        </View>
    )
}

export default ThirdHeader

const styles = StyleSheet.create({
     topBar: {
        backgroundColor: "#101820",
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    logoWrap: {
        flexDirection: "row",
        alignItems: "center",
    },
    appName: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "600",
    },
       logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    
})