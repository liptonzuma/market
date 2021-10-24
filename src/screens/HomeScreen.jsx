import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import AppBar from '../utils/AppBar'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AppBar screen="Home"/>
            <Text>Home</Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
