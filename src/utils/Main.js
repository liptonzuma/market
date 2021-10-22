import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';
import LoginScreen from '../screens/LoginScreen';

const Main =() => {

    let [loaded ] =  useFonts({
        'Pattaya-Regular':require('../../assets/fonts/Pattaya-Regular.ttf')
    })

    useEffect(()=>{

    },[loaded])

    return (
        <View>
               <LoginScreen/>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    text:{
        fontFamily:'Pattaya-Regular'
    }
})
