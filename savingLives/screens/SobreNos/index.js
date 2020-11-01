import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Title from '../../components/Title';
import LinkBar from '../../components/LinkBar/index';
import Header from '../../components/Header';

export default class SobreNos extends React.Component{
    
    click = () =>{
        const { navigation : {navigate},} = this.props
        navigate('Duvidas')

    }
    render(){
        return (
            <>
            <Header  onPress={this.click} isnavigable={true}/>
                <ScrollView>
                <Title title={'Sobre Nós'} />
                <View style={styles.container}>
                <LinkBar style={styles.margin} title="O que é o 'Doando Vidas?'" content='Somos uma empresa que o foco é melhorar o processo de doação de órgãos no brasil, melhorando alguns pontos dentro deste processo'/>
                <LinkBar style={styles.margin} title="Para o que vai servir minha mensagem ?" content='Em caso que algo aconteça, essa mensagem e vídeo estará disponível para visualização para qualquer hospital parceiro, facilitando assim a comunicação com o familiar, aumentando o tempo de isquemia e, consequentemente, a taxa de sucesso em uma doação.'/>
                <LinkBar style={styles.margin} title="Preciso pagar algo?" content='O uso do nosso aplicativo não há nenhum custo para o usuário.'/>
                <LinkBar style={styles.margin} title="O vídeo e mensagem será visualizado por quem ?" content='O vídeo e a mensagem estarão disponíveis para visualização dos hospitais parceiros. Ele será visto apenas em caso'/>
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