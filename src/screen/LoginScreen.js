import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { GOOGLE_CLIENT_ID } from '@env';


const LoginScreen = ({ navigation }) => {

  const [logemail, setlogemail] = useState("")
  const [logpassword, setlogpassword] = useState("")
  const [logincolor, setlogcolor] = useState(false)
  const [loginerror, setlogerror] = useState(false)
  const [hidepass, sethidepass] = useState(true)

  const onchangeemail = (text) => {
    setlogemail(text)
    console.log(text)
  }
  const onchangepassword = (text) => {
    setlogpassword(text)
    console.log(text)
  }
  // GoogleSignin.configure({
  //      webClientId:GOOGLE_CLIENT_ID,
  // })

  // const GoogleSign = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();

  //     const userInfo = await GoogleSignin.signIn();
  //     console.log("Google User Info:", userInfo);
  //     console.log("Google User:", userInfo.user);
  //     console.log("ID Token:", userInfo.idToken);

  //     navigation.replace("TabsScreen");

  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log("User cancelled Google Sign-In");
  //     }
  //     else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log("Sign-in already in progress");
  //     }
  //     else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log("Play services not available");
  //     }
  //     else {
  //       console.log("Google Sign-In error:", error);
  //     }
  //   }
  // };

  const loggedin = async () => {
    try {
      const response = await fetch("http://10.140.21.238:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          usermail: logemail,
          loginpass: logpassword
        })
      })
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        console.log("login failed")
        setlogcolor(true)
        setlogerror(true)
        return
      }
      navigation.replace("DrawerScreen")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {/* Email Label */}
      <Text style={styles.label}>Your Email</Text>

      {/* Email Input */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="youmail@gmail.com"
          placeholderTextColor="#B3B3B3"
          keyboardType="email-address"
          value={logemail}
          onChangeText={onchangeemail}
          autoCorrect={false}
          autoCapitalize="none"

        />
      </View>

      {/* Password Label */}
      <Text style={styles.label}>Password</Text>

      {/* Password Input With Error (Red Border) */}
      <View style={[styles.inputRow, styles.errorInput]}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#B3B3B3"
          secureTextEntry={hidepass ? true : false}
          value={logpassword}
          onChangeText={onchangepassword}
        />
        <MaterialIcons onPress={() => sethidepass(!hidepass)} name={hidepass ? "visibility-off" : "visibility"} size={22} color="#B3B3B3" />
      </View>

      {/* Wrong Password + Forgot */}
      <View style={styles.rowBetween}>
        <Text style={[styles.errorText, { color: logincolor ? "#d21010" : "#D9D9D9" }]}>{loginerror ? "Wrong password" : ""}</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Forgetpage")} >
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity onPress={loggedin} style={[styles.continueBtn, { backgroundColor: logemail && logpassword ? "#648DDB" : "#c55050ff" }]}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      {/* Login with Apple */}
      <TouchableOpacity style={styles.socialBtn}>
    <FontAwesome5 name="github" size={22} color="black" />

        <Text style={styles.socialText}>Login with Apple</Text>
      </TouchableOpacity>

      {/* Login with Google */}
      <TouchableOpacity
        onPress={() => GoogleSign()}
        style={styles.socialBtn}>
        {/* <FontAwesome name="google" size={22} color="#DB4437" /> */}
        <Image style={{ width: 24, height: 24 }} source={require("../images/gogolelogo.png")} />
        <Text style={styles.socialText}>Login with Google</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={styles.signupLink}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;



// ---------------------- STYLES ------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
    marginTop: 10,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },

  errorInput: {
    borderColor: "#E5E5E5",
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -10,
    marginBottom: 20,
  },

  errorText: {
    color: "#D9D9D9",
    fontSize: 13,
  },

  forgotText: {
    color: "#3578E5",
    fontSize: 13,
    fontWeight: "500",
  },

  continueBtn: {
    backgroundColor: "#648DDB",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 25,
  },

  continueText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DDDDDD",
  },

  orText: {
    marginHorizontal: 10,
    color: "#999",
    fontSize: 14,
  },

  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  socialText: {
    fontSize: 15,
    marginLeft: 10,
    color: "#000",
    fontWeight: "500",
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  signupText: {
    color: "#999",
    fontSize: 14,
  },

  signupLink: {
    color: "#3578E5",
    fontSize: 14,
    fontWeight: "600",
  },
});
