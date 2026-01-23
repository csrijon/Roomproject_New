import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CheckyourEmail = ({ navigation,route }) => {

    // const {usermail} = route.params;
    

    const [code, setCode] = useState(["", "", "", "", ""]);

    const otphandeler = (index, value) => {
        let fullcode = [...code]
        fullcode[index] = value
        setCode(fullcode)
        console.log(fullcode);
    }

    const buttonhandeler = () => {
        return code.every((item) => item !== "");
    };

    // const sendotpverification =async()=>{
    //      try {
    //         let response= await fetch("http://10.140.22.17:3000/otpchecker",{
    //             method:"POST",
    //             headers:{
    //                 "Content-Type":"application/json"
    //             },
    //             body:JSON.stringify({
    //                 usermail: usermail,
    //                 otp:code.join("")
    //             })
    //         })
    //         let data = await response.json();
    //         console.log(data)
    //         if(!response.ok){
    //             return
    //         }
    //         navigation.navigate("PasswordReset")

    //      } catch (error) {
    //         console.log("error", error)
    //      }
    // }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            {/* Back Button */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => (navigation.goBack())}
            >
                <MaterialIcons name="chevron-left" size={29} color="#000" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Check your email</Text>

            {/* Description */}
            <Text style={styles.description}>
                {/* We sent an OTP <Text style={styles.bold}>{usermail}</Text> */}
            </Text>

            <Text style={styles.subDescription}>
                {/* enter 5 digit code that mentioned in the email */}
                 is Mail.
            </Text>

            {/* 5 Code Boxes */}
            <View style={styles.codeRow}>
                {code.map((item, index) => (
                    <TextInput
                        key={index}
                        value={item}
                        keyboardType="numeric"
                        keyboardAppearance="light"
                        onChangeText={(value) => {
                            otphandeler(index, value)
                        }}
                        style={styles.codeBox} maxLength={1} />
                ))}
            </View>

            {/* Verify Button */}
            <TouchableOpacity
                style={[styles.verifyBtn, buttonhandeler() ? { backgroundColor: "#648DDB" } : { backgroundColor: "#C9D9F8" }]}
                onPress={()=>sendotpverification()}

            >
                <Text style={styles.verifyText}>Verify Code</Text>
            </TouchableOpacity>

            {/* Resend text */}
            <View style={styles.resendRow}>
                <Text style={styles.resendNormal}>Haven’t got the email yet?</Text>
                <Text style={styles.resendLink}> Resend email</Text>
            </View>
        </SafeAreaView>
    )
}

export default CheckyourEmail;


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
        fontSize: 20,
        fontWeight: "700",
        color: "#1E1E1E",
        marginBottom: 20,
        lineHeight: 20,
        letterSpacing: 0.5,
    },

    description: {
        fontSize: 16,
        color: "#9A9A9A",
        lineHeight: 20,
    },

    bold: {
        fontWeight: "600",
        color: "#000",
    },

    subDescription: {
        fontSize: 14,
        color: "#9A9A9A",
        marginTop: 5,
        marginBottom: 25,
    },

    codeRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
    },

    codeBox: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#E5E5E5",
        textAlign: "center",
        fontSize: 20,
        backgroundColor: "#FFF",
        color: "#000",
    },

    verifyBtn: {
        backgroundColor: "#C9D9F8",
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 25,
    },

    verifyText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "Bold",
    },

    resendRow: {
        flexDirection: "row",
        justifyContent: "center",
    },

    resendNormal: {
        fontSize: 16,
        color: "#9A9A9A",
        fontWeight: "semibold"
    },

    resendLink: {
        fontSize: 16,
        color: "#3578E5",
        fontWeight: "semibold",
    },
})