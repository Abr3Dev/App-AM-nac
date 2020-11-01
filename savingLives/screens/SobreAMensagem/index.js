import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Title from '../../components/Title';
import LinkBar from '../../components/LinkBar/index';
import Header from '../../components/Header';

export default class SobreAMensagem extends React.Component{
    
    click = () =>{
        const { navigation : {navigate},} = this.props
        navigate('Duvidas')

    }

    render(){
        return (
            <>
            <Header  onPress={this.click} isnavigable={true}/>
                <ScrollView>
                <Title title={'Sobre a mensagem'} />
                <View style={styles.container}>
                <LinkBar style={styles.margin} title="O que é para escrever na mensagem" content='Na mensagem, você poderá descrever sua vontade de doar órgãos em caso de morte cerebral e o porquê de fazer isso.'/>
                <LinkBar style={styles.margin} title="O que vai se tratar o vídeo?" content='No vídeo você deverá demonstrar sua vontade de doar seu órgão em caso de morte cerebral. Uma mensagem simples de no máximo três minutos.'/>
                <LinkBar style={styles.margin} title="Posso colocar qualquer mensagem ou vídeo que eu quiser?" content='Sim, porém tenha em mente que caso coloque qualquer coisa, seus órgãos não poderão ser doados, em caso de recusa da sua família.'/>
                <LinkBar style={styles.margin} title="A mensagem ou vídeo possuem alguma limitação" content='A mensagem deverá estar entre 100 e 300 caracteres. O vídeo deverá ser de até 5 minutos'/>
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