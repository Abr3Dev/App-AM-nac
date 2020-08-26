import React from 'react';
import Login from './screens/tela-login/index'
import PreLogin from './screens/tela-pre-login/index'
import TelaPrincipal from './screens/tela-principal/index'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends React.Component{
  render(){
    return(
      <>
        {/* <Login/> */}
        {/* <PreLogin/> */}
      <TelaPrincipal/>
      </>
    )
  }
}

export default App;
