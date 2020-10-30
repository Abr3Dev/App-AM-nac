import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, } from 'react-native';
import MainButton from '../../components/MainButton';
import Title from '../../components/Title';
import { formValidator } from '../../Helpers/FormValidatorRegister' 
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
            name: 'Raphael Santantonio',
            cpf: '427.004.328-86',
            email: 'raphaelcamar@outlook.com',
            birthDate: '14/03/1999',
            gender: 'Masculino',
            password: '12345678',
            errors: []
    }

    handleSubscribe = () => {
        const {name, cpf, email, birthDate, gender, password} =  this.state;
        const user = {
            name,
            cpf,
            email,
            birthDate,
            gender,
            password
        }
        const result = formValidator(user);
        this.setState({
            errors : result
        });

        api.post(`doandovidas/register`, {
            name: this.state.name,
            email: this.state.email,
            cpf: this.state.cpf,
            password: this.state.password,
            birthDate: this.state.birthDate,
            gender: this.state.gender
        })
            .then(resp => {
                const {
                    navigation: { navigate },
                } = this.props;
                navigate('Login', {success : true});
            }).catch(err => {
                const arrErr = [null, err.response.data.errors[0], err.response.data.errors[1], null, null, null];
                this.setState({
                    errors : arrErr
                })
                
            });
    }
    render() {
        const { name, cpf, email, birthDate, gender, password, errors } = this.state
        return (
            
            <ScrollView style={{ backgroundColor: '#ECECEC' }} keyboardDismissMode={'on-drag'} >
                {/* <Header text={'Cadastro'} /> */}
                <View style={styles.containerTitle}>
                {/* <Success message="Cadastro Realizado com sucesso!"/> */}
                    <Text style={styles.titles}>Seja bem vindo!</Text>
                    <Text style={styles.subtitle}>Cadastre-se e envie uma mensagem!</Text>
                </View>
                <Title title={"Cadastro pessoal"} />
                <View style={styles.container}>
                    <OutlinedTextField
                        inputContainerStyle={{ backgroundColor: 'white'}}
                        containerStyle={{marginBottom : 24 }}
                        label='Nome completo'
                        baseColor={'#1D6F40'}
                        value={name}
                        onChangeText={(value) => { this.setState({name : value})}}
                        error={errors == null ? '' : errors[0]}
                        placeholder='Ex: Raphael Santantonio'
                    />
                    <OutlinedTextField
                        inputContainerStyle={{ backgroundColor: 'white' }}
                        containerStyle={{marginBottom : 24 }}
                        label='CPF'
                        baseColor={'#1D6F40'}
                        value={cpf}
                        onChangeText={(value) => { this.setState({cpf: value }) }}
                    //  formatText={() =>{}} -- Colocar a máscara do CPF
                        error={errors == null ? '' : errors[1]}
                        placeholder='Ex : 427.123.456-00'
                    />
                    <OutlinedTextField
                        inputContainerStyle={{ backgroundColor: 'white' }}
                        containerStyle={{marginBottom : 24 }}
                        label='E-mail'
                        baseColor={'#1D6F40'}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={(value) => { this.setState({email: value}) }}
                    //  formatText={() =>{}} -- Colocar a máscara do email
                        error={errors == null ? '' : errors[2]}
                        placeholder='maria@gmail.com'
                    />
                    <OutlinedTextField
                        inputContainerStyle={{ backgroundColor: 'white' }}
                        containerStyle={{marginBottom : 24 }}
                        label='Data de nascimento'
                        baseColor={'#1D6F40'}
                        keyboardType='decimal-pad'
                        value={birthDate}
                        placeholder='Ex : AAAA-MM-DD'
                        onChangeText={(value) => { this.setState({birthDate : value}) }}
                        error={errors == null ? '' : errors[3]}
                    />
                    <OutlinedTextField
                        inputContainerStyle={{ backgroundColor: 'white' }}
                        containerStyle={{marginBottom : 24 }}
                        label='Sexo'
                        baseColor={'#1D6F40'}
                        value={gender}
                        onChangeText={(value) => { this.setState({gender: value }) }}
                        error={errors == null ? '' : errors[4]}
                        placeholder='Ex : Masculino'
                    />
                    <OutlinedTextField
                        inputContainerStyle={{ backgroundColor: 'white' }}
                        containerStyle={{marginBottom : 24 }}
                        label='Senha'
                        baseColor={'#1D6F40'}
                        value={password}
                        onChangeText={(value) => { this.setState({password: value }) }}
                        error={errors == null ? '' : errors[5]}
                        placeholder='Ex : 123abcsenha'
                    />
                </View>
                <MainButton text={'Cadastrar'} bgColor={'#3FB06F'} textColor={'white'} onPress={this.handleSubscribe} />
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
        height: 600,
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
    label: {
        fontSize: 16,
        marginBottom: 6
    }
});