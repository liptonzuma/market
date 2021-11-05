import React from 'react'
import { StyleSheet, Text, SafeAreaView,View,Dimensions, TouchableOpacity, Pressable } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { Entypo } from '@expo/vector-icons';

const AppBar = ({screen,navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.avatar}>
                <TouchableOpacity>
                    <Text>
                    <Entypo name="shop" size={29} color="#f5565e" />
                    </Text>
                </TouchableOpacity>
                <Text>{screen}</Text>
                <Pressable 
                    onPress={()=>navigation.navigate('Profile')}
                >
                <Avatar 
                        rounded
                        source={require('../../assets/images/avatar.jpg')}
                    />
                </Pressable>

            </View>
        </SafeAreaView>
    )
}

export default AppBar

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:20,
        left:0,
        right:0,
        borderRadius:5,
        height:Dimensions.get('screen').height/12,
        justifyContent:'center',
        backgroundColor:'#fff',
        padding:10,
        shadowColor:"#606061",
        shadowOffset:{width:3,height:1},
        shadowOpacity:0.2,
        shadowRadius:1,
        zIndex:10
    },
    avatar:{
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})
