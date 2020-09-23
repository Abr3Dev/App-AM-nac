import React from 'react';
import {View, Text, Dimensions, StyleSheet, Button} from 'react-native';


//MUDAR PARA UM BOTÃO CERTO COM EVENTO DE CLICK
function MainButton({text, bgColor, textColor}){
    return (
        <View style={[styles.container, {backgroundColor : bgColor, borderColor : bgColor}]}>
            <Text style={{color : textColor, textAlign : 'center'}}>{text}</Text>
            
        </View>
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