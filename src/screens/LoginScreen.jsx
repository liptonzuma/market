import React,{useEffect} from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import { useFonts } from 'expo-font';


export default function LoginScreen() {

    let [loaded ] =  useFonts({
        'Pattaya-Regular':require('../../assets/fonts/Pattaya-Regular.ttf')
    })

    useEffect(()=>{

    },[loaded])
    return (
        <View>
            {loaded?
            (
            <><View style={styles.logoContainer}>
                <Text style={styles.logo}>Market</Text>
            </View>
            <View style={styles.forms}>
                <View style={styles.input}>
                    <TextInput
                     placeholder="Username" 
                     style={styles.textfield}
                     />
                </View>
                 <View style={styles.input}>
                    <TextInput
                     placeholder="Password"
                     style={styles.textfield}
                    />
                </View>
                <View>
                <TouchableOpacity>
                    <Text style={styles.fp}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.container}>
                    <View style ={styles.imageContainer}>
                        <Image source ={require('../../assets/images/fb.jpg')} style={styles.fb} />
                    </View>
                    <View style={styles.fbText}>
                        <Text  style={styles.fbText}>Continue with facebook</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.signup}>
                    <View>
                       <Text style={styles.text1}> Don't have an account? </Text>
                    </View>
                    <TouchableOpacity>
                       <Text style={styles.text2}> SignUp </Text>
                    </TouchableOpacity>
                </View>
            </View>

            </>)
            :<ActivityIndicator />}
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        fontSize:60,
        fontFamily:'Pattaya-Regular',
        textAlign:'center',
        paddingTop:50,
        color:'#f5565e',
        textShadowColor:'#ddd',
        textShadowOffset:{width:2,height:5},
        textShadowRadius:2
    },
    forms:{
        marginTop:30
    },
    input:{
        paddingHorizontal:17,
        paddingVertical:15,
    },
    textfield:{
        borderBottomWidth:1.6,
        borderColor:'#ddd',
        fontSize:20,
        padding:10
    },
    fp:{
        textAlign:'right',
        paddingRight:20,
        color:'#f5565e'
    },
    buttonWrapper:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    button:{
        width:Dimensions.get('screen').width/1.09,
        backgroundColor:'#f5565e',
        padding:15,
        borderRadius:3
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        fontSize:20

    },
    fb:{
        resizeMode:'contain',
        height:50,
        width:50
        
    },
    fbText:{
        fontSize:18,
        fontWeight:'500',
        marginLeft:7,
        color:'#144d9c'
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:10,
        marginTop:Dimensions.get('screen').height/5,
        borderColor:'#144d9c',
        borderWidth:2
      
    },
    footer:{
        paddingHorizontal:10
    },
    signup:{
        flexDirection:'row',
        padding:10,
        justifyContent:'center'

    },
    text1:{
        fontSize:16,
        color:"#a2a2a3"
    },
    text2:{
        color:'#f5565e',
        fontSize:16,
        fontWeight:'500'
    }
})
