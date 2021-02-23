import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HomeScreen } from "./screens/HomeScreen";
import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native';
import { Provider } from "react-redux";
import Svg, { Path } from 'react-native-svg';
import { store } from "./redux";
import { LandingScreen } from "./screens/LandingScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavItem } from './components/NavItem';

const switchNavigator = createSwitchNavigator({

  landingStack: {
    screen: createStackNavigator({
      Landing: LandingScreen,
    },{
      defaultNavigationOptions: {
        headerShown: false
      }
    })
  },
  
  homeStack: createBottomTabNavigator({

    Home: {
      screen: createStackNavigator({
        HomePage: HomeScreen
      }),
      navigationOptions: {
        
        tabBarIcon: ({ focused, tintColor }) => {
          return  NavItem({focused: true, icon:  <MaterialCommunityIcons name="home" size={24}/>});
        }
      }
    
    },

    Offer: {
      screen: createStackNavigator({
        OfferPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return NavItem({focused: focused, icon:  <MaterialCommunityIcons name="home" size={24} />});
        }
      }
    },
    
    Cart: {
      screen: createStackNavigator({
        CartPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <MaterialCommunityIcons name="cart" size={24}/>
        }
      }
    },

    Account: {
      screen: createStackNavigator({
        AccountPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <MaterialCommunityIcons name="account" size={24}/>
        }
      }
    },
  })

});

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return (
    <Provider store = {store}>
      <AppNavigation/>
    </Provider>
  );
}

