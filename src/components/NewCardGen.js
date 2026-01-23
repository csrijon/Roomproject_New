
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const NewCardGen = ({icon,title,selected}) => {
    return (
        <View style={[styles.card, selected && styles.selectedCard]}>
          <Image
  source={icon}
  style={{ width: 50, height: 50, resizeMode: "contain" }}
/>

            {selected ? (
                <LinearGradient
                    colors={["#79B4E1", "#A7E7C5"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.selectedBar}
                >
                    <Text style={styles.selectedText}>{title}</Text>
                </LinearGradient>
            ) : (
                <Text style={styles.text}>{title}</Text>
            )}
        </View>
    )
}

export default NewCardGen

const styles = StyleSheet.create({
    card: {
    width: 160,
    height: 110,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1.2,
    borderColor: "#e2e2e2",
    marginRight: 15,
  },

  selectedCard: {
    borderColor: "#9ed6c7",
    borderWidth: 1.7,
  },

  icon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },

  text: {
    fontSize: 15,
    color: "#444",
    fontWeight: "600",
  },

  selectedBar: {
    paddingVertical: 8,
    width: "100%",
    borderRadius: 12,
    alignItems: "center",
  },

  selectedText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
})