import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Favorite from './Favorite';
import ProductList from './ProductList';
import CartItem from './CartItem';
import { Icon, withBadge } from 'react-native-elements'
import { connect } from 'react-redux';
const Tab = createBottomTabNavigator()

const TabNav = (props) => {
    const BadgedIcon = withBadge(props.cart.length)(Icon)
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
                shadowOffset:{width:1,height:1},
                shadowOpacity:1,
                shadowRadius:2
            }
        }}
       >
           <Tab.Screen 
            name="Main"
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
            <Tab.Screen
            name="Cart"
            component ={CartItem}
            options={{
                headerShown:false,
                tabBarIcon: ({focused})=>
                    <BadgedIcon type="ionicon" name="cart-outline" color={focused?"#f5565e":"black"} />
                
            }}
           />


       </Tab.Navigator>
    )
}

const mapStateToProps=state=> state;
const mapDispatchToProps=()=>({});
export default connect(mapStateToProps,mapDispatchToProps)(TabNav);

