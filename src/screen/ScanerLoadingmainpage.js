import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import SecendHeader from "../components/SecendHeader.js";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

const ScanerLoadingmainpage = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            console.log("screen is loaded")
            navigation.replace("ScanCamera")
        }, 2000)
        clearTimeout()
    })
    return (
        <SafeAreaView style={styles.mainscaner}>
            <SecendHeader />

            {/* Title */}
            <View style={styles.genpage}>
                <Text style={styles.gentext}>Generating Your Dream Room</Text>
            </View>

            {/* Loader */}
            <LottieView
                source={require("../images/mainloader.json")}
                autoPlay
                loop
                style={styles.loader}
            />

            {/* Footer */}
            <View style={styles.seclastbox}>
                <Text style={styles.seclasttext}>Powered BY HP Edit Enterprise</Text>
            </View>
        </SafeAreaView>
    );
};

export default ScanerLoadingmainpage;

const styles = StyleSheet.create({
    mainscaner: {
        flex: 1,
        backgroundColor: "#ffffff",
        position: "relative",
    },

    genpage: {
        marginTop: 25,
        alignItems: "center",
    },

    gentext: {
        fontSize: 22,
        fontWeight: "700",
        textAlign: "center",
        color: "#222",
        letterSpacing: 0.5,
    },

    loader: {
        width: 260,
        height: 260,
        alignSelf: "center",
        marginTop: 60,   // SAME visual position, cleaner value
    },

    seclastbox: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        alignItems: "center",
    },

    seclasttext: {
        fontSize: 14,
        fontWeight: "500",
        color: "#555",
    },
});
