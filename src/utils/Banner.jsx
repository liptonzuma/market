import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';

const Banner = () => {
    return (
        <View style={styles.container}>
           <LinearGradient
            colors={['black','#48c72e']}
            style={styles.container}
            start={{x:0.4,y:0.8}}
            locations={[0.6,0.6]}
           >
               <View style={styles.inner}>
               <View style={styles.discount}>
                   <View>
                    <Text style={styles.text1}>Get discount</Text>
                    <Text style={styles.text2}>50%</Text>
                    <Text style={styles.text2}>OFF</Text>
                    </View>
               </View>
               <View style={{marginRight:15}}>
                   <View style={styles.star}>
                       <Text>
                       <AntDesign name="star" size={18} color="white" />
                       </Text>
                    </View>
                   <Image 
                    resizeMode="contain"
                    source={require('../../assets/images/sneaker.png')}
                    style={styles.image}
                   />
               </View>
            </View>
           </LinearGradient>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    container:{
        height:Dimensions.get('screen').height/4,
        // backgroundColor:'#53208c',
        opacity:0.8,
        borderRadius:20,
        marginHorizontal:5,
    },
    discount:{
        backgroundColor:'#191c18',
        marginLeft:15,
        width:100,
        padding:3,
        borderRadius:5,
        padding:7,
                
    },
    text1:{
        color:'white',
        paddingLeft:12,
        fontSize:12
    },
    text2:{
        color:'white',
        fontSize:30,
        fontWeight:'700',
        paddingLeft:15
    },
    image:{
        width:160,
        height:160,
        marginTop:18,
        marginRight:15
    },
    inner:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        },
    star:{
        padding:5,
        borderWidth:1,
        borderColor:'white',
        width:30,
        height:30,
        borderRadius:15,
        position:'absolute',
        right:0,
        top:10,
        justifyContent:'center',
        alignItems:'center'

    }
})
