import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HomeItems = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'700'
                    }}>Products</Text>
                <TouchableOpacity>
                    <Text style={{color:'grey'}}>View all</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeItems

const styles = StyleSheet.create({
    text:{
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})
