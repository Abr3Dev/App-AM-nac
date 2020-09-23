import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, } from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import DatePicker from 'react-native-datepicker'
import MainButton from '../../components/MainButton'
import { Picker } from '@react-native-community/picker';
import Title from '../../components/Title'

const width = Dimensions.get('screen').width / 100 * 90


//Mudar as funcões recebedoras dos valores, pois está muito repetitivo. 
//Fazer a chamada da API após o click no cadastrar. Tem que passar de uma validação. Será criada no helpers
export default class Cadastro extends React.Component {
    state = {
        nome: '',
        cpf: '',
        dataNascimento: '',
        sexo: 'Masculino',
        Estado: '',
        cidade: '',
        email: '',

    }
    componentDidMount() {
        const day = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();

        this.setState({
            dataNascimento: day + '-' + month + '-' + year
        });
    }

    onPressNome = (value) => {
        this.setState({
            nome: value
        })
    }
    onPressEmail = (value) => {
        this.setState({
            email: value
        })
    }
    onPressSenha = (value) => {
        this.setState({
            senha: value
        })
    }

    onPressSexo = (value) => {
        console.log(value)
        this.setState({
            sexo: value
        })
    }

    selectDate = (date) => {
        this.setState({
            dataNascimento: date
        });
    }


    render() {
        const { nome, cpf, dataNascimento, sexo, Estado, cidade } = this.state
        return (
            <ScrollView style={{ backgroundColor: '#ECECEC' }}>
                <Header text={'Cadastro'} />
                <View style={styles.containerTitle}>
                    <Text style={styles.titles}>Seja bem vindo!</Text>
                    <Text style={styles.subtitle}>Cadastre-se e envie uma mensagem!</Text>
                </View>
                <Title title={"Cadastro pessoal"} />
                <View style={styles.container}>
                    <Input
                        placeholder="Nome"
                        borderColor='#018738'
                        label={'Digite seu nome: '}
                        onKeyPress={this.onPressNome}
                        key={'nome'}
                    />

                    <Input
                        placeholder="E-mail"
                        borderColor='#018738'
                        label={'Digite seu E-mail: '}
                        onKeyPress={this.onPressEmail}
                    />

                    <View style={styles.smallInputs}>

                        {/* Trocar depois, para o type select */}
                        <View style={styles.containerInput}>
                            <Text style={styles.label}>Data de nascimento:</Text>
                            <DatePicker
                                style={styles.date}
                                mode="date"
                                placeholder="data de nascimento"
                                format="DD-MM-YYYY"
                                minDate="05-01-1940"
                                maxDate={dataNascimento}
                                date={dataNascimento}
                                confirmBtnText="Confirmar"
                                cancelBtnText="Cancel"
                                onDateChange={this.selectDate}
                                customStyles={{
                                    dateIcon: {
                                        display: 'none'
                                    },
                                    dateInput: {
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        backgroundColor: '#FFFFFF',
                                        borderColor: '#018738',
                                        height: 35,
                                        width: 100,
                                    },
                                }}
                            />
                        </View>
                        <View style={styles.containerInput}>
                            <Text style={styles.label}>Sexo:</Text>
                            {/* Trocar isso depois, esse componente está muito ruim */}
                            <Picker selectedValue={sexo} style={styles.picker} onValueChange={this.onPressSexo}>
                                <Picker.Item label="Masculino" value="Masculino" />
                                <Picker.Item label="Feminino" value="Feminino" />
                                <Picker.Item label="Outro" value="Outro" />
                            </Picker>
                        </View>
                    </View>
                    <Input
                        placeholder="Senha"
                        borderColor='#018738'
                        label={'Digite sua senha: '}
                        onKeyPress={this.onPressSenha}
                    />
                    <MainButton text={'Cadastrar'} bgColor={'#3FB06F'} textColor={'white'} />
                </View>
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