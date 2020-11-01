import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import HeaderArrow from '../../components/HeaderArrow';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import logo from '../../assets/Logo.png';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import Header from '../../components/Header';
import api from '../../api/api';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width / 100 * 90;

export default class RedefinirSenha extends React.Component {

  state = {
    email : '',
    error : false,
  }

  handleSendEmail = () =>{
    const {
      navigation : {navigate},
  } = this.props;
  
    api.post(`doandovidas/user/${this.state.email}`)
    .then(resp =>{
      console.log(resp)
      navigate('RedefinirSenhaCodigo')
    }).catch(err =>{
      console.log(err.response)
    })

  
  }

  goBack = () =>{
    const {
      navigation : {navigate},
    } = this.props
    navigate('Login')
  }

  render() {
    return (
      <>
        <Header isnavigable={true} onPress={this.goBack} text='Redefinição de senha'/>
        <ScrollView keyboardDismissMode={'on-drag'}>
          <View style={styles.container}>
            <Image style={styles.logo} source={logo} height={40} width={55} />
            <Text style={styles.p}>
              Informe os dados a seguir para confirmar que é você. Em seguida,
              você será redirecionado para uma tela onde irá visualizar seus dados, e atualizar sua senha
            </Text>
            <OutlinedTextField 
              label='E-mail' 
              baseColor={'#1D6F40'} 
              inputContainerStyle={{ backgroundColor: 'white' }} 
              keyboardType='email-address'
              onChangeText={(value)=>{this.setState({email : value})}}
            />
            <MainButton
              style={styles.form}
              text={'Enviar'}
              bgColor={'#009640'}
              textColor={'white'}
              onPress={this.handleSendEmail}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    top: 10,
    width : width,
    alignSelf : 'center',
    justifyContent : 'space-around'
  },
  p: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  form: {
    marginTop: 20,
    alignSelf: 'center',
  },
  logo: {
    alignSelf: 'center',
  },
});
