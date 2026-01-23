import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, Image, StyleSheet, ScrollView,StatusBar } from "react-native"
import RoomSelector from "../components/RoomSelector.js"
import StyleSelector from "../components/StyleSelector.js"
import Slider from '@react-native-community/slider';
import PickColors from "../components/PickColors.js"

const Tellmeus = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainsection} >
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.firstsection}  >
                    <Image style={styles.images} source={require("../images/logoweb.png")} />
                    <Text style={styles.firsttext} >RoomAI Designer</Text>
                    <Text>Statements By Srijon Chowdhury</Text>
                    <Text style={styles.thirdtext} >Tell Us Your Vision</Text>
                </View>
                <Text style={styles.roomtext}  >What type a room is this ? </Text>
                <RoomSelector />
                <StyleSelector />
                <View style={styles.budget} >
                    <Text style={styles.budgettext} >Style & budget</Text>
                    <Text style={styles.price} >$5000 - 1,000</Text>
                    <View style={styles.seekbarsection} >
                        <View style={styles.dollarcircle} >
                            <Text>$</Text>
                        </View>
                        <Slider
                            style={{ width: "90%", height: "40" }}
                            minimumValue={0}
                            maximumValue={500}
                            maximumTrackTintColor="red"
                            minimumTrackTintColor="green"
                            thumbTintColor="blue"
                        />
                    </View>
                </View>
                <PickColors navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Tellmeus

const styles = StyleSheet.create({
    mainsection: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 15
    },
    firstsection: {
        flexDirection: "column",
        alignItems: "center",
        gap: 5
    },
    images: {
        width: 80,
        height: 80,
        resizeMode: "contain"
    },
    firsttext: {
        fontSize: 20,
    },
    thirdtext: {
        fontSize: 22,
        fontWeight: "500"
    },
    roomtext: {
        marginTop: 20
    },
    budget: {
        marginTop: 15
    },
    budgettext: {
        fontSize: 17,
        fontWeight: 500
    },
    seekbarsection:{
        flexDirection:"row",
        alignItems:"center",
    },
    dollarcircle: {
    width: 30,          
    height: 30,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 25,  
    justifyContent: "center", 
    alignItems: "center",     
},
price:{
    marginLeft:40,
    marginTop:10
}

})