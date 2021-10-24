import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { withTheme } from 'react-native-elements'

const Banner = () => {
    return (
        <View style={styles.container}>
           <LinearGradient
            colors={['blue','#6785f0']}
            style={styles.container}
            start={{x:.2,y:0.1}}
           >
               <View style={styles.inner}>
               <View style={styles.discount}>
                   <View>
                    <Text style={styles.text1}>Get discount</Text>
                    <Text style={styles.text2}>50%</Text>
                    <Text style={styles.text2}>OFF</Text>
                    </View>
               </View>
               <View style={{marginRight:50,transform:[{rotateZ:-0.4}]}}>
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
        backgroundColor:'#3e3ed6',
        marginLeft:15,
        width:100,
        padding:3,
        borderRadius:5,
        padding:7
                
    },
    text1:{
        color:'white',
        paddingLeft:12,
        fontSize:12
    },
    text2:{
        color:'white',
        fontSize:20,
        fontWeight:'600',
        paddingLeft:15
    },
    image:{
        width:150,
        height:150
    },
    inner:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        }
})
