import React from 'react';
import {View, Text, Dimensions, StyleSheet, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


//MUDAR PARA UM BOTÃO CERTO COM EVENTO DE CLICK
function MainButton({text, bgColor, textColor, onPress}){
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor : bgColor, borderColor : bgColor}]} onPress={onPress}>
            <Text style={{color : textColor, textAlign : 'center'}}>{text}</Text>
            
        </TouchableOpacity>
    )
}

export default MainButton;

const widthInput = Dimensions.get('screen').width/100 * 70

const styles = StyleSheet.create({
    container :{
        borderWidth : 1,
        width : widthInput,
        paddingVertical : 16,
        marginVertical : 16,
        borderRadius : 8,
        alignSelf : 'center'
    },
});