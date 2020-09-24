import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import logo from '../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft as left } from '@fortawesome/free-solid-svg-icons';

const width = Dimensions.get('screen').width / 100 * 90

function Header({ text, sizeText }) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.resize}>
                    <FontAwesomeIcon icon={left} color={'white'} />
                    <Text style={[styles.title, { color: 'white', fontSize: sizeText }]}>{text}</Text>
                    <Image style={styles.logo} source={logo} height={40} width={55} />
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1B511C',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    resize : {
        alignItems : 'center',
        marginLeft : 16,
        width : width,   
        alignSelf : 'center',
        justifyContent : 'space-between',
        flexDirection: 'row',
    },  
    text: {
        color: 'white'
    },
    title: {
        marginLeft: -140
    }
})
export default Header;