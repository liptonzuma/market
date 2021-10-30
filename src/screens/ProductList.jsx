import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import AppBar from '../utils/AppBar';
import Search from '../utils/Search'
import data  from '../items.json'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const ProductList = () => {
    return (
        <View style={styles.container}>
            <AppBar screen="Shop"/>
            <View style={styles.Search}>
            <Search/>
            </View>
            <View style ={styles.label}>
                <Text style={styles.big}>Available Products</Text>
                <Pressable style={styles.button}>
                    <Text style={{color:'#383836'}}>sort by <AntDesign name="down" size={15} color="#383836" /></Text>
                </Pressable>
            </View>
            <ScrollView>
                
            </ScrollView>
        </View>
    )
}

export default ProductList;

const styles = StyleSheet.create({
    container:{
        flex:1,  
    },
    Search:{
        marginTop:80
    },
    label:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        alignItems:'center'
    },
    big:{
        fontSize:20,
        fontWeight:'700'
    },
    button:{
        backgroundColor:'white',
        padding:7
    }

})