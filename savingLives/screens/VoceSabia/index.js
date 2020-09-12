import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import logo from '../..//assets/Logo.png';
import Olho from '../..//assets/tela-pre-login/bolinha-olho.png';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header'
import LinkBar from '../../components/LinkBar';


export default class VoceSabia extends React.Component {
  render() {
    return (
      <>
      <Header text={'Você sabia'} sizeText={16}/>
      <View style={styles.container}>
        <LinkBar title={'Curiosidades'}/>
        <LinkBar title={'Mitos e verdades'}/>
      </View>
      <View style={styles.footer}></View>
      </>
    );
  }
}

const tela = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
   flexDirection : 'column',
   height : 240,
   justifyContent : 'space-around'
  },
  footer : {
      backgroundColor : '#1B511C',
      padding : 20,
      position : 'absolute',
      bottom : 0,
      width : tela
  }
});


