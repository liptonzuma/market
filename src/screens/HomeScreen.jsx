import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import AppBar from '../utils/AppBar'
import Banner from '../utils/Banner'
import Search from '../utils/Search'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AppBar screen="Home"/>
            <ScrollView>
            <View style={styles.searchbox}>
                <Search/>
            </View>
            <View>
                <Banner/>
            </View>
            </ScrollView>
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
