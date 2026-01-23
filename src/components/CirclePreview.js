import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function CirclePreview() {
  return (
    <View style={styles.imagecircle} >
        <Image style={styles.image} source={require("../images/3rd3.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
   imagecircle:{
    marginTop:30,
    alignItems:"center",
   },
   image:{
    width:300,
    height:300,
    borderRadius:150,
    borderWidth:10,
    borderColor:"#dfd9d9ff"
   }
});
