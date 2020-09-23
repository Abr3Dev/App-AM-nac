import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, Button} from 'react-native';
import LandingRecord from '../../components/landingPages/LandingRecord'
import LandingSubscribe from '../../components/landingPages/LandingSubscribe'
import LandingWarn from '../../components/landingPages/LandingWarn'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Carousel extends React.Component{

    state = {
        onScrollTimes : 0,
        widthSize : 0,
        colorPoint : {
            point1 : "white",
            point2 : "transparent",
            point3 : "transparent"
        }
    }
    componentDidMount = () =>{
        this.setState({
            colorPoint : {
                point1 : "white",
                point2 : "transparent",
                point3 : "transparent"
            }
        })
    }

    onScrollColor = e => {
        let position = e.nativeEvent.contentOffset.x
        console.log(position)
         if(position == 0){
             this.setState({
                 colorPoint : {
                     point1 : "white",
                     point2 : "transparent",
                     point3 : "transparent"
                 }
             })
         }else if(position == 360){
             this.setState({
                 colorPoint : {
                     point1 : "white",
                     point2 : "white",
                     point3 : "transparent"
                 }
             })
         }else if(position == 720){
             this.setState({
                 colorPoint : {
                     point1 : "white",
                     point2 : "white",
                     point3 : "white"
                 }
             })
         }
    }
    
   render(){
    
    const {widthSize, colorPoint} = this.state;
    return (
        <>

        <ScrollView
            horizontal={true}
            onScroll={this.onScrollColor}
        // showsHorizontalScrollIndicator={false}
        pagingEnabled
        decelerationRate='normal'
        >
            <LandingSubscribe/>
            <LandingRecord/>
            <LandingWarn/>
        </ScrollView>
       <View style={styles.pass}>
            <View style={[styles.point, {backgroundColor : colorPoint.point1}]}></View>
            <View style={[styles.point, {backgroundColor : colorPoint.point2}]}></View>
            <View style={[styles.point, {backgroundColor : colorPoint.point3}]}></View>
       </View>
        </>
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