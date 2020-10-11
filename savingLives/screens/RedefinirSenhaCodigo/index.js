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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye as eye} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width / 100 * 90

export default class RedefinirSenhaCodigo extends React.Component {

  handleSubmitNewPassword = () =>{
    const {
      navigation : {navigate},
  } = this.props;
  navigate('TelaPrincipal')
  }

  goBack = () =>{
    const {
      navigation : {navigate},
  } = this.props;
  navigate('Login')
  }

  render() {
    return (
      <>
        <Header isnavigable={true} onPress={this.goBack}/>
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.logo} source={logo} height={40} width={55} />
            <Text style={styles.p}>
              Informe o código enviado para você e logo após trocar sua senha
            </Text>
            <OutlinedTextField 
              label='Código' 
              baseColor={'#1D6F40'} 
              inputContainerStyle={{ backgroundColor: 'white' }} 
              keyboardType='number-pad'
            />
            <MainButton
              style={styles.button}
              text={'Enviar'}
              bgColor={'#009640'}
              textColor={'white'}
              onPress={this.handleSubmitNewPassword}
            />
            <OutlinedTextField 
              label='Nova Senha' 
              baseColor={'#1D6F40'} 
              inputContainerStyle={{ backgroundColor: 'white' }} 
              keyboardType='visible-password'
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
  code: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  button: {},
  eye: {
    zIndex: 10,
    position: 'absolute',
    top: 320,
    marginLeft: 340,
  },
});
