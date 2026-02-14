import React, { useRef, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    StatusBar,
    Alert,
    PermissionsAndroid,
    Platform
} from "react-native"
import ThirdHeader from "../components/ThirdHeader.js"

import {
    Camera,
    useCameraPermission,
    useMicrophonePermission,
    useCameraDevice
} from "react-native-vision-camera"

import { CameraRoll } from "@react-native-camera-roll/camera-roll"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const ScanCamera = () => {

    const device = useCameraDevice("back")
    const { hasPermission, requestPermission } = useCameraPermission()
    const { requestPermission: requestMicPermission } = useMicrophonePermission()

    const cameraRef = useRef(null)

    const [isRecording, setIsRecording] = useState(false)
    const [isAudioEnabled, setIsAudioEnabled] = useState(false) // default OFF
    const [flashEnabled, setFlashEnabled] = useState(false)     // default OFF

    // 🔹 Android Storage Permission
    const requestStoragePermission = async () => {
        if (Platform.OS === "android") {
            if (Platform.Version >= 33) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO
                )
                return granted === PermissionsAndroid.RESULTS.GRANTED
            } else {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                )
                return granted === PermissionsAndroid.RESULTS.GRANTED
            }
        }
        return true
    }

    if (!hasPermission) {
        return (
            <SafeAreaView style={styles.permissionContainer}>
                <View style={styles.permissionBox}>
                    <Text style={styles.permissionTitle}>
                        Camera Permission Required
                    </Text>
                    <TouchableOpacity
                        onPress={requestPermission}
                        style={styles.allowBtn}
                    >
                        <Text style={styles.allowText}>Allow</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    if (!device) {
        return (
            <View style={styles.center}>
                <Text>Camera not available</Text>
            </View>
        )
    }

    const handleRecording = async () => {
        if (!cameraRef.current) return

        try {
            if (!isRecording) {

                const granted = await requestStoragePermission()
                if (!granted) {
                    Alert.alert("Storage permission required")
                    return
                }

                if (isAudioEnabled) {
                    await requestMicPermission()
                }

                setIsRecording(true)

                await cameraRef.current.startRecording({
                    flash: flashEnabled ? "on" : "off",
                    onRecordingFinished: async (video) => {
                        await CameraRoll.save(
                            `file://${video.path}`,
                            { type: "video" }
                        )
                        Alert.alert("Success 🎉", "Video saved to Gallery")
                        setIsRecording(false)
                    },
                    onRecordingError: (error) => {
                        console.log(error)
                        setIsRecording(false)
                    }
                })

            } else {
                await cameraRef.current.stopRecording()
            }

        } catch (error) {
            console.log(error)
            setIsRecording(false)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <ThirdHeader />

            <View style={{ flex: 1 }}>
                <Camera
                    ref={cameraRef}
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                    video={true}
                    audio={isAudioEnabled}
                    torch={flashEnabled ? "on" : "off"}
                />
            </View>

            {/* 🎤 AUDIO TOGGLE (Top Left) */}
            <TouchableOpacity
                style={styles.micButton}
                onPress={() => setIsAudioEnabled(!isAudioEnabled)}
            >
                <Icon
                    name={isAudioEnabled ? "microphone" : "microphone-off"}
                    size={24}
                    color="#fff"
                />
            </TouchableOpacity>

            {/* ⚡ FLASH TOGGLE (Top Right) */}
            <TouchableOpacity
                style={styles.flashButton}
                onPress={() => setFlashEnabled(!flashEnabled)}
            >
                <Icon
                    name={flashEnabled ? "flash" : "flash-off"}
                    size={24}
                    color="#fff"
                />
            </TouchableOpacity>

            {/* 🔴 RECORD BUTTON */}
            <View style={styles.recordContainer}>
                <TouchableOpacity
                    style={[
                        styles.recordButton,
                        { backgroundColor: isRecording ? "red" : "#648DDB" }
                    ]}
                    onPress={handleRecording}
                >
                    <Text style={styles.recordText}>
                        {isRecording ? "Stop" : "Record"}
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default ScanCamera


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },

    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    /* 🎤 MIC BUTTON */
    micButton: {
        position: "absolute",
        top: 90,
        left: 20,
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },

    /* ⚡ FLASH BUTTON */
    flashButton: {
        position: "absolute",
        top: 90,
        right: 20,
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },

    /* 🔴 RECORD BUTTON */
    recordContainer: {
        position: "absolute",
        bottom: 40,
        width: "100%",
        alignItems: "center",
    },

    recordButton: {
        width: 90,
        height: 90,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
    },

    recordText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },

    /* Permission Screen */
    permissionContainer: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },

    permissionBox: {
        width: "90%",
        backgroundColor: "#111",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
    },

    permissionTitle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 20,
    },

    allowBtn: {
        backgroundColor: "#40dc1d",
        padding: 15,
        borderRadius: 12,
        width: "100%",
        alignItems: "center",
    },

    allowText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "700",
    },
})
