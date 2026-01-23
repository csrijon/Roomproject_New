import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const colors = ["#E5E7EB", "#B5BBC5", "#A0A6AD", "#D3C9BB", "#B4926C"];
const brandIcons = [
  require("../images/rawimage.png"),
  require("../images/rawimage1.png"),
  require("../images/rawimage2.png"),
  require("../images/rawimage3.png"),
  require("../images/rawimage4.png")
];

const PickColors = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>Pick colors & materials</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flexDirection: "row" }} >
        {/* Color Row */}
        <View style={styles.colorRow}>
          {colors.map((c, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedColor(index)}
              style={[
                styles.colorBox,
                { backgroundColor: c },
                selectedColor === index && styles.colorSelected
              ]}
            />
          ))}
        </View>
        <View style={styles.iconRow}>
          {brandIcons.map((icon, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedBrand(index)}
              style={[
                styles.iconWrapper,
                selectedBrand === index && styles.iconSelected
              ]}
            >
              <Image source={icon} style={styles.iconImage} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Favorite Brands */}
      <Text style={styles.subText}>Favorite Brands <Text style={styles.optional}>(optional)</Text></Text>

      {/* Brand Icons Row */}


      {/* Prompt Preview Card */}
      <View style={styles.cardPreview}>
        <Text style={styles.previewTitle}>AI Prompt Preview</Text>

        <Text style={styles.previewText}>
          A luxury minimalist living room with wood and linen textures,
          using a beige grey color palette, featuring furniture from
          “Restoration Hardware”.
        </Text>
      </View>

      {/* Gradient Button */}
      <TouchableOpacity onPress={() => navigation.navigate("ReviewPage")}  >
        <LinearGradient
          colors={["#79B4E1", "#A7E7C5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.btnText}>Generate Designs</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default PickColors;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // paddingHorizontal: 15,
  },

  title: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },

  colorRow: {
    flexDirection: "row",
    marginBottom: 20,
  },

  colorBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  colorSelected: {
    borderColor: "#79B4E1",
    borderWidth: 2,
  },

  subText: {
    fontSize: 14,
    color: "#444",
    marginBottom: 5,
  },

  optional: {
    color: "#999",
    fontSize: 12,
  },

  iconRow: {
    flexDirection: "row",
  },

  iconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#F3F3F3",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  iconSelected: {
    borderColor: "#79B4E1",
    backgroundColor: "#E8F6FF",
  },

  iconImage: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  cardPreview: {
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    marginBottom: 20,
    elevation: 3,
  },

  previewTitle: {
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },

  previewText: {
    fontSize: 13.5,
    color: "#555",
    lineHeight: 20,
  },

  button: {
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
