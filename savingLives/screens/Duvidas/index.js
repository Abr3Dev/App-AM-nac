import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Title from '../../components/Title';
import Topic from '../../components/Topic';
import { faClipboardList as about } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText as afterMessage } from '@fortawesome/free-solid-svg-icons';
import { faFileVideo as video } from '@fortawesome/free-solid-svg-icons';
import { faComments as howWork } from '@fortawesome/free-solid-svg-icons';
import HeaderArrow from '../../components/HeaderArrow';

const width = Dimensions.get('screen').width / 100 * 90

export default function Duvidas({ }) {
    return (
        <View style={styles.container}>
            <HeaderArrow text={'Dúvidas'} marginLeft={-200}/>
            <Title title={"Dúvidas"} />
            <View style={styles.content}>

                <View style={styles.line}>
                    <Topic
                        icon={about}
                        background={'#009640'}
                        text={'Minhas informações'}
                        backgroundText={'black'}
                        size={36}
                        style={styles.icon}
                    />
                    <Topic
                        icon={afterMessage}
                        background={'#009640'}
                        text={'Minhas informações'}
                        backgroundText={'black'}
                        size={36}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.line}>
                <Topic
                    icon={video}
                    background={'#009640'}
                    text={'Minhas informações'}
                    backgroundText={'black'}
                    size={36}
                    style={styles.icon}
                />
                <Topic
                    icon={howWork}
                    background={'#009640'}
                    text={'Minhas informações'}
                    backgroundText={'black'}
                    size={36}
                    style={styles.icon}
                
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