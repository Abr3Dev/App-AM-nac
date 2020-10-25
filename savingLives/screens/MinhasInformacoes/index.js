import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Input from '../../components/Input';
import DatePicker from 'react-native-datepicker';
import { Picker } from '@react-native-community/picker';
import MainButton from '../../components/MainButton';
import Title from '../../components/Title';
import api from '../../api/api'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';


const width = Dimensions.get('screen').width / 100 * 90


export default class MinhasInformacoes extends React.Component {

    state = {
        id : '',
        name : '',
        email : '',
        birthDate : '',
        gender : '',
        password : '',
        cpf : '',
        isDisabled : true,
        disabledColor : '#C6C5C5'
    }

    componentDidMount = () =>{
        this.changeInputs();
    }

    changeInputs = () =>{
        const {user} = this.props

         this.setState({
            id : user.id,
            name : user.name,
            email : user.email,
            birthDate : user.birthDate,
            gender : user.gender,
            cpf : user.cpf,
            password : user.password,
         });
    }

    onChangeInput = () =>{
        this.setState({
            // isDisabled : true,
            // disabledColor : '#009640',
        })
    }


    submitUpdate = () =>{
        const {id, email, cpf, birthDate, gender, password, name} = this.state
        
         api.put(`doandovidas/user/${this.state.id}`, {
             "name" : name,
             "id" : id,
             "email" : email,
             "cpf" : cpf,
             "password" : password,
             "birthDate" : birthDate,
             "gender" : gender,
             
         }).then(resp =>{
            const {data} = resp.data
             this.setState({
                id : data.id,
                name : data.name,
                email : data.email,
                birthDate : data.birthDate,
                gender : data.gender,
                cpf : data.cpf,
                password : data.password,
                isDisabled : true,
                disabledColor : '#C6C5C5'
             });
            
         }).catch(err =>{
             
         })
    }
    render() {
        const{isDisabled, disabledColor} = this.state;
        const { user } = this.props;

        return (
            <View>
                <Title title={"Minhas informações"} />
                <View style={styles.container}>
                <OutlinedTextField
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='Nome' 
                    baseColor={'#1D6F40'} 
                    value={user.name}
                    // onChange={this.handleChangeInputs}
                    onChangeText={(value) =>{this.setState({name : value, isDisabled : false, disabledColor : '#009640'})}}
                />
                <OutlinedTextField
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='E-mail' 
                    baseColor={'#1D6F40'}
                    value={user.email} 
                    // onChange={this.handleChangeInputs}
                    onChangeText={(value) =>{this.setState({email : value, isDisabled : false, disabledColor : '#009640'})}}                
                    />
                {/* <OutlinedTextField
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='Data de nascimento' 
                    baseColor={'#1D6F40'}
                    value={user.birthDate} 
                    // onChange={this.handleChangeInputs}
                    onChangeText={(value) =>{this.setState({birthDate : value, isDisabled : false, disabledColor : '#009640'})}}
                /> */}
                <OutlinedTextField
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='Sexo' 
                    baseColor={'#1D6F40'}
                    value={user.gender} 
                    // onChange={this.handleChangeInputs}
                    onChangeText={(value) =>{this.setState({gender : value, isDisabled : false, disabledColor : '#009640'})}}
                />
                <OutlinedTextField
                    inputContainerStyle={{backgroundColor : 'white'}}
                    label='Senha' 
                    baseColor={'#1D6F40'} 
                    value={user.password}
                    // onChange={this.handleChangeInputs}
                    onChangeText={(value) =>{this.setState({password : value, isDisabled : false, disabledColor : '#009640'})}}
                />
                    <MainButton  disabled={isDisabled} text={'Salvar informações'} bgColor={disabledColor} textColor={'white'} onPress={this.submitUpdate}/>

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