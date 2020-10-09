import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function EditButton({icon, text, colorButton, onClick, disabled}){
    return(
        <TouchableOpacity onPress={onClick} style={[styles.container, {backgroundColor : colorButton}]} disabled={disabled}>
            
                <Text style={styles.text}>{text}</Text>
                <FontAwesomeIcon icon={icon} color='white' size={24}/>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        borderRadius : 5,
        flexDirection : 'column',
        justifyContent : 'space-around',
        alignItems : 'center',
        padding : 8,
        width : 130
    },
    text : {
        marginBottom : 4,
        color : 'white'
    }
})