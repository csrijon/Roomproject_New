import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const PasswordReset = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialIcons name="chevron-left" size={29} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Password reset</Text>

      {/* Description */}
      <Text style={styles.description}>
        Your password has been successfully reset. click
        confirm to set a new password
      </Text>

      {/* Confirm Button */}
      <TouchableOpacity 
      style={styles.confirmBtn}
      onPress={()=>navigation.navigate("SetNewPassword")}
      >
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default PasswordReset;



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
    color: "#000",
    marginBottom: 10,
    lineHeight: 20,
    lrterSpacing: 0.5,
  },

  description: {
    fontSize: 15,
    color: "#9A9A9A",
    marginRight: 10,
    marginBottom: 30,
  },

  confirmBtn: {
    backgroundColor: "#648DDB",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  confirmText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
