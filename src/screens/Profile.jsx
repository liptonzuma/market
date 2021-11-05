import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

const {width,height} = Dimensions.get('screen')
const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
               {/* Avatar Image */}
               <View style={styles.imageContainer}>
               <Avatar 
               source={require("../../assets/images/avatar.jpg")} 
               rounded
               size="xlarge"
               />
               </View>
               {/* Bio */}
               <View style={styles.nameSection}>
                   <Text style={styles.name}>Tanjiru Kamado</Text>
                   <Text style={styles.location}>Japan</Text>
               </View>
               {/* Content */}
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    inner:{
        borderRadius:20,
        width:width/1.1,
        height:height/1.3,
        backgroundColor:'white',
        shadowColor:"#ddd",
        shadowOffset:{width:4,height:4},
        shadowOpacity:1,
        shadowRadius:5
    },
    imageContainer:{
        alignItems:'center',
        padding:10
    },
    nameSection:{
        alignItems:'center'
    },
    name:{
        fontSize:20,
        letterSpacing:2,
        fontWeight:'500'
    },
    location:{
        fontSize:18,
        color:'#636363',
        opacity:0.6
    }

})
