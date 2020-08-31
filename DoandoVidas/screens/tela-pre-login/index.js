import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';
import logo from '../..//assets/Logo.png';
import HowWorks from '../..//assets/tela-pre-login/bolinha-prancheta.png';
import YouKnow from '../..//assets/tela-pre-login/bolinha-olho.png';
import Questions from '../..//assets/tela-pre-login/bolinha-duvidas.png';
import SNT from '../..//assets/tela-pre-login/bolinha-hospital.png';


export default class PreLogin extends React.Component {
    render() {
        return (
            <>
                <View style={styles.header}>
                    <Image style={styles.logo} source={logo} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.saudation}>Olá visitante! Seja bem-vindo</Text>
                    <View style={styles.options}>
                        <View style={styles.up}>
                            <TouchableOpacity onPress={() => console.warn('Como funciona')}>
                                <Image source={HowWorks} />
                            </TouchableOpacity>
                            <Text style={styles.optionTxt}>Como funciona</Text>
                            <TouchableOpacity onPress={() => console.warn('Dúvidas frequentes')}>
                                <Image source={Questions} />
                            </TouchableOpacity>
                            <Text>Dúvidas frequentes</Text>
                        </View>
                        <View style={styles.down}>
                            <TouchableOpacity onPress={() => console.warn('Você sabia?')}>
                                <Image source={YouKnow} />
                            </TouchableOpacity>
                            <Text style={styles.optionTxt}>Você sabia?</Text>
                            <TouchableOpacity onPress={() => console.warn('Saiba mais sobre o SNT')}>
                                <Image source={SNT} />
                            </TouchableOpacity>
                            <Text>Saiba mais sobre o SNT</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => console.warn('Quero ser um doador')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonTxt}>Quero ser um doador</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity onPress={() => console.warn('Já sou um doador')}>
                            <Text style={styles.footerTxt}>Já sou um doador!</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </>
        )
    }

}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    header: {
        backgroundColor: '#1B511C',
        flex: 0.1
    },
    logo: {
        alignSelf: 'flex-end',
        right: 10,
        top: 10,
        paddingLeft: 34,
        paddingRight: 34,
        paddingTop: 31,
        paddingBottom: 20,
        height: 30,
        width: 40
    },
    saudation: {
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontWeight: 'bold',
        color: '#009640'
    },
    options: {
        flex: 0.5,
        marginTop: 20,
        marginBottom: 30,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    up: {
        alignSelf: 'flex-start',
        position: 'absolute',
        alignItems: 'center',
        left: 30
    },
    down: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        right: 30
    },
    optionTxt: {
        marginBottom: 30
    },
    button: {
        marginTop : 30,
        aspectRatio: 4.5,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#AE191D',

    },
    buttonTxt: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        color: 'white'
    },
    footerTxt: {
        alignSelf : 'center',
        marginTop : 30,
        color: 'black',
        fontSize : 15,
        textDecorationLine : 'underline' 
    }

});

