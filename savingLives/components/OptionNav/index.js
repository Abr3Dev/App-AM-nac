import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';

function OptionNav({image, description, navigation}){

    
    return (
        <>
            <View style={styles.container}>
                <Image source={image}/>
                <Text style={styles.text}>{description}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        width : 100,
        alignItems : 'center'
    },
    text : {
        textAlign : 'center'
    }
})

export default OptionNav;