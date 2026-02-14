import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SetNewPassword = ({ navigation }) => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const handelscureTextEntryhandler = () => {
        setSecureTextEntry(!secureTextEntry);
    }


    const updatepassword = async () => {
        if (!password.trim() || !confirmPassword.trim()) {
            console.log("password can not empty")
        }
        if (password.length < 6) {
            console.log("you can write 6 letter")
        }
        if (password !== confirmPassword) {
            console.log("password not match")
        }

        let response = await fetch("http://10.140.21.238:3000/updatepass",{
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
               passowrds:password
            })
        })

        let data = await response.json();
        console.log(data)

        return response.ok ? navigation.replace("LoginScreen") : console.log("password update failed")

    }


    return (
        <SafeAreaView style={styles.container}>

            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <MaterialIcons name="chevron-left" size={29} color="#000" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Set a new password</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
                Create a new password. Ensure it differs from{"\n"}
                previous ones for security
            </Text>

            {/* Password Label */}
            <Text style={styles.label}>Password</Text>

            {/* Password Input */}
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your new password"
                    placeholderTextColor="#B3B3B3"
                    maxLength={8}
                    value={password}
                    secureTextEntry={secureTextEntry}
                    onChangeText={(value) => {
                        setPassword(value)
                    }}
                />
                <TouchableOpacity onPress={handelscureTextEntryhandler} >
                    <MaterialIcons name={secureTextEntry ? "visibility-off" : "visibility"} size={22} color="#B3B3B3" />
                </TouchableOpacity>

            </View>

            {/* Confirm Password Label */}
            <Text style={styles.label}>Confirm Password</Text>

            {/* Confirm Password Input */}
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder="Re-enter password"
                    placeholderTextColor="#B3B3B3"
                    maxLength={8}
                    value={confirmPassword}
                    secureTextEntry={secureTextEntry}
                    onChangeText={(value) => { setConfirmPassword(value), console.log("confirm password value:", value); }}
                />
                <TouchableOpacity onPress={handelscureTextEntryhandler} >
                    <MaterialIcons
                        name={secureTextEntry ? "visibility-off" : "visibility"}
                        size={22}
                        color="#B3B3B3" />
                </TouchableOpacity>
            </View>

            {/* Update Button */}
            <TouchableOpacity
                style={[
                    styles.updateBtn,
                    password && confirmPassword
                        ? { backgroundColor: "#648DDB" }
                        : { backgroundColor: "#C9D9F8" }
                ]}
                onPress={updatepassword}
            >
                <Text style={styles.updateText}>Update Password</Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
};

export default SetNewPassword;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "#FFFFFF",
    },

    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#EFEFEF",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25,
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#000",
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 15,
        color: "#9A9A9A",
        marginBottom: 30,
    },

    label: {
        fontSize: 15,
        fontWeight: "600",
        color: "#000",
        marginBottom: 8,
    },

    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E5E5E5",
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 20,
    },

    input: {
        flex: 1,
        fontSize: 16,
        color: "#000000",
    },

    updateBtn: {
        backgroundColor: "#C9D9F8",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },

    updateText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
});
