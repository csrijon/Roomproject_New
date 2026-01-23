import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const options = [
    "Minimalist",
    "Luxury",
    "Modern",
    "Industrial",
    "Budget",
    "Classic"
];

const StyleSelector = () => {
    const [selected, setSelected] = useState("Luxury");

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Choose a style & budget</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {options.map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[
                            styles.pill,
                            selected === item && styles.selectedPill
                        ]}
                        onPress={() => setSelected(item)}
                    >
                        <Text
                            style={[
                                styles.pillText,
                                selected === item && styles.selectedText
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default StyleSelector;

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        // paddingHorizontal: 15,
    },

    heading: {
        fontSize: 17,
        fontWeight: "500",
        marginBottom: 10,
        color: "#333",
    },

    pill: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 10,
        backgroundColor: "#fff",
    },

    selectedPill: {
        backgroundColor: "#555",
        borderColor: "#555",
    },

    pillText: {
        fontSize: 14,
        color: "#444",
        fontWeight: "500",
    },

    selectedText: {
        color: "#fff",
        fontWeight: "600",
    },
});
