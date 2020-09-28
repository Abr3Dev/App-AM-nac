import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, Button} from 'react-native';
import LandingRecord from '../../components/landingPages/LandingRecord'
import LandingSubscribe from '../../components/landingPages/LandingSubscribe'
import LandingWarn from '../../components/landingPages/LandingWarn'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Pages} from 'react-native-pages';

export default class Carousel extends React.Component{
    
   render(){
    
    return (
       
        <Pages>
            <LandingSubscribe/>
            <LandingRecord/>
            <LandingWarn/>
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