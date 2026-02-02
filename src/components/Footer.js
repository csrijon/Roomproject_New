
import { View, Text, Image, StyleSheet } from "react-native";

const FooterBar = () => {
  return (
    <View style={styles.container}>
      {/* Left Logo + Text */}
      <View style={styles.leftWrap}>
        <Image
          source={require("../images/logoweb.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        
        <Text style={styles.appName}>RoomAI Designer</Text>
      </View>

      {/* Right Text */}
      <Text style={styles.poweredText}>Powered by Statements AI</Text>
    </View>
  );
};

export default FooterBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10,
  },

  leftWrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 22,
    height: 22,
  },

  appName: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  poweredText: {
    fontSize: 14,
    color: "#8A8A8A",
    fontWeight: "500",
  },
});
