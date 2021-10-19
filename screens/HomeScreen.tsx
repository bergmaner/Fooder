import React, {useState, useEffect, useReducer} from "react";
import {View,Text,StyleSheet,Dimensions, Image, SafeAreaView} from "react-native";



export const HomeScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navigation}></View>
            <View style={styles.body}>
            <Text>ffkkkkkf</Text>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
                </View> 
        </SafeAreaView>
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
body:{
    flex: 9,
    justifyContent: "center",
    // alignItems: "center",
},
footer:{
    flex:1,
    backgroundColor: "cyan"
}
});