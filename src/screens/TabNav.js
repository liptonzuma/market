import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Favorite from './Favorite';
import ProductList from './ProductList';

const Tab = createBottomTabNavigator()

const TabNav = () => {
    return (
       <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                left:20,
                bottom:20,
                right:20,
                justifyContent:'center',
                alignItems:'center',
                height:60,
                borderRadius:15,
                elevation:1,
                shadowColor:"#ddd",
                shadowOffset:{width:3,height:3},
                shadowOpacity:1,
                shadowRadius:3
            }
        }}
       >
           <Tab.Screen 
            name="Home"
            component={HomeScreen}
            options={{
                headerShown:false,
                tabBarIcon:({focused})=><Octicons name="home" size={24} color={focused? "#f5565e":"black"} />
            }}
           />
             <Tab.Screen 
            name="Items"
            component={ProductList}
            options={{
                headerShown:false,
                tabBarIcon:({focused})=><Feather name="shopping-bag" size={24} color={focused?"#f5565e":'black'} />
            }}
           />
           <Tab.Screen
            name="Favorite"
            component ={Favorite}
            options={{
                headerShown:false,
                tabBarIcon: ({focused})=><AntDesign name="hearto" size={24} color={focused?"#f5565e":"black"} />
            }}
           />


       </Tab.Navigator>
    )
}

export default TabNav;

