import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const RoomCard = ({ title, date1, date2, image }) => {
  return (
    <View style={styles.card}>
      
      {/* Left Image */}
      <Image source={image} style={styles.roomImage} />

      {/* Right Content */}
      <View style={styles.rightContainer}>
        
        {/* Title + Calendar Icon */}
        <View style={styles.rowBetween}>
          <Text style={styles.title}>{title}</Text>
          <Icon name="calendar" size={22} color="#6e6e6e" />
        </View>

        {/* Dates */}
        <View style={styles.rowBetween}>
          <Text style={styles.subText}>{date1}</Text>
          <Text style={styles.subText}>{date2}</Text>
        </View>

        {/* Bottom Icons */}
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.bottomItem}>
            <Icon name="pencil" size={18} color="#6e6e6e" />
            <Text style={styles.bottomText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomItem}>
            <Icon name="video" size={18} color="#6e6e6e" />
            <Text style={styles.bottomText}>Revisualize</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomItem}>
            <Icon name="share" size={18} color="#6e6e6e" />
            <Text style={styles.bottomText}>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomItemlast}>
            <Icon name="delete" size={18} color="#6e6e6e" />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    elevation: 3, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  roomImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },

  rightContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    width: "70%",
  },

  subText: {
    color: "#747474",
    fontSize: 12,
    marginTop: 3,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  bottomItem: {
    alignItems: "center",
    justifyContent:"center"
  },
  bottomItemlast:{
    alignItems: "center",
    justifyContent:"center",
    width:30,
    height:30,
    borderRadius:50,
    backgroundColor:"#f0f0f0"
  },
  bottomText: {
    fontSize: 10,
    color: "#6e6e6e",
    marginTop: 2,
  },
});
