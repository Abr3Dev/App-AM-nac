import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, Button} from 'react-native';
import LandingRecord from '../../components/landingPages/LandingRecord'
import LandingSubscribe from '../../components/landingPages/LandingSubscribe'
import LandingWarn from '../../components/landingPages/LandingWarn'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Pages} from 'react-native-pages';

export default class Carousel extends React.Component{

    

    navigateSub = () =>{
        const { navigation : {navigate},} = this.props
        navigate('Cadastro')
    }

    navigateLogin = () =>{
        const { navigation : {navigate},} = this.props
        navigate('Login')
    }
    
   render(){
    
    return (
       
        <Pages>
            <LandingSubscribe/>
            <LandingRecord/>
            <LandingWarn onPressSub={this.navigateSub} onPressLogin={this.navigateLogin}/>
        </Pages>      
      
      
       )
   }
}

const styles = StyleSheet.create({
    pass : {
        position : 'absolute',
        bottom : 16,
        padding : 12,
        textAlign : 'center',
        width : 'auto',
        flexDirection : 'row',
        alignSelf : 'center',
        
    },
    point : {
        borderColor : 'white',
        borderWidth : 1,
        height : 15,
        width : 15,
        borderRadius : 50,
        margin : 4
    }
})