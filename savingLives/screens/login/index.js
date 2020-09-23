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



    //Não fizemos o envio dos dados, portanto, os inputs não estão funcionando.
    //Mais pra frente vamos mudar esta classe para poder fazer as devidas alterações e requisições. Sei que não está certo.
    //O botão encaminhará para a próxima tela, que fará uma requisição trazendo um usuário aleatório 


    //ARRUMAR DEPOIS
    render() {
        return (
            <ScrollView>
                <Header />
                <View style={styles.container}>
                    <View style={styles.image}>
                        <Image style={styles.logo} source={logo} height={80} width={100} />
                    </View>
                    <View style={styles.form}>
                        <OutlinedTextField label='E-mail' baseColor={'#1D6F40'} />
                        <OutlinedTextField label='Senha' baseColor={'#1D6F40'} />
                        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                    </View>
                    <MainButton text='Entrar na minha conta' bgColor={'#009640'} textColor='white'/>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        width: width,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf : 'center',
        height : 500
    },
    image : {
        alignSelf : 'center'
    },
    form: {
        height : 200,
        justifyContent : 'space-between',
        flexDirection : 'column',
    },
    forgotPassword : {
        alignSelf : 'center'
    }
});