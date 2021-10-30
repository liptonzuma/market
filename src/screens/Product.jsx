import React, { useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';

const Product = ({details}) => {
    const [selected,setSelected]=useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Pressable 
                    onPress={()=>setSelected(!selected)}
                >
                    <Text>{!selected?<AntDesign name="hearto" size={24} color="grey" />:<AntDesign name="heart" size={24} color="red" />}</Text>
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    placeholderStyle={{backgroundColor:'transparent'}}
                    PlaceholderContent={<ActivityIndicator/>}
                    source={{uri:details.image,width:150,height:150}}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('screen').width/2.2,
        backgroundColor:'white',
        height:230,
        marginBottom:30,
        borderRadius:10,
        padding:10
    },
    icon:{
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    imageContainer:{},
    image:{
        width:150,
        height:150
    }
})
