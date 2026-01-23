import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text, StyleSheet, StatusBar } from "react-native";
import { useEffect } from "react";

const Launchpage = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("SignUpScreen")
        },1000)
        clearTimeout();
    })

    return (
        <SafeAreaView style={styles.mainlanuchview}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require("../images/logoweb.png")}
                />
                <Text style={styles.text}>From HP Edit Enterprise</Text>
            </View>

        </SafeAreaView>
    );
};

export default Launchpage;

const styles = StyleSheet.create({
    mainlanuchview: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
    text: {
        fontSize: 17,
        fontWeight: "500",
        color: "#000",
    },
});
