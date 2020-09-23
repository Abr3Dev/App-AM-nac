import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {faUsers as family} from '@fortawesome/free-solid-svg-icons';


//Arrumar depois : colocar apenas o STYLE... retirar o height, width, background, etc
export default function Topic({icon, text, onPress, backgroundText, size, style}){
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={[styles.centerIcon, style]}>
            <FontAwesomeIcon icon={icon} size={size} color={'white'}/>
        </View>
        <Text style={[styles.text, {color : backgroundText}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        alignItems : 'center'
    },
    text : {
        width : 80,
        textAlign : 'center'
    },  
    centerIcon : {
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'green',
        
        borderRadius : 100
    }
})