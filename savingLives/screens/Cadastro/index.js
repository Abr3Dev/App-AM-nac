import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, } from 'react-native';
import MainButton from '../../components/MainButton';
import Title from '../../components/Title';
import {helpCpf} from '../../Helpers/index'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';

import api from '../../api/api';

const width = Dimensions.get('screen').width / 100 * 90


//Mudar as funcões recebedoras dos valores, pois está muito repetitivo. 
//Fazer a chamada da API após o click no cadastrar. Tem que passar de uma validação. Será criada no helpers
export default class Cadastro extends React.Component {
    state = {
        name: 'João Pedro Albuquerque dos Santos',
        cpf: '504.150.748-19',
        email: 'joao01@hotmail.com',
        birthDate: '2020-12-12', // mudar lógica para date
        gender: 'Masculino',
        password : '12345678',
        errors : []
    }
    keyCpf = (cpf) =>{
        
        let result = helpCpf(cpf);
        this.setState({
           cpf : result
        });
    }

    handleSubscribe = () =>{
            console.log(this.state)
            
            api.post(`doandovidas/register`, {
                name: this.state.name,
                email: this.state.email,
                cpf: this.state.cpf,
                password: this.state.password,
                birthDate: this.state.birthDate,
                gender: this.state.gender
            })
            .then(resp =>{
                const {
                navigation : {navigate},
            } = this.props;
                navigate('Login', {email : this.state.email, password : this.state.password});
            }).catch( err =>{
                console.log('deu ruim');
                console.log(err.response.data);
                this.setState({errors : err.response.data.errors[0]});
            });
     

         
        
    }
    render() {
        const { name, cpf, email, birthDate, gender, password, errors } = this.state
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
                    value={name}
                    onChangeText={(value) => {this.setState({name : value})}}
                    error={errors}

                />
                <OutlinedTextField 
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='CPF' 
                    baseColor={'#1D6F40'} 
                    value={cpf}
                    onChangeText={(value) => {this.setState({cpf : value})}}
                    
                    
                    // formatText={() =>{}} -- Colocar a máscara do CPF
                />
                <OutlinedTextField 
                    label='E-mail' 
                    baseColor={'#1D6F40'} 
                    inputContainerStyle={{backgroundColor : 'white'}}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(value)=>{this.setState({email : value})}}
                    // formatText={() =>{}} -- Colocar a máscara do email
                />
                <OutlinedTextField 
                    label='Data de nascimento' 
                    baseColor={'#1D6F40'} 
                    inputContainerStyle={{backgroundColor : 'white'}} 
                    keyboardType='decimal-pad'
                    value={birthDate}
                    onChangeText={(value) => {this.setState({birthDate : value})}}
                />
                <OutlinedTextField 
                    label='Sexo' 
                    baseColor={'#1D6F40'} 
                    inputContainerStyle={{backgroundColor : 'white'}} 
                    value={gender}
                    onChangeText={(value) => {this.setState({gender : value})}}
                />
                <OutlinedTextField 
                    label='Senha' 
                    baseColor={'#1D6F40'} 
                    inputContainerStyle={{backgroundColor : 'white'}}
                    value={gender}
                    onChangeText={(value) => {this.setState({password : value})}}
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