import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Input from '../../components/Input';
import DatePicker from 'react-native-datepicker';
import { Picker } from '@react-native-community/picker';
import MainButton from '../../components/MainButton';
import Title from '../../components/Title'


const width = Dimensions.get('screen').width / 100 * 90


export default class MinhasInformacoes extends React.Component {
    render() {
        return (
            <View>
                <Title title={"Minhas informações"} />
                <View style={styles.container}>
                    <Input
                        placeholder="Nome"
                        borderColor='#018738'
                        label={'Digite seu nome: '}
                        // onKeyPress={this.onPressNome}
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
                                maxDate={"05-01-1940"}
                                date={"05-01-1940"}
                                confirmBtnText="Confirmar"
                                cancelBtnText="Cancel"
                                // onDateChange={this.selectDate}
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
                            <Picker
                                selectedValue={"sexo"} style={styles.picker}
                                
                            // onValueChange={this.onPressSexo}
                            >
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
                    // onKeyPress={this.onPressSenha}
                    />
                    <MainButton text={'Salvar informações'} bgColor={'#009640'} textColor={'white'}/>

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({

    smallInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        width: width,
        alignSelf: 'center',
        flexDirection: 'column',
        height: 400,
        justifyContent: 'space-between',
    },
    picker: {
        height: 35,
        width: 150,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#018738',
    },
    label: {
        fontSize: 16,
        marginBottom: 6
    },

})