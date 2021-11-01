import React, { useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Image,Rating } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import {FontAwesome} from "@expo/vector-icons"

const Product = ({details,cartItems,setCartItems}) => {
    const [selected,setSelected]=useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Pressable 
                    onPress={()=>setSelected(!selected)}
                >
                    <Text><AntDesign name={!selected?"hearto":"heart"} size={24} color="red" /> </Text>
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    placeholderStyle={{backgroundColor:'transparent'}}
                    PlaceholderContent={<ActivityIndicator/>}
                    source={details.image}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
            <View style={styles.nameContainer}>
                <View>
                <Text style={styles.name}>{details.name}</Text>
                <Text style={styles.price}>{details.price}</Text>
                <View style={styles.rating}>
                <Rating 
                    ratingCount ={details.rating}
                            count ={5}
                            imageSize={12}
                        />
                </View>
                </View>
                <TouchableOpacity style={styles.button}
                    onPress={()=>setCartItems(cartItems+1)}
                >
                    <Text style={{textAlign:'center'}}>
                        <FontAwesome  name="plus" size={15} color="white"/>
                    </Text>
                </TouchableOpacity>
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
    imageContainer:{
        alignItems:'center'
    },
    image:{
        width:120,
        height:120
    },
    nameContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    rating:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    name:{
        fontSize:20,
        color:'#525151'
    },
    price:{
        fontSize:20,
        fontWeight:'700'
    },
    button:{
        backgroundColor:'red',
        padding:10,
        borderRadius:45
    }
})
