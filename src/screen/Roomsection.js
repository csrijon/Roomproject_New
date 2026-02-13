import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button.js";
import RoomCard from "../components/RoomCard.js";

const data = [
  {
    id: 1,
    title: "Living Room Project",
    date1: "2023-10-26",
    date2: "2023-09-10-25",
    image: require("../images/appbed.webp"),
  },
  {
    id: 2,
    title: "Bedroom Design",
    date1: "2023-09-30",
    date2: "2023-08-28",
    image: require("../images/appbed.webp"),
  },
  {
    id: 3,
    title: "Modern Kitchen",
    date1: "2023-08-15",
    date2: "2023-08-01",
    image: require("../images/appbed.webp"),
  },
  {
    id: 4,
    title: "Office Workspace",
    date1: "2023-07-22",
    date2: "2023-07-10",
    image: require("../images/appbed.webp"),
  },
  {
    id: 5,
    title: "Dining Room Setup",
    date1: "2023-06-12",
    date2: "2023-06-01",
    image: require("../images/appbed.webp"),
  },
  {
    id: 6,
    title: "Studio Apartment",
    date1: "2023-05-05",
    date2: "2023-04-28",
    image: require("../images/appbed.webp"),
  },
];

const Roomsection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RoomCard
            title={item.title}
            date1={item.date1}
            date2={item.date2}
            image={item.image}
          />
        )}
        ListHeaderComponent={
          <>
            <View style={styles.semiconatiner}>
              <Image
                style={styles.img}
                source={require("../images/logoweb.png")}
              />
              <View>
                <Text style={styles.FirstText}>
                  RoomAI Designer
                </Text>
                <Text style={styles.Secendtext}>
                  Statements By Stellar Furnishings
                </Text>
              </View>
            </View>

            <View style={styles.middlecontainer}>
              <Text style={styles.thirdtext}>My Room Scenes</Text>
            </View>

            <View style={styles.buttoncontainer}>
              <Button name="sofa" date="Room Type" />
              <Button name="calendar" date="Date" />
            </View>
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 20,
        }}
      />
    </SafeAreaView>
  );
};

export default Roomsection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  semiconatiner: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  img: {
    height: 80,
    width: 80,
    marginRight: 10,
  },

  FirstText: {
    fontSize: 20,
    fontWeight: "600",
  },

  Secendtext: {
    fontSize: 12,
    color: "#605e5eff",
  },

  middlecontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  thirdtext: {
    fontSize: 17,
    fontWeight: "500",
  },

  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    gap: 10,
    backgroundColor: "#f4f4f4",
  },
});
