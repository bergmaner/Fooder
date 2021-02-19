import React, {useState, useEffect, useReducer} from "react";
import {View,Text,StyleSheet,Dimensions, Image} from "react-native";
import * as Location from "expo-location";
import Pin from "../icons/Pin";
import { useNavigation } from "../utils";

    const screenWidth = Dimensions.get("screen").width;

export const LandingScreen = () => {

    const { navigate } = useNavigation();
    const [error, setError] = useState("");
    const [address, setAddress] = useState();
    const [displayAdress, setDisplayAddress] = useState("Oczekiwanie na lokalizacje");
   
    useEffect(() => {


        (async () => {

            let { status } = await Location.requestPermissionsAsync();

            if (status !== 'granted'){
                setError('Permission to access location is not granted')
            }

            let location: any = await Location.getCurrentPositionAsync({});

            const { coords } = location

            if(coords){

                const { latitude, longitude} = coords;

                let addressResponse: any = await Location.reverseGeocodeAsync({ latitude, longitude})

                for(let item of addressResponse){
                    setAddress(item)
                    let currentAddress = `${item.city} ${item.street} ${item.name}`
                    setDisplayAddress(currentAddress)
                    if(currentAddress.length > 0){
                        setTimeout(() => {
                            navigate("homeStack");
                        }, 1000);
                    }
                    return;
                }


            }else{
               
            }

        })();



    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.navigation}></View>
            <View style={styles.body}>
            <View style={styles.adressContainer}>
            <View style={styles.pinContainer}>
                <Pin/>
                </View>
                <Text style={styles.adressTitle}>Adres zamówienia</Text>
            </View>
    <Text style={styles.adressInfo}>{displayAdress}</Text>
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
    marginTop: -100,
    marginBottom: 10,
    alignItems: "center",
},
adressInfo: {
    fontSize: 20,
    fontWeight: "200",
    color: "#7F7F7F",
    paddingTop: 5
},
adressTitle:{
    fontSize: 22,
    fontWeight: "700",
    color: "#7D7D7D",
    paddingBottom: 5,
    paddingTop: 5

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