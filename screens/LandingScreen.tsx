import React from "react";
import {View,Text,StyleSheet,Dimensions, Image} from "react-native";
import Pin from "../icons/Pin";

    const screenWidth = Dimensions.get("screen").width;

export const LandingScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navigation}></View>
            <View style={styles.body}>
            <View style={styles.adressContainer}>
            <View style={styles.pinContainer}>
                <Pin/>
                </View>
                <Text style={styles.adressTitle}>Adres Przesyłki</Text>
            </View>
                <Text style={styles.adressInfo}>Oczekiwanie na lokalizacje</Text>
            </View>
            <View style={styles.footer}></View> 
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: "rgba(245,245,245,1)"
},
navigation: {
    flex: 2,
},
adressContainer:{
    width: screenWidth - 100,
    borderBottomColor: "#97BDFC",
    borderBottomWidth: 0.7,
    padding: 5,
    marginBottom: 10,
    alignItems: "center"
},
adressInfo: {
    fontSize: 20,
    fontWeight: "200",
    color: "#7F7F7F"
},
adressTitle:{
    fontSize: 22,
    fontWeight: "700",
    color: "#7D7D7D",

},
pinContainer:{
width: 100,
height: 100
},
body:{
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
},
footer:{
    flex:1,
}
});