import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const icon = ({ navigation }) => {
    return (
        <View style={styles.lastcontainer}>
            <Text style={styles.heading}>Tap to Explore</Text>

            <View style={styles.row}>
                <View style={styles.boxes}>
                    <View style={styles.circle} ><Image source={require("../images/scan.png")} style={styles.icon} /></View>
                    <Text style={styles.boxText}>Scan Your Room</Text>
                </View>

                <View style={styles.boxes}>
                    <View style={styles.circle} ><Image source={require("../images/2nd logos.png")} style={styles.icon} /></View>
                    <Text style={styles.boxText}>Customize{"\n"}Style & Furniture</Text>
                </View>

                <View style={styles.boxes}>
                    <View style={styles.circle} ><Image source={require("../images/3rd logos.png")} style={styles.icon} /></View>
                    <Text style={styles.boxText}>Visualize in{"\n"}3D & AR</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Tellmeus")} >
                <LinearGradient

                    colors={["#79B4E1", "#A7E7C5"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Start Designing Your Space</Text>

                </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.footer}>Developed by Digital Edge 360 Consultancy</Text>
        </View>
    )
}

export default icon

const styles = StyleSheet.create({
    lastcontainer: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 25,
    },

    heading: {
        fontSize: 18,
        fontWeight: "400",
        color: "#000",
        marginBottom: 25,
    },

    row: {
        flexDirection: "row",
        // justifyContent: "space-between",
        gap: 10,
        alignItems: "center",
        width: "100%",
        marginBottom: 30,
    },

    boxes: {
        width: "33%",
        alignItems: "center",
    },

    icon: {
        width: 55,
        height: 55,
        marginBottom: 10,
        resizeMode: "contain",
    },
    circle: {
        width: 80,
        height: 80,
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    }
    ,
    boxText: {
        fontSize: 12.5,
        fontWeight: "500",
        textAlign: "center",
        color: "#333",
        lineHeight: 16,
    },

    btn: {
        width: "100%",
        backgroundColor: "red",
        paddingVertical: 14,
        paddingHorizontal: 14,
        borderRadius: 30,
        marginBottom: 10,
    },

    btnText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center",
    },

    footer: {
        fontSize: 11,
        color: "#888",
        marginTop: 8,
    },
});
