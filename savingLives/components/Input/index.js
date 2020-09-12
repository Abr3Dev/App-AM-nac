import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, Dimensions} from 'react-native';

const widthInput = Dimensions.get('screen').width /100 * 80

function Input({placeholder, borderColor}){
    return (
        <>
            <TextInput
                placeholder={placeholder}
                style={[styles.borderColor, {borderColor : borderColor}]}
            />
        </>
    )
}
export default Input;

const styles = StyleSheet.create({
    borderColor : {
        borderWidth : 1,
        width : widthInput
    }
})