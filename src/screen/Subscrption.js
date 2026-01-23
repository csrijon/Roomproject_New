import { FlatList, View, Text, StyleSheet } from "react-native";
import Header from "../components/Header.js";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanCard from "../components/PlanCard.js";
import { ScrollView, StatusBar } from "react-native";

const plans = [
  {
    id: 1,
    name: "Free",
    price: "0",
    per: "month",
    features: ["5 designs / month", "Unlimited renders", "Basic support"],
    buttonText: "Start Free",
    recommended: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "9.99",
    per: "month",
    yearly: "$80/year",
    features: [
      "Unlimited designs",
      "AR/VR Export",
      "Revit File Export",
      "Priority Support",
    ],
    buttonText: "Upgrade Now",
    recommended: true,
  },
  {
    id: 3,
    name: "Business",
    price: "29.99",
    per: "month",
    features: ["50 team members", "PDF Report Export", "BIM Export"],
    buttonText: "Upgrade",
    recommended: false,
  },
];

const Subscrption = () => {
  return (
    <SafeAreaView style={styles.Subcontainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <Header />

        <View style={styles.topsection}>
          <Text style={styles.firsttext}>Find Your Perfect Plan</Text>
          <Text style={styles.secondtext}>Unlock Powerful AI Design Tools</Text>
        </View>

        <View style={styles.cardContainer}>
          <FlatList
            horizontal
            data={plans}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PlanCard item={item} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
          />
        </View>

        <View style={styles.subcard}>
          <Text style={styles.boldsubtext}>FAQ</Text>
          <Text style={styles.faqText}>
            hello i am srijon chowdhury, I am from Ghatal Paschim Medinipur
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Subscrption;

const styles = StyleSheet.create({
  Subcontainer: {
    flex: 1,
    backgroundColor: "#edeaeaff",
  },

  topsection: {
    marginTop: 15,
    alignItems: "center",
    gap: 6,
  },

  firsttext: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },

  secondtext: {
    fontSize: 16,
    color: "#666",
  },

  cardContainer: {
    marginTop: 15,
    paddingBottom: 10,
  },

  subcard: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 15,
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 25,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    gap: 8,
  },

  boldsubtext: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
    color: "#333",
  },

  faqText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
});
