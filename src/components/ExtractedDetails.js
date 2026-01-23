import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ExtractedDetails = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Extracted Details</Text>

            {/* Room Dimensions */}
            <View style={styles.row}>
                <Text style={styles.label}>Room Dimensions (L×W):</Text>

                <View style={styles.inputBox}>
                    <TextInput
                        value="14.5 x 10 ft"
                        editable={false}
                        style={styles.inputText}
                    />
                    <TouchableOpacity> <Icon name="edit" size={18} color="#999" /></TouchableOpacity>

                </View>
            </View>

            {/* Ceiling Height */}
            <View style={styles.row}>
                <Text style={styles.label}>Ceiling Height:</Text>

                <View style={styles.inputBox}>
                    <TextInput
                        value="9 ft"
                        editable={false}
                        style={styles.inputText}
                    />
                    <TouchableOpacity> <Icon name="edit" size={18} color="#999" /></TouchableOpacity>

                </View>
            </View>

            {/* Number of Windows */}
            <View style={styles.row}>
                <Text style={styles.label}>Number of Windows:</Text>

                <View style={styles.inputBox}>
                    <TextInput
                        value="1"
                        editable={false}
                        style={styles.inputText}
                    />
                    <TouchableOpacity> <Icon name="edit" size={18} color="#999" /></TouchableOpacity>

                </View>
            </View>

            {/* Number of Doors */}
            <View style={styles.row}>
                <Text style={styles.label}>Number of Doors:</Text>

                <View style={styles.inputBox}>
                    <TextInput
                        value="1"
                        editable={false}
                        style={styles.inputText}
                    />
                    <TouchableOpacity> <Icon name="edit" size={18} color="#999" /></TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default ExtractedDetails;
const styles = StyleSheet.create({
    container: {
        // marginTop: 25,
        // paddingHorizontal: 15,
    },

    heading: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 15,
        color: "#333",
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },

    label: {
        width: "48%",
        fontSize: 14,
        color: "#444",
        fontWeight: "500",
    },

    inputBox: {
        width: "50%",
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 40,
        borderWidth: 1,
        borderColor: "#e6e6e6",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 1,     // subtle shadow like screenshot
    },

    inputText: {
        fontSize: 14,
        color: "#333",
    }
});
