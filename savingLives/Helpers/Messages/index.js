import react from 'react';
import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, ScrollView, Pressable } from 'react-native';


export class Success extends react.Component{

    state ={
        top :  12
    }

    hideMessage = () =>{
        this.setState({  
            top : -500
        });
    }

        render(){
            const {display, top} = this.state;
            const {message} = this.props

            return(
                <>
                <Pressable style={[styles.container, {display : display, top : top, backgroundColor : '#27B147', borderColor : '#1D6F40'}]} onPress={this.hideMessage}>
                    <Text style={styles.message}>{message}</Text>
                    <Text style={styles.closeMessage}>(Clique para fechar)</Text>
                </Pressable>
                </>
            )
        }
}


export class Fail extends react.Component{
    state ={
        top :  12
    }

    hideMessage = () =>{
        this.setState({  
            top : -500
        });
    }

        render(){
            const {display, top} = this.state;
            const {message} = this.props

            return(
                <>
                <Pressable style={[styles.container, {display : display, top : top, backgroundColor : '#cf3123', borderColor : '#99271d'}]} onPress={this.hideMessage}>
                    <Text style={styles.message}>{message}</Text>
                    <Text style={styles.closeMessage}>(Clique para fechar)</Text>
                </Pressable>
                </>
            )
        }
}

const styles = StyleSheet.create({
    container : {
        position : "absolute",
        height : 120,
        color : 'white',
        top : 12,
        borderRadius : 7,
        width : Dimensions.get('screen').width / 100 * 90,
        zIndex : 5,
        display : 'none',
        justifyContent : 'center',
        
        borderWidth : 2
    },
    message : {
        color : 'white',
        alignSelf : 'center',
        fontSize : 20,
        textAlign : 'center'
    },
    closeMessage : {
        color : '#D6D6D6',
        alignSelf : 'center',
        fontSize : 15,
        textAlign : 'center'
    }
})
