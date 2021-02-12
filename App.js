// App.js

import React from 'react'
import Search from './Components/Search'
import Favoris from './Components/Favoris'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Profil from './Components/Profil'
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
return (
  <NavigationContainer>
    <BottomTab.Navigator>
        <BottomTab.Screen 
        name="Accueil" 
        component={Search} 
        options={{
            tabBarLabel: "Accueil",
            tabBarIcon:({color, size}) => (
                <Ionicons name="home-outline" color={color} size={size} />
            )}} />

        <BottomTab.Screen 
        name="Favoris" 
        component={Favoris}
        options={{
            tabBarLabel: "Favoris",
            tabBarIcon: ({color, size}) => (
                <Ionicons name="heart-outline" color={color} size={size} />
            )}}/>

        <BottomTab.Screen 
        name="Profil" 
        component={Profil}
        options={{
            tabBarLabel: "Profil",
            tabBarIcon: ({color, size}) => (
                <Ionicons name="man-outline" color={color} size={size} />
            )}}/>
    </BottomTab.Navigator>
    </NavigationContainer>
   )
  }

 export default BottomTabNav

