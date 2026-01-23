import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ScanerLast = () => {
  const [on, setOn] = useState(false);

  const toggleSwitch = () => {
    setOn(!on);
  };

  return (
    <View style={styles.mainbuttoncontainer}>
      
      {/* Left Section */}
      <View style={styles.section}>
        <View style={styles.iconCircle}>
          <MaterialCommunityIcons name="compare" size={20} color="#616161" />
        </View>
        <Text style={styles.label}>Furniture/Materials</Text>
      </View>

      {/* Toggle */}
      <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
        <MaterialCommunityIcons
          name={on ? "toggle-switch" : "toggle-switch-off"}
          size={55}
          color="#bfc1c0"
        />
      </TouchableOpacity>

      {/* Right Section */}
      <View style={styles.section}>
        <View style={styles.iconCircle}>
          <MaterialIcons name="lightbulb-outline" size={20} color="#616161" />
        </View>
        <Text style={styles.label}>Variant 1/3</Text>
      </View>

    </View>
  );
};

export default ScanerLast;

const styles = StyleSheet.create({
  mainbuttoncontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    backgroundColor: "#f7f7f7",
    paddingVertical: 18,
    // paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 10,
  },

  section: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#d5d7d9",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    fontSize: 14,
    color: "#333",
  },
});
