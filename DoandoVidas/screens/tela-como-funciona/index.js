import React from 'react';
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';
import logo from '../..//assets/Logo.png';
import HowWorks from '../..//assets/tela-pre-login/bolinha-prancheta.png';

 //CODIGO FEITO POR ANDRÉ KANCELSKIS//

export default class ComoFunciona extends React.Component{
    render(){
        return( 
            <>
                <View style={styles.header}>
                    <Image style={styles.logo} source={logo} height={40} width={50}/>
                </View>   
                <View style={styles.container}>
                    <Image source={HowWorks}/>
                    <Text style={styles.saudation}>Como Funciona</Text>    
                </View>

                <View style={styles.options}>
                    <View style={styles.option}>
                        <Text>O Processo</Text>
                    </View>

                    <View style={styles.option} >
                        <Text>Morte Encefálica</Text>
                    </View>
               
                    <View style={styles.option} >
                        <Text>Comunique sua Família</Text>
                    </View>
                </View>
            </>
        )
    }

}



const styles = StyleSheet.create({

    container : {
        flex: 1,
        flexDirection : 'column',
        justifyContent : 'space-between'
    },
    header : {
        backgroundColor : '#1B511C',
        flex: 0.10
    },
    image : {
        alignItems : "center",
        marginTop : 44
    },
    logo : {
        alignSelf : 'flex-end',
        alignItems : 'center',
    },
    saudation : {
        alignSelf : 'center',
        marginTop : 8,
        fontWeight : 'bold',
        color : '#009640',

    },
    options : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-around'
    },
    option : {
       alignItems : 'center'

    }
});

