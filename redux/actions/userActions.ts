import axios from "axios";
import { Dispatch } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { AddressModel } from "../models";

export interface UpdateLocation{
    readonly type: "ON_UPDATE_LOCATION",
    payload: AddressModel
}

export interface UpdateUserError{
    readonly type: "ON_UPDATE_USER_ERROR",
    payload: any
}

export type UserAction = UpdateLocation | UpdateUserError;

export const onUpdateLocation = (location: AddressModel) => {

    return async (dispatch: Dispatch<UserAction>) => {
        try{

            await AsyncStorage.setItem("location", JSON.stringify(location));

            dispatch({
                type: "ON_UPDATE_LOCATION",
                payload: location
            })
        }
        catch(error){
            dispatch({
                type: "ON_UPDATE_USER_ERROR",
                payload: error
            })
        }
    }
}