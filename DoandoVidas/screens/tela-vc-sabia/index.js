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

export default class comoFunciona extends React.Component {
  render() {
    return (
      <>
        <View style={styles.header}>
          <View style={styles.container}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{marginHorizontal: 8}}
              color={'#fff'}
            />
            <Image source={Olho} style={styles.olho} />
            <Text style={styles.title}>você sabia?</Text>
          </View>
          <Image style={styles.logo} source={logo} height={50} width={70} />
        </View>

        <View style={styles.options}>
          <View style={styles.option}>
            <Text style={styles.text}>Curiosidades</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={styles.arrow}
              color={'#5EAF60'}
            />
          </View>

          <View style={styles.option}>
            <Text style={styles.text}>Mitos e verdades</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={styles.arrow}
              color={'#5EAF60'}
            />
          </View>
        </View>

        <View style={styles.footer}></View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: '#cfcfcf',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#1B511C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  olho: {
    height: 36,
    width: 36,
    alignSelf: 'center',
  },
  image: {
    alignItems: 'center',
    marginTop: 44,
  },
  logo: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 14,
    marginRight: 10,
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  options: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: tela,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#5EAF60',
    borderStyle: 'solid',
    borderWidth: 1.5,
    width: 350,
    paddingVertical: 20,
    alignSelf: 'center',
    margin: 15,
  },
  text: {
    marginLeft: 16,
    color: '#444444',
  },
  arrow: {
    marginRight: 16,
  },
  footer: {
    backgroundColor: '#1B511C',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 0,
    width: tela,
    paddingHorizontal: tela,
    height: 40,
    marginTop: 245,
  },
});

const tela = Dimensions.get('screen').width;
