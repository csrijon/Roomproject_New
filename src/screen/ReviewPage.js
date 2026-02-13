import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ExtractedDetails from "../components/ExtractedDetails.js";
import SecendHeader from "../components/SecendHeader.js";

const ReviewPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.reviewsection}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <SecendHeader />

        <Text style={styles.reviewtext}>Review Your Space</Text>

        <Image
          style={styles.image}
          source={require("../images/roomview.png")}
        />

        <ExtractedDetails />

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ScanerLoadingmainpage")
          }
          style={styles.button}
        >
          <Text style={styles.btntext}>Confirm & Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewPage;

const styles = StyleSheet.create({
  reviewsection: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  reviewtext: {
    fontSize: 17,
    fontWeight: "500",
    marginTop: 20,
    marginLeft: 4,
  },

  image: {
    width: "100%",
    height: 280,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 15,
  },

  button: {
    paddingVertical: 15,
    backgroundColor: "#1E90FF",
    alignItems: "center",
    borderRadius: 40,
    marginTop: 20,
  },

  btntext: {
    fontSize: 17,
    fontWeight: "600",
    color: "#ffffff",
  },
});
