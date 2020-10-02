import React from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import logo from '../../assets/Logo.png';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import MainButton from '../../components/MainButton';

const width = Dimensions.get('screen').width / 100 * 90
const height = Dimensions.get('window').height;

export default class Login extends React.Component {

    click = () =>{
        console.log('click')
    }

    //ARRUMAR DEPOIS
    render() {
        return (
            
         
                <View style={styles.container}>
                        <Image style={styles.logo} source={logo} height={80} width={100} />
                        <OutlinedTextField label='E-mail' baseColor={'#1D6F40'} />
                        <OutlinedTextField label='Senha' baseColor={'#1D6F40'} />
                        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                    <MainButton text='Entrar na minha conta' bgColor={'#009640'} textColor='white' onPress={() =>{console.log('Login')}}/>
                </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        width : width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf : 'center',
    },
    logo : {
        alignSelf : 'center'
    },
    form: {
        justifyContent : 'space-between',
        flexDirection : 'column',
    },
    forgotPassword : {
        alignSelf : 'center'
    }
});