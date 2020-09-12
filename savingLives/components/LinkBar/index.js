import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faChevronRight as rightArrow} from '@fortawesome/free-solid-svg-icons';

const width = Dimensions.get('screen').width / 100 * 90

function LinkBar({ link, title }){
    return (
        <>
        <View style={styles.container}>
    <Text style={styles.marginItem}>{title}</Text>
            <FontAwesomeIcon
                icon={rightArrow}
                style={styles.marginItem}/>
        </View>
        </>

    )
}

export default LinkBar;

const styles = StyleSheet.create({
    container : {
        borderColor : '#5EAF60',
        borderWidth : 1,
        width : width,
        justifyContent : 'space-between',
        flexDirection : 'row',
        alignSelf : 'center',
        paddingVertical : 16,
    },  
    marginItem : {
        marginHorizontal : 8,
        fontSize : 16
    }
});