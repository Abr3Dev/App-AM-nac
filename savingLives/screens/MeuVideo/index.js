import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import MainButton from '../../components/MainButton';
import { faTimesCircle as close } from '@fortawesome/free-solid-svg-icons';
import { faRedo as reload } from '@fortawesome/free-solid-svg-icons';
import EditButton from '../../components/EditButton';
import Title from '../../components/Title'

const width = Dimensions.get('screen').width / 100 * 90

export default function MeuVideo({}){

    return(
        <View style={styles.container}>
            <Title title={"Meu vídeo"} />
            <View style={styles.video}>
                <Text>Aqui vem  o player de vídeo</Text>
            </View>


            <View style={styles.options}>
                <EditButton colorButton={'#D93B3B'} text='Excluir vídeo' icon={close}/>
                <EditButton colorButton={'#0389FF'} text='Trocar vídeo' icon={reload}/>
              
            </View>

            <MainButton bgColor={"#009640"} text={"Salvar informações"} textColor={"white"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : width,
    },
    video : {
        height : 200,
        backgroundColor : 'grey',
        textAlign :'center',
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom : 16,
        borderRadius : 5
    },
    options : {
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    optionDelete : {
        backgroundColor : '#D93B3B',
        flexDirection : 'column',
        justifyContent : 'space-around',
        alignItems : 'center',
        padding : 8,
        borderRadius : 5
    },
    optionTrade : {
        backgroundColor : '#0389FF',
        flexDirection : 'column',
        justifyContent : 'space-around',
        alignItems : 'center',
        padding : 8,
        borderRadius : 5
    },
    desc : {
        color : 'white'
    }
})