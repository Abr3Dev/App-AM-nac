import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Title from '../../components/Title';
import Topic from '../../components/Topic';
import { faClipboardList as about } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText as afterMessage } from '@fortawesome/free-solid-svg-icons';
import { faFileVideo as video } from '@fortawesome/free-solid-svg-icons';
import { faComments as howWork } from '@fortawesome/free-solid-svg-icons';
import HeaderArrow from '../../components/HeaderArrow';
import Header from '../../components/Header';

const width = Dimensions.get('screen').width / 100 * 90

export default function Duvidas({ }) {
    return (
        <View style={styles.container}>
            <Header text={'Dúvidas'}/>
            <Title title={"Dúvidas"} />
            <View style={styles.content}>

                <View style={styles.line}>
                    <Topic
                        style={{backgroundColor : '#009640', width : 60, height : 60 }} 
                        text={'Minhas informações'} 
                        backgroundText={'black'} 
                        icon={about}
                        size={36}
                    />
                    <Topic
                        icon={afterMessage}
                        style={{backgroundColor : '#009640', width : 60, height : 60 }} 
                        text={'Minhas informações'}                       
                        backgroundText={'black'}
                        size={36}
                      
                    />
                </View>
                <View style={styles.line}>
                <Topic
                    icon={video}
                    style={{backgroundColor : '#009640', width : 60, height : 60 }} 
                    text={'Minhas informações'} 
                    backgroundText={'black'}
                    size={36}
                />
                <Topic
                    icon={howWork}
                    style={{backgroundColor : '#009640', width : 60, height : 60 }} 
                    text={'Minhas informações'} 
                    backgroundText={'black'}
                    size={36}                
                />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ECECEC',
        flex : 1,
    },
    content: {
        width: width,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignSelf : 'center',
        flex : 0.5
    },
    icon : {
        width : 60,
        height : 60,
    },
    line : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
})