import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {LandingScreen} from "./screens/LandingScreen";
import {HomeScreen} from "./screens/HomeScreen";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const switchNavigator = createSwitchNavigator({

  landingStack: {
    screen: createStackNavigator({
      Landing: LandingScreen,
      // search address screen
    },{
      defaultNavigationOptions: {
        headerShown: false
      }
    }),

  },

  homeStack:  createBottomTabNavigator({

    // Home tab Icon
    home: {
      screen: createStackNavigator({
        HomePage: HomeScreen,
      },{
        defaultNavigationOptions: {
          headerShown: false
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true ? require('./images/home_icon.png') : require('./images/home_n_icon.png') 
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },

    // Home tab Icon
    Offer: {
      screen: createStackNavigator({
        OfferPage: HomeScreen //
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true ? require('./images/home_icon.png') : require('./images/home_n_icon.png') 
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },

     // Home tab Icon
     // Home tab Icon
     Account: {
      screen: createStackNavigator({
        AccountPage: HomeScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {

          let icon = focused == true ? require('./images/home_icon.png') : require('./images/home_n_icon.png') 
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    }

   })

});


const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return (
    // <LandingScreen/>
    <AppNavigation />
  );
}


const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30
  }
});