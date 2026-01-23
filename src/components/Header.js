import { View, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header]}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.logoCircle}>
          <Image style={styles.logoImg} source={require("../images/logoweb.png")} />
        </TouchableOpacity>

        <Text style={styles.appName}>RoomAI Designer</Text>
      </View>

      <TouchableOpacity >
        <Image style={styles.menuimage} source={require("../images/personapp.jpg")} />
      </TouchableOpacity>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  logoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    // backgroundColor: "#E1F3FF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  logoImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  appName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1D21",
  },

  menuimage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
