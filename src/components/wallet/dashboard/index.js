import React from "react"
import { StatusBar, View, Text, TextInput, Image, StyleSheet, Dimensions, TouchableOpacity, ToastAndroid } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons"

import Wallet from "./wallet"
import Dashboard from "./dashboard"
import Notification from "./notification"
import Profile from "./profile"

import Logo from "../../../assets/img/logo.png"

const Tab = createBottomTabNavigator()

export default class MyWallet extends React.Component {
  render() {
    return(
      <NavigationContainer independent={true}>
        <Tab.Navigator initialRouteName="Dashboard" screenOptions={{tabBarActiveTintColor: "#e91e63", tabBarStyle: {backgroundColor: "#331557"}}}>
          <Tab.Screen name="Wallet" component={Wallet} options={{tabBarIcon: () => (<MaterialCommunityIcons name="wallet-outline" color="#ffffff" size={30} />)}} />
          <Tab.Screen name="Dashboard" component={Dashboard} options={{tabBarIcon: () => (<FontAwesome5 name="handshake" color="#ffffff" size={30} />)}} />
          <Tab.Screen name="first" component={Dashboard} options={{tabBarIcon: () => (<Image source={Logo} style={{width: 100, height: 100, marginBottom: 80}} />)}} />
          <Tab.Screen name="Notification" component={Notification} options={{tabBarIcon: () => (<FontAwesome5 name="bell" color="#ffffff" size={30} />)}} />
          <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => (<FontAwesome5 name="user" color="#ffffff" size={30} />)}} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}