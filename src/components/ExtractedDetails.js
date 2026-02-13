import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ExtractedDetails = () => {

  const [editDim, setEditDim] = useState(false);
  const [editHeight, setEditHeight] = useState(false);
  const [editWindow, setEditWindow] = useState(false);
  const [editDoor, setEditDoor] = useState(false);

  const [dim, setDim] = useState("14.5 x 10 ft");
  const [height, setHeight] = useState("9 ft");
  const [window, setWindow] = useState("1");
  const [door, setDoor] = useState("1");

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Extracted Details</Text>

      {/* Room Dimensions */}
      <View style={styles.row}>
        <Text style={styles.label}>Room Dimensions (L×W):</Text>

        <View style={styles.inputBox}>
          <TextInput
            value={dim}
            editable={editDim}
            onChangeText={setDim}
            style={styles.inputText}
          />
          <TouchableOpacity onPress={() => setEditDim(!editDim)}>
            <Icon name={editDim ? "check" : "edit"} size={18} color="#999" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Ceiling Height */}
      <View style={styles.row}>
        <Text style={styles.label}>Ceiling Height:</Text>

        <View style={styles.inputBox}>
          <TextInput
            value={height}
            editable={editHeight}
            onChangeText={setHeight}
            style={styles.inputText}
          />
          <TouchableOpacity onPress={() => setEditHeight(!editHeight)}>
            <Icon name={editHeight ? "check" : "edit"} size={18} color="#999" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Number of Windows */}
      <View style={styles.row}>
        <Text style={styles.label}>Number of Windows:</Text>

        <View style={styles.inputBox}>
          <TextInput
            value={window}
            editable={editWindow}
            onChangeText={setWindow}
            style={styles.inputText}
          />
          <TouchableOpacity onPress={() => setEditWindow(!editWindow)}>
            <Icon name={editWindow ? "check" : "edit"} size={18} color="#999" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Number of Doors */}
      <View style={styles.row}>
        <Text style={styles.label}>Number of Doors:</Text>

        <View style={styles.inputBox}>
          <TextInput
            value={door}
            editable={editDoor}
            onChangeText={setDoor}
            style={styles.inputText}
          />
          <TouchableOpacity onPress={() => setEditDoor(!editDoor)}>
            <Icon name={editDoor ? "check" : "edit"} size={18} color="#999" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default ExtractedDetails;

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 15,
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
    elevation: 1,
  },

  inputText: {
    fontSize: 14,
    color: "#333",
    flex: 1,
  },
});
