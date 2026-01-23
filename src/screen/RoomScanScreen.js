import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { RNCamera } from "react-native-camera";

export default function RoomScanScreen() {
  const [progress, setProgress] = useState(60); 

  return (
    <View style={styles.container}>
      <RNCamera style={styles.camera} type={RNCamera.Constants.Type.back} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>RoomAI Designer</Text>
        <Text style={styles.step}>Step 1/4</Text>
      </View>

      {/* Scanning Overlay Sphere */}
      <View style={styles.sphereBox}>
        <ImageBackground
          source={require("./sphere.png")} // use a transparent wireframe sphere PNG
          style={styles.sphere}
        />

        {/* Window Tag */}
        <View style={styles.tag}>
          <Text style={styles.tagText}>Window</Text>
        </View>
      </View>

      {/* Instruction Text */}
      <Text style={styles.instruction}>
        Slowly turn clockwise 360°{"\n"}to scan the room
      </Text>

      {/* Progress bar */}
      <View style={styles.progressWrapper}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.progressText}>Scanning… {progress}% Complete</Text>

      {/* Capture button */}
      <TouchableOpacity style={styles.captureBtn}>
        <Text style={styles.captureText}>Capture</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
  },

  header: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "600",
  },
  step: {
    color: "#81e6ff",
    marginTop: 3,
  },

  sphereBox: {
    position: "absolute",
    top: "20%",
    width: "90%",
    height: 260,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  sphere: {
    width: 260,
    height: 260,
    resizeMode: "contain",
    opacity: 0.85,
  },

  tag: {
    position: "absolute",
    right: 0,
    top: "40%",
    backgroundColor: "#4ADE80",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  tagText: {
    color: "#fff",
    fontWeight: "600",
  },

  instruction: {
    position: "absolute",
    top: "58%",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 16,
    color: "#fff",
    opacity: 0.8,
  },

  progressWrapper: {
    position: "absolute",
    bottom: 140,
    height: 6,
    width: "75%",
    backgroundColor: "#ffffff30",
    borderRadius: 4,
    alignSelf: "center",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#00eaff",
    borderRadius: 4,
  },
  progressText: {
    position: "absolute",
    bottom: 115,
    color: "#fff",
    opacity: 0.8,
    alignSelf: "center",
  },

  captureBtn: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#00eaff",
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#00eaff",
    shadowOpacity: 0.7,
    shadowRadius: 20,
  },
  captureText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 18,
  },
});
