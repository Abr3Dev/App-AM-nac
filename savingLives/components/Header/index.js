import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import logo from '../../assets/Logo.png'


function Header({text, sizeText}){
    return (
        <>
        <View style={styles.container}>
            <Text style={{color : 'white', fontSize : sizeText}}>{text}</Text>
             <Image style={styles.logo} source={logo} height={40} width={55}/>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : '#1B511C',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 12
    },
    text :{
        color : 'white'
    }
})
export default Header;