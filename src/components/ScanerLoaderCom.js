import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScanerLoaderCom = () => {
    return(
        <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Generating Your{"\n"}Dream Room</Text>

      {/* Big Circle Placeholder (Animation Placeholder) */}
      <View style={styles.circle}>
        {/* You can replace this with Lottie animation later */}
      </View>

      {/* Progress text */}
      <Text style={styles.progressText}>75% Complete</Text>

      {/* Progress bar */}
      <View style={styles.progressBarBackground}>
        <View style={styles.progressBarFill} />
      </View>

      {/* Estimated time */}
      <Text style={styles.estimateText}>
        Estimated time remaining: 30 seconds
      </Text>

      {/* Footer */}
      <Text style={styles.footer}>Powered by Statements AI</Text>
    </SafeAreaView>
    )
}
export default ScanerLoaderCom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
    color: "#000",
  },

  circle: {
    width: 260,
    height: 260,
    backgroundColor: "#A7D3DD",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  progressText: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 6,
  },

  progressBarBackground: {
    width: "70%",
    height: 6,
    backgroundColor: "#E0E0E0",
    borderRadius: 50,
    overflow: "hidden",
  },

  progressBarFill: {
    width: "75%",
    height: "100%",
    backgroundColor: "#4AA8EA",
  },

  estimateText: {
    marginTop: 8,
    fontSize: 14,
    color: "#555",
  },

  footer: {
    fontSize: 13,
    color: "#777",
    marginBottom: 10,
  },
});
