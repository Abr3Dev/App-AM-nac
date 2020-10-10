import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, } from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import DatePicker from 'react-native-datepicker';
import MainButton from '../../components/MainButton';
import { Picker } from '@react-native-community/picker';
import Title from '../../components/Title';
import {helpCpf} from '../../Helpers/index'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';

const width = Dimensions.get('screen').width / 100 * 90


//Mudar as funcões recebedoras dos valores, pois está muito repetitivo. 
//Fazer a chamada da API após o click no cadastrar. Tem que passar de uma validação. Será criada no helpers
export default class Cadastro extends React.Component {
    state = {
        nome: '',
        cpf: '',
        email: '',
        dataNasc: '',
        sexo: '',
        senha : ''
    }
    keyCpf = (cpf) =>{
        
        let result = helpCpf(cpf);
        this.setState({
           cpf : result
        }); 
    }

    handleSubscribe = () =>{
        const { nome, cpf, dataNasc, sexo, senha } = this.state
        const {
            navigation : {navigate},
        } = this.props;
        navigate('TelaPrincipal')
        
    }
    render() {
        const { nome, cpf, email, dataNasc, sexo, senha } = this.state
        return (
            <ScrollView style={{ backgroundColor: '#ECECEC' }} keyboardDismissMode={'on-drag'} >
                {/* <Header text={'Cadastro'} /> */}
                <View style={styles.containerTitle}>
                    <Text style={styles.titles}>Seja bem vindo!</Text>
                    <Text style={styles.subtitle}>Cadastre-se e envie uma mensagem!</Text>
                </View>
                <Title title={"Cadastro pessoal"} />
                <View style={styles.container}>
                <OutlinedTextField 
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='Nome completo' 
                    baseColor={'#1D6F40'} 
                />
                <OutlinedTextField 
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='CPF' 
                    baseColor={'#1D6F40'} 
                    value={cpf}
                    onChangeText={(value) => {this.keyCpf(value)}}
                />
                <OutlinedTextField 
                    label='E-mail' 
                    baseColor={'#1D6F40'} 
                    inputContainerStyle={{backgroundColor : 'white'}}
                    keyboardType='email-address'
                />
                <OutlinedTextField 
                    label='Data de nascimento' 
                    baseColor={'#1D6F40'} 
                    inputContainerStyle={{backgroundColor : 'white'}} 
                    keyboardType='decimal-pad'
                />
                <OutlinedTextField 
                    label='Sexo' 
                    baseColor={'#1D6F40'} 
                    inputContainerStyle={{backgroundColor : 'white'}} 
                />
                <OutlinedTextField 
                    label='Senha' 
                    baseColor={'#1D6F40'} 
                    inputContainerStyle={{backgroundColor : 'white'}}  
                /> 
                </View>
                <MainButton text={'Cadastrar'} bgColor={'#3FB06F'} textColor={'white'} onPress={this.handleSubscribe}/>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    containerTitle: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    titles: {
        width: width,
        alignSelf: 'center',
        textAlign: 'center',
        paddingVertical: 16,
        fontSize: 24,
        color: '#707070',
        fontWeight: '600'
    },
    subtitle: {
        paddingVertical: 16,
        fontWeight: '600',
        color: '#707070'
    },
    smallInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        width: width,
        alignSelf: 'center',
        flexDirection: 'column',
        height: 380,
        justifyContent: 'space-between'

    },
    picker: {
        height: 35,
        width: 150,
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "dashed",
        backgroundColor: '#FFFFFF',
        borderColor: '#018738',
    },
    label : {
        fontSize : 16,
        marginBottom : 6
    }
});