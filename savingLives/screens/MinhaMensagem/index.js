import React from 'react';
import { View, Text, Dimensions, ScrollView, TextInput, StyleSheet, FlatList } from 'react-native';
import Input from '../../components/Input';
import Title from '../../components/Title';
import MainButton from '../../components/MainButton';
import {
    OutlinedTextField,
} from 'react-native-material-textfield';
import api from '../../api/api'
import { Success } from '../../Helpers/Messages';

const width = Dimensions.get('screen').width / 100 * 90

export default class MinhaMensagem extends React.Component {

    state = {
        message : '',
        id : 0,
        isChanged : false,
        disabledColor : '#C6C5C5',
        error : false,
        success : false
    }

    componentDidMount = () =>{
        const {contentId} = this.props
        this.setState({
            id : contentId
        });
        api.get(`doandovidas/content/${contentId}`)
        .then(resp =>{
            this.setState({
                message : resp.data.data.message
            });
        }).catch(err =>{
            // console.log(err.response.data)
            console.log(err.response.data)
        })
    }
    handleSubmit = () =>{
        api.put(`doandovidas/content/update/${this.state.id}`, {
            "message" : this.state.message
        }).then(resp =>{
            
            this.setState({
                isChanged : true,
                disabledColor : '#C6C5C5',
                success : true
            })
        }).catch(err =>{
            console.log(err.response.data)
        })
    }

    render() {
        const {message, disabledColor, isChanged, success} = this.state
       
        return (
            <View>
                
                <Title title={"Minha mensagem"} />
                <View style={styles.container}>
               { success == true && <Success message="Mensagem atualizada com sucesso!"/>}
                    <TextInput 
                        multiline={true} 
                        numberOfLines={15} 
                        style={styles.textArea} 
                        value={message}
                        onChangeText={(value) =>{this.setState({message : value, disabledColor : '#009640', isChanged : false })}}
                    />
                    {/* <Text style={styles.for}>
                        Será enviado para:
                    </Text> */}
                   
                    {/* <OutlinedTextField label='E-mail da pessoa 1' baseColor={'#1D6F40'} inputContainerStyle={{backgroundColor : 'white'}} />
                    <OutlinedTextField label='E-mail da pessoa 2' baseColor={'#1D6F40'} inputContainerStyle={{backgroundColor : 'white'}} /> */}
                    

                    {/* <View style={styles.addMore}>
                        <Text style={styles.textAddMore}>Adcionar mais um familiar</Text>
                        <Topic background={"#0389FF"} icon={plus} width={44} height={44} onPress={this.addEmail}/>
                    </View> */}

                    <MainButton bgColor={disabledColor} text={"Salvar informações"} textColor={"white"} disabled={isChanged} onPress={this.handleSubmit}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        alignSelf: 'center',
    },
    textArea: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.29,
        shadowRadius: 2,
        marginBottom : 16,
        borderRadius: 5,
        width : width,
        alignSelf : "center"
    },
    for: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#707070',
        marginBottom : 16,
    },
    input : {
        marginBottom : 16
    },
    addMore : {
       alignSelf : 'center',
       marginTop : 16
    },
    textAddMore : {
        marginBottom : 16,
        fontSize : 16
    }
})