import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Input from '../../components/Input';
import DatePicker from 'react-native-datepicker';
import { Picker } from '@react-native-community/picker';
import MainButton from '../../components/MainButton';
import Title from '../../components/Title';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';


const width = Dimensions.get('screen').width / 100 * 90


export default class MinhasInformacoes extends React.Component {
    render() {
        return (
            <View>
                <Title title={"Minhas informações"} />
                <View style={styles.container}>
                <OutlinedTextField
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='Nome' 
                    baseColor={'#1D6F40'} 
                />
                <OutlinedTextField
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='E-mail' 
                    baseColor={'#1D6F40'} 
                />
                <OutlinedTextField
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='Data de nascimento' 
                    baseColor={'#1D6F40'} 
                />
                <OutlinedTextField
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='Sexo' 
                    baseColor={'#1D6F40'} 
                />
                <OutlinedTextField
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='Senha' 
                    baseColor={'#1D6F40'} 
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
        height: 450,
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