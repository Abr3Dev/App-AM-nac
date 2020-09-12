import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, Button} from 'react-native';
import LandingRecord from '../../components/landingPages/LandingRecord'
import LandingSubscribe from '../../components/landingPages/LandingSubscribe'
import LandingWarn from '../../components/landingPages/LandingWarn'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Carousel extends React.Component{

    state = {
        onScrollTimes : 0,
        widthSize : 0
    }

    navigate = () =>{
        const {navigation : {navigate}} = this.props;
        navigate('PreLogin',{
        });
    }
    
   render(){
    
    const {widthSize, onScrollTimes} = this.state;
    return (
        <>

        <ScrollView
         horizontal={true}
        onScroll={data => {data.nativeEvent.contentOffset.y = 500}}
        // showsHorizontalScrollIndicator={false}
        pagingEnabled
        decelerationRate='normal'
        >
            <LandingSubscribe/>
            <LandingRecord/>
            <LandingWarn/>
        </ScrollView>
       <View style={styles.jump}>
      <Button title={'Entendi, deixe-me ir para a tela principal'} color={'#1B511C'} onPress={this.navigate}/>
       </View>
        </>
       )
   }
}

const styles = StyleSheet.create({
    jump : {
        position : 'absolute',
        bottom : 16,
        right : 16,
        padding : 12,
        textAlign : 'center',
        width : 'auto'
    }
})