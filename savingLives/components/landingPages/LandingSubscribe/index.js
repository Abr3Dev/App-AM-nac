import React from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, Dimensions, ScrollView, ImageBackground} from 'react-native';
import logo from '../../../assets/images/hold-heart.png';

const width = Dimensions.get('screen').width
const height = Dimensions.get('window').height
const sizeLtetter = width/100 * 70;
const heightTree = height / 2;

function LandingSubscribe(){
    return (
        <View>
            <ImageBackground source={logo} style={styles.background}>
            <View style={styles.container}>
            <Text style={styles.sentence}>A doação de órgãos é um ato nobre que pode salvar vidas</Text>
            <Text style={styles.mainText}>Faça seu Cadastro</Text>
        </View>
            </ImageBackground>
        </View>
    )
}

export default LandingSubscribe;


const styles = StyleSheet.create({
    background : {
        flex : 1,
        resizeMode : 'cover',
        width : width
    },
    container : {
        height : height / 100 * 60,
        alignItems : 'center',
        alignSelf : 'center',
        marginTop : 24,
        width : width / 100 * 80,
        justifyContent : 'space-around'
        
    },
    sentence : {
        color : '#FFFFFF',
        fontSize : 20,
        textAlign : 'center',
        lineHeight : 28
    },
    mainText : {
        borderColor : 'white',
        borderWidth : 1,
        paddingHorizontal : 16,
        paddingVertical: 12,
        fontSize : 32,
        textAlign : 'center',
        color : 'white'
    },
    footer : {
        flexDirection : 'row', 
         justifyContent : 'center',
         alignItems : 'center',
         width : width,
         height : height / 3
    },

    jump : {
        position : 'absolute',
        bottom : 16,
        right : 16,
        padding : 12,
        borderWidth : 1,
        textAlign : 'center',
        width : 100,
        backgroundColor : '#009640',
        borderColor : '#009640',
        color : 'white',
    }
});

