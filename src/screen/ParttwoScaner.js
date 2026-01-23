import SecendHeader from "../components/SecendHeader.js"
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text } from "react-native";
import TopButton from "../components/TopButtons.js"
import CirclePreview from "../components/CirclePreview.js";
import ScanerLast from "../components/ScanerLast.js";


const ParttwoScaner = () => {
    return (
        <SafeAreaView style={styles.PartScaner} >
            <SecendHeader />
            <View style={styles.textcenter} ><Text style={styles.boldtext} >Living Room Project</Text></View>
            <TopButton/>
            <CirclePreview/>
            <ScanerLast/>
        </SafeAreaView>
    )
}

export default ParttwoScaner

const styles = StyleSheet.create({
    PartScaner: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    textcenter: {
        alignItems: "center",
        marginTop: 15
    },
    boldtext: {
        color: "#040404ff",
        fontSize: 17,
        fontWeight: "bold"
    }
})