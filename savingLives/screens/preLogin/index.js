import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';
import logo from '../..//assets/Logo.png';
import HowWorks from '../..//assets/tela-pre-login/bolinha-prancheta.png';
import YouKnow from '../..//assets/tela-pre-login/bolinha-olho.png';
import Questions from '../..//assets/tela-pre-login/bolinha-duvidas.png';
import SNT from '../..//assets/tela-pre-login/bolinha-hospital.png';



export default class PreLogin extends React.Component {

    navigateOption1 = () =>{
        const {navigation : {navigate}} = this.props;
        navigate('ComoFunciona',{
        });
    }

    navigateOption2 = () =>{
        const {navigation : {navigate}} = this.props;
        navigate('VoceSabia',{
    });
    }
    navigateOption3 = () =>{
        const {navigation : {navigate}} = this.props;
        navigate('Login',{
        });
    }
    //As opções 1 e 2 são apenas para ir e voltar. não tem saída daquelas telas. 
    //A opção 3 encaminha para a tela de login, que, emcaminhará para a tela principal.

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
                            <TouchableOpacity onPress={() => this.navigateOption1()}>
                                <Image source={HowWorks} />
                            </TouchableOpacity>
                            <Text style={styles.optionTxt}>Como funciona</Text>
                            <TouchableOpacity onPress={() => console.warn('Dúvidas frequentes')}>
                                <Image source={Questions} />
                            </TouchableOpacity>
                            <Text>Dúvidas frequentes</Text>
                        </View>
                        <View style={styles.down}>
                            <TouchableOpacity onPress={() => this.navigateOption2()}>
                                <Image source={YouKnow} />
                            </TouchableOpacity>
                            <Text style={styles.optionTxt}>Você sabia?</Text>
                            <TouchableOpacity onPress={() => console.warn('Saiba mais sobre o SNT')}>
                                <Image source={SNT} />
                            </TouchableOpacity>
                            <Text>Saiba mais sobre o SNT</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.navigateOption3()}>
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
        flex: 0.9,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    header: {
        backgroundColor: '#1B511C',
        paddingVertical : 15
    },
    logo: {
        alignSelf: 'flex-end',
        marginLeft : 12,
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
        color: '#009640',

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

