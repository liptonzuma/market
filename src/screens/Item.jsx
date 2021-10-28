import React from 'react'
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FAB, Rating } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';


const Item = ({route,navigation}) => {
    const data = route.params
    return (
        <View style={styles.conatiner}>
            <View style={styles.wrapper}>
                <Image 
                    source={data.image}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
            <View style={styles.details}>
                <ScrollView style={styles.inner}>
                    <View style={styles.des}>
                        <Text style={styles.name}>{data.name}</Text>
                        <Text style={styles.price}>{data.price}</Text>
                    </View>
                    <View style={styles.more}>
                        <Text style={styles.brand}>{data.name}</Text>
                        <Rating 
                            ratingCount ={data.rating}
                            count ={5}
                            imageSize={12}
                        />
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.Text}>
                            {data.description}
                        </Text>
                    </View>
                 
                </ScrollView>
                <View>
                       <TouchableOpacity style={styles.fab}>
                           <Text>
                           <Entypo name="shopping-cart" size={24} color="white" />
                           </Text>
                       </TouchableOpacity>
                   </View>
            </View>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    conatiner:{
        height:"100%"
    },
    wrapper:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical:30
    },
    image:{
        width:200,
        height:200,
        
    },
    details:{
        backgroundColor:'white',
        height:Dimensions.get('screen').height/1.8,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,

    },
    des:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'  ,
      paddingVertical:20,
      paddingHorizontal:15
    },
    name:{
        fontSize:25,
        fontWeight:'700'
    },
    price:{
        fontSize:20,
        fontWeight:'600',
        color:'#f5565e'
    },
    more:{
    flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'  ,
      paddingHorizontal:15
    },
    brand:{
        color:'silver',
        fontWeight:'600'
    },
    description:{
        textAlign:'center',
        padding:20,
        fontSize:30
    },
    Text:{
        fontSize:17,
        opacity:0.6,
        letterSpacing:0.6
    
    },
  
    fab:{
        justifyContent:'center',
        alignItems:'center',
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#f5565e',
        position:'absolute',
        right:10,
        bottom:50
    }

})
