import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import AppBar from '../utils/AppBar'
import Search from '../utils/Search'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AppBar screen="Home"/>
            <View style={styles.searchbox}>
                <Search/>
            </View>
            <Text>Home</Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    searchbox:{
        marginTop:60
    }
})
