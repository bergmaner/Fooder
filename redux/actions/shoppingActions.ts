import axios from "axios";
import { Dispatch } from "react";
import { URL } from "../../utils";
import { FoodAvailability, FoodModel } from "../models";

export interface AvailabilityAction{
    readonly type: "ON_AVAILABILITY",
    payload: FoodAvailability
}

export interface ShoppingErrorAction{
    readonly type: "ON_SHOPPING_ERROR",
    payload: any
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction;

export const onUpdateAvailability = () => {

    return async (dispatch: Dispatch<ShoppingAction>) => {

        try{

            const response = await axios.get<FoodAvailability>(`${URL}/food/availability/666666`);

        if(!response){
            dispatch({
                type: "ON_SHOPPING_ERROR",
                payload: "Error in Availability"
            })
        }
        else {
            dispatch({
            type: "ON_AVAILABILITY",
            payload: response.data
        })
    }
        }
        catch(error){
            dispatch({
                type: "ON_SHOPPING_ERROR",
                payload: error
            })
        }
    }
}