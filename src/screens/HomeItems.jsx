import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HomeItems = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'700'
                    }}>Popular</Text>
                <TouchableOpacity>
                    <Text style={{color:'grey'}}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <View style={styles.column1}>
                    <View style={styles.item}>
                        <Text style={styles.new}>New</Text>
                        <View style={styles.imageWrapper}>
                            <Image 
                                source={require("../../assets/images/n1.png")}
                                resizeMode="contain"
                                style={styles.image}
                            />
                            <Text style={styles.label}>
                                Nike shoes
                            </Text>
                            <Text style={styles.label}>
                                $12.00
                            </Text>
                        </View>
                    </View>

                    <View style={styles.watchWrapper}>
                        <View style={styles.watcWrapper}>
                            <View style={styles.watchContainer}>
                            <Image 
                                source={require("../../assets/images/watch.png")}
                                resizeMode="contain"
                                style={styles.watch}
                            />
                            </View>
                            <Text style={styles.label}>
                                Wrist watch
                            </Text>
                            <Text style={styles.label}>
                                $120.00
                            </Text>
                        </View>
                    </View>
                    
               
                <View style={styles.item1}>

                </View>
            </View> 
            <View style={styles.column2}>
                <View style={styles.bagcontainer}>
                <View style={styles.bagWrapper}>
                            <Image 
                                source={require("../../assets/images/bagpack.png")}
                                resizeMode="contain"
                                style={styles.bag}
                            />

                </View>
                <View style={{
                    paddingTop:15
                }}>
                <Text style={styles.label}>
                    Backpack
                </Text>
                <Text style={styles.label}>
                    $15.00
                </Text>
                </View>
                </View>
            <View style={styles.n2}>
                <Text style={styles.new}>New</Text>
                <View >
                <View style={styles.bagWrapper}>
                    <Image 
                        source={require("../../assets/images/n2.png")}
                        resizeMode="contain"
                        style={styles.n2Image}
                    />

                </View>
                <View style={{
                    paddingTop:15
                }}>
                <Text style={styles.label}>
                    Backpack
                </Text>
                <Text style={styles.label}>
                    $15.00
                </Text>
                </View>
                </View>
                </View>
                <View style={styles.item}>

                </View>
            </View>
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
    },
    row:{
        marginHorizontal:10,
        height:Dimensions.get('screen').height,
        width:Dimensions.get('screen').width-10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    column1:{
        marginTop:10,
        width:Dimensions.get('screen').width/2.1,
    },
    column2:{
        marginTop:10,
        width:Dimensions.get('screen').width/2.1

    },
    item:{
        width:'95%',
        backgroundColor:'silver',
        height:200,
        borderRadius:10,
        marginBottom:10
    },
    watcWrapper:{
        width:'95%',
        backgroundColor:'#e8d776',
        height:200,
        borderRadius:10,
        marginBottom:10
    },
    item1:{
        width:'95%',
        backgroundColor:'green',
        height:230,
        borderRadius:10,
        marginBottom:10


    },
    bagcontainer:{
        width:'95%',
        backgroundColor:'#8ad9ed',
        height:230,
        borderRadius:10,
        marginBottom:10


    },
    new:{
        color:'black',
        padding:5,
        textAlign:'center',
        backgroundColor:'white',
        width:50,
        margin:10,
        borderRadius:10
    },
    imageWrapper:{
        // justifyContent:'center',
        // alignItems:'center'
    },
    image:{
        width:150,
        height:150,
        marginTop:-50
    },
    watch:{
        width:120,
        height:120,
        marginTop:10
    },
    label:{
        fontSize:17,
        textAlign:'left',
        fontWeight:'500',
        paddingLeft:10
     },
     bag:{
        width:150,
        height:150,
     },
     n2Image:{
        width:150,
        height:150,
        marginTop:-30
     },
     bagWrapper:{
         justifyContent:'center',
         alignItems:'center'
     },
     watchContainer:{
         justifyContent:'center',
         alignItems:'center',
         marginBottom:15
     },
     n2:{
        width:'95%',
         backgroundColor:'#fff',
         height:230,
         borderRadius:10,
         marginBottom:10
     }



})
