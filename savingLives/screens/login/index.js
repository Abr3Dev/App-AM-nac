import React from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import logo from '../../assets/Logo.png';

export default class Login extends React.Component{

    login = () =>{
         const {navigation : {navigate}} = this.props;
         navigate('TelaPrincipal',{
         });
    }

    //Não fizemos o envio dos dados, portanto, os inputs não estão funcionando.
    //Mais pra frente vamos mudar esta classe para poder fazer as devidas alterações e requisições. Sei que não está certo.
    //O botão encaminhará para a próxima tela, que fará uma requisição trazendo um usuário aleatório 

    
    render(){
        return( 
            
            <View style={styles.container}>
                <View style={styles.header}></View>      
                <View style={styles.image}>
                    <Image style={styles.logo} source={logo} height={80} width={100}/>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder={'Email'}/>
                    <TextInput style={styles.input} placeholder={'Senha'}/>
                    <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                </View>
            <TouchableOpacity style={styles.button} onPress={this.login}>
                <Text style={styles.buttonText}>Entrar na minha conta</Text>
            </TouchableOpacity>
            <View style={styles.footer}></View>
            </View> 
        )
    }  
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        flexDirection : 'column',
        justifyContent : 'space-between'
    },
    header : {
        backgroundColor : '#1B511C',
        flex: 0.10
    },
    image : {
        alignItems : "center",
        marginTop : 44
    },
    logo : {
        
    },  
    titleLogo : {
        color : '#1B511C',
        fontSize : 20
    },
    form : {
        justifyContent : "space-around",
        flexDirection : 'column',
        alignItems : 'center',
        flex : 0.6,
    },
    input : {
        borderColor : '#018738',
        borderWidth : 1,
        paddingHorizontal : 120,
    },
    forgotPassword : {
        color : '#018738',
        textDecorationLine : 'underline'
    },
    button : {
        backgroundColor : '#018738',
        width : 280,
        alignSelf : 'center',
        paddingVertical : 15,
        borderRadius : 5
    },
    buttonText : {
        color : '#FFFFFF',
        textAlign : 'center',
    },
    footer : {
        flex: 0.10
    }

});

const width = Dimensions.get('screen').width;