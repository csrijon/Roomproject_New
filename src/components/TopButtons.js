import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TopButtons=() => {
  return (
    <View style={styles.topButtons}>
      <TouchableOpacity style={styles.topBtns}>
        <Text style={styles.topBtnText}>360° Panorama</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topBtn}>
        <Text style={styles.topBtnText}>AR Overlay</Text>
      </TouchableOpacity>
    </View>
  );
}
export default TopButtons;

const styles = StyleSheet.create({
  topButtons: {
    flexDirection: "row",
    justifyContent:"center",
    gap: 10,
    marginTop: 20,
  },
  topBtns: {
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth:1,
    borderColor:"#0ab9d8ff",
  },
  topBtn: {
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth:1,
    borderColor:"#818383ff",
  },
  topBtnText: {
    fontSize: 14,
    fontWeight: "600",
    color:"#0ab9d8ff"
  },
});
