import { SafeAreaView } from "react-native-safe-area-context"
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import ExtractedDetails from "../components/ExtractedDetails.js"
import SecendHeader from "../components/SecendHeader.js"


const ReviewPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.reviewsection}  >
            <SecendHeader />

            <Text style={styles.reviewtext} >Review Your Space</Text>

            <Image style={styles.image} source={require("../images/roomview.png")} />

            <ExtractedDetails />

            <TouchableOpacity onPress={()=>navigation.navigate("ScanerLoadingmainpage")} style={styles.button} >
                <Text style={styles.btntext} >Confirm & Proceed</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}

export default ReviewPage

const styles = StyleSheet.create({
    reviewsection: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    reviewheader: {
        flexDirection: "row",
        alignItems: "center"
    },
    boldtext: {
        fontSize: 17,
        fontWeight: 600
    },
    reviewtext: {
        fontSize: 17,
        fontWeight: 500,
        marginTop: 20,
        marginLeft: 4
    },
    image: {
        width: 350,
        height: 300,
        resizeMode: "center",
        alignSelf: "center"
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#1E90FF",
        alignItems: "center",
        borderRadius: 40,
    },
    btntext: {
        fontSize: 17,
        fontWeight: 600,
        color: "#ffffff"
    }

})