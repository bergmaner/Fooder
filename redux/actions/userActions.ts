import axios from "axios";
import { Dispatch } from "react";

export interface UpdateLocation{
    readonly type: "ON_UPDATE_LOCATION",
    payload: any
}

export interface UpdateUserError{
    readonly type: "ON_UPDATE_USER_ERROR",
    payload: any
}

export type userAction = UpdateLocation | UpdateUserError;

export const onUpdateLocation = (location: any) => {

    return async (dispatch: Dispatch<userAction>) => {
        try{
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