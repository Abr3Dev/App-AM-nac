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
const height = Dimensions.get('screen').height;

export default class RedefinirSenhaCodigo extends React.Component {
  render() {
    return (
      <>
        <HeaderArrow text={'Redefinição de senha'} marginLeft={-120} />
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.logo} source={logo} height={40} width={55} />
            <Text style={styles.p}>
              Informe o código enviado para você e logo após trocar sua senha
            </Text>
            <Input
              style={styles.code}
              placeholder="0864541"
              borderColor="#018738"
              label={'Código'}
              // onKeyPress={this.onPressNome}
              key={'nome'}
            />
            <MainButton
              style={styles.button}
              text={'Enviar'}
              bgColor={'#009640'}
              textColor={'white'}
            />
            <FontAwesomeIcon style={styles.eye} icon={eye} color={'#018738'} />
            <Input
              style={styles.form}
              placeholder="**************"
              borderColor="#018738"
              label={'Nova senha: '}
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
