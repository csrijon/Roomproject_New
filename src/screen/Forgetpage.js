import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, StyleSheet, StatusBar} from "react-native";
import LottieView from "lottie-react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const Forgetpage = ({ navigation }) => {

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);


  const otochecker = async ()=>{
    try {
      setLoading(true)
      let response = await fetch("http://10.140.21.238:3000/otpsender",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          usermail: text
        })
        
      })
      let data = await response.json();
      console.log(data)
      if(!response.ok){
        console.log("email not registered")
        return
      }
      navigation.navigate("CheckyourEmail",{
        usermail: data.usermail
      })
      setLoading(false)
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton} >
       <MaterialIcons name="arrow-back-ios" size={29} color="black" style={{paddingHorizontal: 10}} />
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}>Forgot password</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Please enter your email to reset the password
      </Text>

      {/* Label */}
      <Text style={styles.label}>Your Email</Text>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#B3B3B3"
        keyboardType="email-address"
        preventDefault=""
        onChangeText={(Value) => {
          setText(Value);
        }}
      />

      {/* Button */}
      <TouchableOpacity
        style={[styles.button, text === "" ? { backgroundColor: "#c55050ff" } : { backgroundColor: "#648DDB" }]}
        onPress={text === "" ? {} : () => otochecker()}
      >
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    {loading && <LottieView 
        source ={require("../images/secend loader.json")}
        autoPlay
        loop
        style={{width:400,height:400,alignSelf:"center",zIndex:100000,position:"absolute",top:170,left:0,right:0,bottom:0}}
       />}
        
    </SafeAreaView>
  );
};

export default Forgetpage;

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
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E1E1E",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#989898",
    marginBottom: 30,
    fontWeight: "semibold",
    letterSpacing: 0.5,
    lineHeight: 20,
  },
  label: {
    fontSize: 16,
    color: "#2A2A2A",
    marginBottom: 10,
    fontWeight: "semibold",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    color: "#000000"
  },
  button: {
    // backgroundColor: "#C9D9F8",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
