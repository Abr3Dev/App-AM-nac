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


    click = () => {
        const { navigation: { navigate }, } = this.props
        navigate('TelaPrincipal')
    }
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={logo} height={80} width={100} />
                    <OutlinedTextField label='E-mail' baseColor={'#1D6F40'} inputContainerStyle={{ backgroundColor: 'white' }} />
                    <OutlinedTextField label='Senha' baseColor={'#1D6F40'} inputContainerStyle={{ backgroundColor: 'white' }} />
                    <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                    <MainButton text='Entrar na minha conta' bgColor={'#009640'} textColor='white' onPress={this.click} />
                </View>
            </View>
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
        flex: 1,
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
        alignSelf: 'center'
    }
});