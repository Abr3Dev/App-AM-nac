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
                <Title title={'Sobre o processo'} />
                <ScrollView>
                <View style={styles.container}>
                <LinkBar style={styles.margin} title="Obrigatoriedade para doação" content='Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsunv v Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun'/>
                <LinkBar style={styles.margin} title="Possíveis doadores" content='Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsunv v Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun'/>
                <LinkBar style={styles.margin} title="Custo para os procedimentos" content='Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsunv v Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun'/>
                <LinkBar style={styles.margin} title="Tempo de preservação dos órgãos" content='Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsunv v Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun'/>
                <LinkBar style={styles.margin} title="O processo" content='Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsunv v Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun Lorem Ipmsun'/>
                </View>
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        justifyContent: 'space-around',
    },
    margin  :{
        marginBottom : 32
    }
});