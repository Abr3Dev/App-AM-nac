import React from 'react';
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';
import logo from '../..//assets/Logo.png';
import HowWorks from '../..//assets/tela-pre-login/bolinha-prancheta.png';
import YouKnow from '../..//assets/tela-pre-login/bolinha-olho.png';
import Questions from '../..//assets/tela-pre-login/bolinha-duvidas.png';
import SNT from '../..//assets/tela-pre-login/bolinha-hospital.png';


export default class PreLogin extends React.Component{
    render(){
        return( 
            <>
                <View style={styles.header}>
                    <Image style={styles.logo} source={logo} height={40} width={50}/>
                </View>   
                <View style={styles.container}>
                    <Text style={styles.saudation}>Olá visitante! Seja bem-vindo</Text>    
                </View>

                <View style={styles.options}>
                    <View style={styles.option}>
                        <Image source={HowWorks}/>
                        <Text>Você sabia?</Text>
                    </View>

                    <View style={styles.option} >
                        <Image source={YouKnow}/>
                        <Text>Dúvidas frequentes</Text>
                    </View>
                </View>
                <View style={styles.options}>
                    <View style={styles.option} >
                        <Image source={Questions}/>
                        <Text>Saiba mais sobre o SNT</Text>
                    </View>

                    <View style={styles.option}>
                        <Image source={SNT}/>
                        <Text>Como funciona</Text>
                    </View>
                    </View>
            </>
        )
    }

}



const styles = StyleSheet.create({

    container : {
        flex: 1,
        flexDirection : 'column',
        justifyContent : 'space-between'
    },
    header : {
        backgroundColor : '#1B511C',
        flex: 0.10
    },
    image : {
        alignItems : "center",
        marginTop : 44
    },
    logo : {
        alignSelf : 'flex-end',
        alignItems : 'center',
    },
    saudation : {
        alignSelf : 'center',
        marginTop : 8,
        fontWeight : 'bold',
        color : '#009640',

    },
    options : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-around'
    },
    option : {
       alignItems : 'center'

    }
});

