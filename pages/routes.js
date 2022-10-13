import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./home";
import Historia from "./historia";

import { Entypo } from '@expo/vector-icons';
import Map from "./news";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:[{
                backgroundColor: '#121212',
                borderTopColor: 'transparent',
                paddingBottom: 5,
                paddingTop: 5,
            },
        ],
        tabBaractiveTintColor: '#ffff',
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Entypo name= "home" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen 
            name="História" 
            component={Historia} 
            options={{
                tabBarIcon: ({size, color}) => (
                    <Entypo name= "archive" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen 
            name="Map" 
            component={Map} 
            options={{
                tabBarIcon: ({size, color}) => (
                    <Entypo name= "map" size={size} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    )
}