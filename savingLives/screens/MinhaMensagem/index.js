import React from 'react';
import { View, Dimensions, TextInput, StyleSheet, } from 'react-native';
import Title from '../../components/Title';
import MainButton from '../../components/MainButton';
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
        success : false,
        video : ' '
    }

    componentDidMount = () =>{
        const {contentId} = this.props
        this.setState({
            id : contentId
        });
        api.get(`doandovidas/content/${contentId}`)
        .then(resp =>{
            this.setState({
                message : resp.data.data.message,
                video : resp.data.data.video,
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