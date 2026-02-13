import React from "react";
import { View, Text, Image, StyleSheet, FlatList, StatusBar } from "react-native";
import Icon from "../components/Icon.js"
import { SafeAreaView } from "react-native-safe-area-context";


const previewImages = [
  { id: 1, img: require("../images/firstroom1.jpg") },
  { id: 2, img: require("../images/secend2.jpg") },
  { id: 3, img: require("../images/3rd3.jpg") },
];

const Roomsence = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containers}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/* Logo */}
      <Image
        source={require("../images/logoweb.png")}
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>RoomAI Designer</Text>
      <Text style={styles.subtitle}>Statements By Stellar Furnishings</Text>

      {/* AI Label */}
      <View style={styles.aiTag}>
        <Text style={styles.aiTagText}>AI-Powered{"\n"}Interior Design</Text>
      </View>

      {/* Preview Cards */}
      <FlatList
        horizontal
        data={previewImages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image source={item.img} style={styles.previewCard} />
        )}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
      />

      <Icon navigation={navigation} />
    </SafeAreaView>
  )
}

export default Roomsence

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    // marginBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    fontSize: 12,
    color: "#777",
    marginBottom: 10,
    zIndex: 111111
  },

  aiTag: {
    backgroundColor: "#eaeef2",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10,
    position: "absolute",
    top: 130,
    right: 0,
  },

  aiTagText: {
    fontSize: 12,
    textAlign: "center",
    color: "#444",
    fontWeight: "500",
  },

  previewCard: {
    width: 150,
    height: 260,
    borderRadius: 16,
    marginRight: 12,
    marginTop: 30
  },

  tapText: {
    marginTop: 25,
    fontSize: 16,
    color: "#777",
  },

  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "88%",
    // marginTop: 80,
  },

  featureItem: {
    alignItems: "center",
  },

  featureIcon: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },

  featureLabel: {
    fontSize: 13,
    color: "#444",
    textAlign: "center",
  },

  ctaButton: {
    marginTop: 30,
    backgroundColor: "#4da6ff",
    width: "85%",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },

  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  footer: {
    position: "absolute",
    bottom: 20,
    color: "#999",
    fontSize: 12,
  },
});
