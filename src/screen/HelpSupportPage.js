import React, { useState } from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Switch,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ThirdHeader from "../components/ThirdHeader.js";

const HelpSupportPage = () => {
  const [emailToggle, setEmailToggle] = useState(false);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => console.log("Logged out") },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#101820" />

      <View style={styles.root}>
        <ThirdHeader />

        <ScrollView
          style={styles.body}
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.helpTitle}>Help & Support</Text>

          <View style={styles.searchCard}>
            <MaterialIcons
              name="search"
              size={22}
              color="#9FA4B3"
              style={{ marginRight: 10 }}
            />
            <TextInput
              placeholder="Search FAQs or ask a question"
              placeholderTextColor="#9FA4B3"
              style={styles.searchInput}
            />
          </View>

          <View style={styles.tabRow}>
            <View style={styles.tabItemActive}>
              <MaterialIcons
                style={styles.iconstyle}
                name="help-outline"
                size={22}
                color="#00C29B"
              />
              <Text style={styles.tabTextActive}>FAQs</Text>
            </View>

            <View style={styles.tabItem}>
              <MaterialIcons
                style={styles.iconstyle}
                name="bug-report"
                size={22}
                color="#9FA4B3"
              />
              <Text style={styles.tabText}>Report a Bug</Text>
            </View>

            <View style={styles.tabItem}>
              <MaterialIcons
                style={styles.iconstyle}
                name="lightbulb-outline"
                size={22}
                color="#9FA4B3"
              />
              <Text style={styles.tabText}>Suggest</Text>
            </View>

            <View style={styles.tabItem}>
              <MaterialIcons
                style={styles.iconstyle}
                name="star-border"
                size={22}
                color="#9FA4B3"
              />
              <Text style={styles.tabText}>Feature</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Get in Touch</Text>

          <TouchableOpacity style={styles.contactRow}>
            <View style={styles.contactLeft}>
              <MaterialCommunityIcons
                name="message-text-outline"
                size={22}
                color="#00C29B"
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.contactTitle}>
                  Live Chat (Priority Support)
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C3C7D0" />
          </TouchableOpacity>

          <View style={styles.contactRow}>
            <View style={styles.contactLeft}>
              <MaterialIcons name="email" size={22} color="#4B4F5C" />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.contactTitle}>Email Support</Text>
              </View>
            </View>
            <Switch
              value={emailToggle}
              onValueChange={setEmailToggle}
              thumbColor={emailToggle ? "#FFFFFF" : "#f4f3f4"}
              trackColor={{ false: "#C3C7D0", true: "#00C29B" }}
            />
          </View>

          <View style={styles.contactRow}>
            <View style={styles.contactLeft}>
              <MaterialIcons name="call" size={22} color="#00C29B" />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.contactTitle}>
                  Call Us (Mon–Fri 9 AM–6 PM)
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.mapThumbWrap}>
              <Image
                style={styles.mapThumb}
                source={{
                  uri: "https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png",
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.cardTitle}>Our Office Location</Text>
              <Text style={styles.cardSub}>
                123 Main Street, Apartment 003,{"\n"}City, Country
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.bottomLogo}>
              <Image
                style={styles.logo}
                source={require("../images/logoweb.png")}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.cardTitle}>RoomAI Designer</Text>
                <Text style={styles.cardSub}>
                  Digital design assistant. Helping you{"\n"}
                  design AI-based spaces.
                </Text>
              </View>
            </View>
          </View>

          {/* LOGOUT SECTION */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <MaterialIcons name="logout" size={22} color="#FF4C4C" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HelpSupportPage;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#101820" },
  root: { flex: 1, backgroundColor: "#101820" },
  body: {
    flex: 1,
    backgroundColor: "#F4F5F7",
    paddingHorizontal: 16,
    paddingTop: 14,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#00C29B",
  },
  helpTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1D21",
    marginBottom: 20,
    marginTop: 15,
  },
  logo: { width: 60, height: 60, resizeMode: "contain" },
  searchCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 25,
  },
  searchInput: { flex: 1, fontSize: 14, color: "#1A1D21" },
  tabRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 22 },
  tabItem: { alignItems: "center", justifyContent: "center", flex: 1 },
  tabItemActive: { alignItems: "center", justifyContent: "center", flex: 1 },
  iconstyle: { padding: 10, borderRadius: 30, borderColor: "#00C29B", borderWidth: 1 },
  tabText: { fontSize: 11, marginTop: 4, color: "#9FA4B3" },
  tabTextActive: { fontSize: 11, marginTop: 4, color: "#00C29B", fontWeight: "600" },
  sectionTitle: { fontSize: 17, fontWeight: "500", color: "#1A1D21", marginBottom: 12, marginTop: 40 },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  contactLeft: { flexDirection: "row", alignItems: "center" },
  contactTitle: { fontSize: 14, fontWeight: "600", color: "#1A1D21" },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginTop: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  mapThumbWrap: {
    width: 64,
    height: 48,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#D7DDE8",
  },
  mapThumb: { width: "100%", height: "100%", resizeMode: "cover" },
  cardTitle: { fontSize: 13, fontWeight: "600", color: "#1A1D21", marginBottom: 2 },
  cardSub: { fontSize: 11, color: "#777C89" },
  bottomLogo: { flexDirection: "row", alignItems: "center" },

  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF1F1",
    paddingVertical: 14,
    borderRadius: 16,
    marginTop: 30,
    marginBottom: 20,
  },

  logoutText: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "600",
    color: "#FF4C4C",
  },
});
