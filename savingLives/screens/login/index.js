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

import api from '../../api/api';

const width = Dimensions.get('screen').width / 100 * 90
const height = Dimensions.get('window').height / 100 * 90;

export default class Login extends React.Component {

    state = {
        email : '',
        password : '',
        error : false,
        textError : ''
    }

    handleLogin = () => {
        const {email, password} = this.state
         api.post(`doandovidas/user/${email}/${password}`).then(resp =>{
            const { navigation: { navigate }, } = this.props
            navigate('TelaPrincipal', {userData : resp.data.data});
            
         }).catch(err =>{
            console.log('Erros', err.response.data);
             this.setState({error : true, textError : ' '});
         });
    }

    handleChangepass = () => {
        const { navigation : {navigate},} = this.props
        navigate('RedefinirSenha',);
    }

    render() {
        const {textError, email, password,  error} = this.state;
        // const {email, password} = params !== undefined  ? params : this.state;

        return (
            <ScrollView style={styles.screen} keyboardDismissMode={'on-drag'} >
                <View style={styles.container}>
                    <Image style={styles.logo} source={logo} height={80} width={100} />
                    <OutlinedTextField 
                        label='E-mail' 
                        baseColor={'#1D6F40'}
                        value={email}
                        inputContainerStyle={{ backgroundColor: 'white' }} 
                        onChangeText={(value) => {this.setState({email : value})}}
                        error={textError}
                    />
                    <OutlinedTextField 
                        label='Senha' 
                        baseColor={'#1D6F40'} 
                        value={password}
                        inputContainerStyle={{ backgroundColor: 'white' }} 
                        onChangeText={(value) => {this.setState({password : value})}}
                        error={textError}
                    />
                    {error && <Text style={styles.error} onPress={() =>{this.setState({textError : '', error : false})}}>Usuário não encontrado</Text>}
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
    },
    error : {
        fontSize : 16,
        borderColor : '#CE0000',
        borderWidth : 2,
        borderRadius : 5,
        backgroundColor : '#D93B3B',
        width : width,
        paddingVertical : 16,
        color : 'white',
        textAlign : 'center'
    }
});