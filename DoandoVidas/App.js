import React from 'react';
import Login from './screens/tela-login/index'
import PreLogin from './screens/tela-pre-login/index'
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
        <PreLogin/>
      </>
    )
  }
}

export default App;
