import { View, Image, Text, StyleSheet } from "react-native"


const SecendHeader = () => {
    return (
        <View style={styles.reviewheader} >
            <Image source={require("../images/logoweb.png")} style={{ width: 70, height: 70 }} />
            <View>
                <Text style={styles.boldtext} >Room AI Designer</Text>
                <Text>Statements By Srijonchowdhury</Text>
            </View>
        </View>
    )
}
export default SecendHeader

const styles = StyleSheet.create({
    reviewheader: {
        flexDirection: "row",
        alignItems: "center",
    },
    boldtext: {
        fontSize: 17,
        fontWeight: 600
    },
})