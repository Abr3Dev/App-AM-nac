import React from 'react'
import {StyleSheet, Text, View, Image, ScrollView0, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderArrow from '../../components/HeaderArrow';
import Title from '../../components/Title';
import LinkBar from '../../components/LinkBar/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft as left } from '@fortawesome/free-solid-svg-icons';
const height = Dimensions.get('screen').height;

export default class DuvidasFrequentes extends React.Component{
    
    
    render(){
        return(
            <>
                <HeaderArrow text={'Sobre o processo'} marginLeft={-140}/>
                <Title title={'Minha mensagem'} />
                <ScrollView>
                <View style={styles.container}>
                <LinkBar title="Obrigatoriedade para doação" content='Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsunv v Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun'/>
                <LinkBar title="Possíveis doadores" content='Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsunv v Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun'/>
                <LinkBar title="Custo para os procedimentos" content='Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsunv v Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun'/>
                <LinkBar title="Tempo de preservação dos órgãos" content='Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsunv v Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun'/>
                <LinkBar title="O processo" content='Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsunv v Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun'/>
                </View>
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        height : height,
        justifyContent: 'space-around',
    },
});