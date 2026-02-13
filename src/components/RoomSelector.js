import React, { useState } from "react";
import { StyleSheet, ScrollView, Pressable } from "react-native";
import NewCardGen from "./NewCardGen.js";

const RoomSelector = () => {

  const [selectedId, setSelectedId] = useState(1); // default selected

  const Rooms = [
    { id: 1, title: "Living Room", img: require("../images/bed.webp") },
    { id: 2, title: "Study Room", img: require("../images/sofa.webp") },
    { id: 3, title: "Sleeping Room", img: require("../images/kitchen.jpg") },
    { id: 4, title: "Dining Room", img: require("../images/dining.jpeg") }
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    //   style={styles.row}
    >
      {Rooms.map(room => (
        <Pressable key={room.id} onPress={() => setSelectedId(room.id)}>
          <NewCardGen
            title={room.title}
            icon={room.img}
            selected={selectedId === room.id}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default RoomSelector;
