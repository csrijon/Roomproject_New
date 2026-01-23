import { SafeAreaView } from "react-native-safe-area-context"
import { View, TouchableOpacity, StyleSheet, Text, StatusBar } from "react-native"
import ThirdHeader from "../components/ThirdHeader.js"

import { Camera, useCameraPermission, useCameraDevice } from "react-native-vision-camera"


const ScanCamera = () => {
    const device = useCameraDevice("back")
    const { hasPermission, requestPermission } = useCameraPermission()


    if (!hasPermission) {
        return (
            <SafeAreaView style={Styles.permissionContainer}>

                <View style={Styles.permissionBox}>
                    <Text style={Styles.permissionTitle}>
                        Camera Access Needed
                    </Text>

                    <Text style={Styles.permissionSub}>
                        We need camera permission to continue
                    </Text>

                    <TouchableOpacity
                        onPress={requestPermission}
                        style={Styles.allowBtn}
                    >
                        <Text style={Styles.allowText}>Allow</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.denyBtn}>
                        <Text style={Styles.denyText}>Deny</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
    if (device == null) {
        return (
            <View><Text>Camera is missing</Text></View>

        )
    }

    return (
        <SafeAreaView style={Styles.maincontainer} >
            <ThirdHeader />
            <StatusBar barStyle="light-content" backgroundColor="#101820" />
            {/* <View style={Styles.buttoncontainer} > */}
            <View style={{ flex: 1 }}>
                <Camera
                    device={device}
                    isActive={true}
                    style={StyleSheet.absoluteFill}
                    photo={true}
                />
            </View>

            {/* </View> */}
            <View style={Styles.buttoncontainer} >
                <TouchableOpacity style={Styles.button} >
                    <Text style={Styles.buttonText} >Capture</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ScanCamera
const Styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        // backgroundColor: "#000", 
        position: "relative"
    },
    campic: {
        backgroundColor: "#ffffff"
    },
    buttoncontainer: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#648DDB",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 111111111,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    permissionContainer: {
        flex: 1,
        // backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },

    permissionBox: {
        width: "85%",
        backgroundColor: "#111",
        borderRadius: 16,
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: "center",
    },

    permissionTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 8,
    },

    permissionSub: {
        color: "#aaa",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 25,
    },

    allowBtn: {
        width: "100%",
        paddingVertical: 14,
        borderRadius: 10,
        backgroundColor: "#40dc1dff",
        alignItems: "center",
        marginBottom: 12,
    },

    allowText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
    },

    denyBtn: {
        width: "100%",
        paddingVertical: 14,
        borderRadius: 10,
        backgroundColor: "#222",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#444",
    },

    denyText: {
        color: "#fff",
        fontSize: 16,
    },

});
