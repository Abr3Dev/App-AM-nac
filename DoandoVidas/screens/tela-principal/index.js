import React from 'react';
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';
import logo from '../..//assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars as faBars } from '@fortawesome/free-solid-svg-icons';
import {faCamera as faCamera} from '@fortawesome/free-solid-svg-icons';
import {faPlay as play} from '@fortawesome/free-solid-svg-icons';
import {faVideo as video} from '@fortawesome/free-solid-svg-icons';
import {faUsers as family} from '@fortawesome/free-solid-svg-icons';
import photo from '../..//assets/tela-principal/foto-baixo.png';



export default class TelaPrincipal extends React.Component{

    //CODIGO FEITO POR RAPHAEL SANTANTONIO//
    render(){
        return( 
            <>
            <View style={styles.header}>    
                <FontAwesomeIcon
                        icon={faBars}
                        size={32}
                        style={styles.iconBar} />
               <TextInput style={styles.inputHeader} placeholder={'Pesquisar'}/>
               <Image source={logo}/>
            </View>
            <View style={styles.userContainer}>
                <View style={styles.userIformations}>
                <View style={styles.photo}>
                    <Image style={styles.imageUser} height={80} width={100} source={logo}/>
                    <FontAwesomeIcon
                        icon={faCamera}
                        size={24}
                        style={styles.iconCamera}
                    />
                </View>
                <View style={styles.user}>
                <Text style={styles.userName}>Olá Raphael!</Text>
                <Text style={styles.userSettings}>Editar perfil</Text>
                </View>
                </View>
            </View>

            <View style={styles.options}>
                    <View style={styles.option}>
                        <View style={styles.iconContainer}>
                            <FontAwesomeIcon icon={play} size={48} style={{color : 'white'}}/>
                        </View>
                        <Text style={styles.textOption}>Gravar depoimento</Text>
                    </View>

                    <View style={styles.option}>
                        <View style={styles.iconContainer}>
                            <FontAwesomeIcon icon={family} size={48} style={{color : 'white'}}/>
                        </View>
                        <Text style={styles.textOption}>Comunicar minha família</Text>
                    </View>

                    <View style={styles.option}>
                        <View style={styles.iconContainer}>
                            <FontAwesomeIcon icon={video} size={48} style={{color : 'white'}}/>
                        </View>
                        <Text style={styles.textOption}>Meus Vídeos</Text>
                    </View>
                </View>
                <Image source={photo} style={styles.photoDown}/>
            </>

        )
    }

}



const styles = StyleSheet.create({
    header : {
        backgroundColor : '#1B511C',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 8
    },
    iconBar : {
        color : 'white'
    },
    inputHeader : {
        backgroundColor : 'white',
        borderRadius : 20,
        paddingHorizontal : 70,
        paddingVertical : 5,
        textAlign : 'left',
    },
    userContainer : {
       justifyContent : 'space-around',
       alignItems : 'center'
        
    },
    userIformations : {
        flexDirection : 'row',
        marginTop : 36
    },
    imageUser : {
       borderRadius : 100,
    },
    iconCamera : {
        position : 'relative',
        left: 85,
        bottom : 30,
        color : 'black',
        borderRadius : 50,
    },
    user : {
        marginLeft : 24,
        flexDirection : 'column',
    },
    userName : {
        fontSize : 24,
        fontWeight : 'bold',
    },
    userSettings : {
        textDecorationLine : 'underline',
        color : 'grey'
    },
    options : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : 24
    },
    option : {
        width : 100
    },
    iconContainer : {
        backgroundColor : '#009640',
        alignItems : 'center',
        justifyContent : 'center',
        padding : 12,
        borderRadius : 16,
    },
    textOption : {
        fontWeight : 'bold',
        color : '#009640',
        marginTop : 12,
        textAlign : 'center'
    },
    photoDown : {
        alignSelf : 'center',
        marginTop : 24
    }
})

