import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, Dimensions} from 'react-native';

const widthInput = Dimensions.get('screen').width /100 * 90


//Generalizar esse input, para ser de tipos diferentes, como numbero ou data. etc.. Mudar o tipo de retorno conforme o parâmetro passado
function Input({placeholder, borderColor, onKeyPress, label, style, password}){
    return (
        <View style={[style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={[styles.borderColor, {borderColor : borderColor}]}
                onChangeText={onKeyPress}
                secureTextEntry={password}
            />
        </View>
    )
}
export default Input;

const styles = StyleSheet.create({
    borderColor : {
        borderWidth : 1,
        width : widthInput,
        backgroundColor : '#FFFFFF',
        borderRadius : 5,
        height : 35,
        
    },
    label : {
        fontSize : 16,
        marginBottom : 6
    }
})