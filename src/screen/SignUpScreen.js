import React, { useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar, Alert
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SignUpScreen = ({ navigation }) => {

  const [password, showpassword] = useState(true)
  const [enterpass, updateenterpass] = useState(true)
  const [name, updatename] = useState("")
  const [email, setemail] = useState("")
  const [userpass, setuserpass] = useState("")
  const [confirmpass, setconfirmpass] = useState("")

  const onchangename = (text) => {
    updatename(text)
    console.log(text)
  }
  const onchangeemail = (text) => {
    setemail(text)
  }
  const onchangeuserpass = (text) => {
    setuserpass(text)
  }
  const onconfirmpass = (text) => {
    setconfirmpass(text)
  }

  const createaccout = async () => {
    if (!userpass.trim() || !confirmpass.trim()) {
      console.log("password can not empty")
      return
    }
    if (userpass.length < 6) {
      console.log("you can write 6 letter")
      return
    }
    if (userpass !== confirmpass) {
      // console.log("password not match")
      Alert.alert("Error", "Password not match")
      return
    }
    try {
      const response = await fetch("http://10.140.21.238:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullname: name,
          usermail: email,
          signuppass: userpass
        })
      })
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        console.log("data is missing")
        return
      }
      console.log(data)
      navigation.replace("LoginScreen");

    } catch (error) {
      console.error("hey server is not running")
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      {/* Title */}
      <Text style={styles.title}>Create an account</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Sign up to get started with all features
      </Text>

      {/* Full Name */}
      <Text style={styles.label}>Full Name</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#B3B3B3"
          onChangeText={onchangename}
          value={name}
        />
      </View>

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#B3B3B3"
          keyboardType="email-address"
          value={email}
          onChangeText={onchangeemail}
        />
      </View>

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          placeholderTextColor="#B3B3B3"
          secureTextEntry={password ? true : false}
          value={userpass}
          onChangeText={onchangeuserpass}
        />
        <TouchableOpacity onPress={() => showpassword(!password)}  > <MaterialIcons name={password ? "visibility-off" : "visibility"} size={22} color="#B3B3B3" /></TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Re-enter your password"
          placeholderTextColor="#B3B3B3"
          secureTextEntry={enterpass ? true : false}
          onChangeText={onconfirmpass}
          value={confirmpass}
        />
        <TouchableOpacity onPress={() => updateenterpass(!enterpass)}><MaterialIcons name={enterpass ? "visibility-off" : "visibility"} size={22} color="#B3B3B3" /></TouchableOpacity>
      </View>

      {/* Create Account Button */}

      <TouchableOpacity onPress={createaccout} style={[styles.createBtn, {
        backgroundColor: name && email && userpass && confirmpass ? "#648DDB" : "#c55050ff"
      }]}>
        <Text style={styles.createText}>Create Account</Text>
      </TouchableOpacity>

      {/* Already have account */}
      <View style={styles.loginRow}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.loginLink}> Login</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default SignUpScreen;


// ---------------------- STYLES ----------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#000",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "#9A9A9A",
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    color: "#000",
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 8,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },

  createBtn: {
    // backgroundColor: "#648DDB",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
  },

  createText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  loginText: {
    color: "#999",
    fontSize: 14,
  },

  loginLink: {
    color: "#3578E5",
    fontSize: 14,
    fontWeight: "600",
  },
});
