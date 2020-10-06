import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('screen').width / 100 * 90

export default function Title({title, style}){
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container :{
        
        alignSelf : 'center',
        borderBottomColor :'#018738',
        paddingVertical : 16,
        paddingBottom : 24
    },
    title : {
        color : '#018738',
        textAlign : 'center',
        fontSize : 24,
        borderBottomColor :'#018738',
        borderBottomWidth : 0.3,
    }

})