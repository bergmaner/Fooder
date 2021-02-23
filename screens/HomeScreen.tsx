import React, {useState, useEffect, useReducer} from "react";
import {View,Text,StyleSheet,Dimensions, Image} from "react-native";
import { connect } from "react-redux";
import { onUpdateAvailability, ShoppingState, UserState, AppState } from "../redux";

interface HomeProps{
    userReducer: UserState,
    shoppingState: ShoppingState,
    onUpdateAvailability: Function
}



export const _HomeScreen: React.FC<HomeProps> = ( props ) => {

    const { location } = props.userReducer;

    return (
        <View>
            <Text>kkk { JSON.stringify(location) } </Text>
        </View>
    )
}

const mapToStateProps = (state: AppState) => ({
    userReducer: state.userReducer,
    shoppingReducer: state.shoppingReducer
})

const HomeScreen = connect(mapToStateProps, { onUpdateAvailability })(_HomeScreen);

export { HomeScreen };