import React from 'react';
import { View,  StyleSheet, Dimensions } from 'react-native'
import Title from '../../components/Title';
import Topic from '../../components/Topic';
import { faClipboardList as about } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText as afterMessage } from '@fortawesome/free-solid-svg-icons';
import { faFileVideo as video } from '@fortawesome/free-solid-svg-icons';
import { faComments as howWork } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';

const width = Dimensions.get('screen').width / 100 * 90

export default function Duvidas(props) {
    
    function DuvidasFrequentes(){
        const { navigation : {navigate},} = props
        navigate('DuvidasFrequentes')
    }

    function SobreNos(){
        const { navigation : {navigate},} = props
        navigate('SobreNos')
    }

    function SobreSNT(){
        const { navigation : {navigate},} = props
        navigate('SobreSNT')
    }

    function SobreAMensagem(){
        const { navigation : {navigate},} = props
        navigate('SobreAMensagem')
    }
    

    return (
            <>
            <Header text={'Dúvidas'}/>
            <View style={styles.container}>
                <Title title={"Dúvidas"} />
                <View style={styles.content}>
                    <View style={styles.line}>
                        <Topic
                            style={styles.topic} 
                            text={'Quem somos nós'} 
                            backgroundText={'black'} 
                            icon={about}
                            size={36}
                            onPress={SobreNos}
                        />
                        <Topic
                            icon={afterMessage}
                            style={styles.topic} 
                            text={'Sobre a mensagem'}                       
                            backgroundText={'black'}
                            size={36}
                            onPress={SobreAMensagem}
                        />
                    </View>
                    <View style={styles.line}>
                        <Topic
                            icon={video}
                            style={styles.topic} 
                            text={'Saiba mais sobre o SNT'} 
                            backgroundText={'black'}
                            size={36}
                            onPress={SobreSNT}
                        />
                        <Topic
                            icon={howWork}
                            style={styles.topic} 
                            text={'Dúvidas frequentes'} 
                            backgroundText={'black'}
                            size={36}    
                            onPress={DuvidasFrequentes}            
                        />
                    </View>
                </View>
            </View>
            </>
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
        alignSelf : 'center',
        height : 250
    },
    icon : {
        width : 70,
        height : 70,
    },
    line : {
        flexDirection : 'row',
        justifyContent : 'space-around',

    },
    topic : {
        backgroundColor : '#009640', 
        width : 70, 
        height : 70,
    }
})