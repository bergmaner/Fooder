import * as Location from "expo-location";

export interface Category{
    title: String,
    icon: String
}

export interface FoodModel{
    _id: string,
    name: string,
    description: string,
    category: string,
    price: number,
    readyTime: number,
    image: [string]
}

export interface UserModel{

}

export interface Restaurant{
    _id: string,
    name: string,
    foodType: string,
    address: string,
    phone: string,
    images: string,
    foods: [FoodModel]
}

export interface FoodAvailability{
    categories: [Category],
    restaurants: [Restaurant],
    foods: [FoodModel]

}

export interface UserModel{
    firstName: string,
    lastName: String,
    phone: String,
    token: string

}

export interface UserState{
    user: UserModel,
    location: string | undefined,
    error: string | undefined
}