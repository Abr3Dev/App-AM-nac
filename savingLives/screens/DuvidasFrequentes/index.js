import React from 'react'
import {StyleSheet, View, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../../components/Title';
import LinkBar from '../../components/LinkBar/index';
import Header from '../../components/Header';
const height = Dimensions.get('screen').height;

export default class DuvidasFrequentes extends React.Component{
    
    click = () =>{
        const { navigation : {navigate},} = this.props
        navigate('Duvidas')

    }
    
    render(){
        return(
            <>
                <Header text={'Dúvidas frequentes'} onPress={this.click} isnavigable={true}/>
                <ScrollView>
                <Title title={'Sobre o processo'} />
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