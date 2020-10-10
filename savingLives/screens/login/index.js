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
const height = Dimensions.get('window').height / 100 * 90;

export default class Login extends React.Component {


    handleLogin = () => {
        const { navigation: { navigate }, } = this.props
        navigate('TelaPrincipal')
    }

    handleChangepass = () =>{
        const { navigation : {navigate},} = this.props
        navigate('RedefinirSenha')
    }


    render() {
        return (
            <ScrollView style={styles.screen} keyboardDismissMode={'on-drag'} >
                <View style={styles.container}>
                    <Image style={styles.logo} source={logo} height={80} width={100} />
                    <OutlinedTextField label='E-mail' baseColor={'#1D6F40'} inputContainerStyle={{ backgroundColor: 'white' }} />
                    <OutlinedTextField label='Senha' baseColor={'#1D6F40'} inputContainerStyle={{ backgroundColor: 'white' }} />
                    <Text style={styles.forgotPassword} onPress={this.handleChangepass}>Esqueci minha senha</Text>
                    <MainButton text='Entrar na minha conta' bgColor={'#009640'} textColor='white' onPress={this.handleLogin} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    screen : {
        width : Dimensions.get('screen').width,
        flex: 1,
        backgroundColor: '#ECECEC'
    },
    container: {
        width: width,
        height : height,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf: 'center',
        
    },
    logo: {
        alignSelf: 'center'
    },
    form: {
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    forgotPassword: {
        alignSelf: 'center',
        color : '#1D6F40'
    }
});