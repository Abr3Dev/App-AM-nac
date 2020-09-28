import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import MainButton from '../../components/MainButton';
import { faTimesCircle as close } from '@fortawesome/free-solid-svg-icons';
import { faRedo as reload } from '@fortawesome/free-solid-svg-icons';
import EditButton from '../../components/EditButton';
import Title from '../../components/Title'
import Video from 'react-native-video';

const width = Dimensions.get('screen').width / 100 * 90

export default function MeuVideo({onPress, video}){

    return(
        <View style={styles.container}>
            <Title title={"Meu vídeo"} />
            <TouchableOpacity onPress={onPress}>
            <Video source =
                {{uri : video}}
                style={styles.video}
            />
            </TouchableOpacity>
            
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
        height : 100,
        width : 300,
        flex : 1
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