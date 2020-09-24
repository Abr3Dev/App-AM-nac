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
const height = Dimensions.get('screen').height;

export default class DuvidasFrequentes extends React.Component {
  render() {
    return (
      <>
        <HeaderArrow text={'Redefinição de senha'} marginLeft={-120} />
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.logo} source={logo} height={40} width={55} />
            <Text style={styles.p}>
              Informe os dados a seguir para confirmar que é você. Em seguida,
              irá ser enviado um e-mail para o próximo passo de redefinição
            </Text>
            <Input
              style={styles.form}
              placeholder="Fulano de tal"
              borderColor="#018738"
              label={'Nome: '}
              // onKeyPress={this.onPressNome}
              key={'nome'}
            />
            <Input
              style={styles.form}
              placeholder="FulanoDeTal@exemplo.com"
              borderColor="#018738"
              label={'Seu E-mail: '}
            />
            <Input
              style={styles.form}
              placeholder="012.345.678-90"
              borderColor="#018738"
              label={'Seu CPF: '}
            />
            <MainButton
              style={styles.form}
              text={'Enviar'}
              bgColor={'#009640'}
              textColor={'white'}
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
  logo: {
    alignSelf: 'center',
  },
});
