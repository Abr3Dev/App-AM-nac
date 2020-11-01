import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Title from '../../components/Title';
import LinkBar from '../../components/LinkBar/index';
import Header from '../../components/Header';

export default class SobreSNT extends React.Component{

    click = () =>{
        const { navigation : {navigate},} = this.props
        navigate('Duvidas')
    }

    render(){
        return (
            <>
            <Header  onPress={this.click} isnavigable={true}/>
                <ScrollView>
                <Title title={'Sobre o SNT'} />
                <View style={styles.container}>
                <LinkBar style={styles.margin} title="O que é o SNT?" content='O SNT integra as secretarias de saúde de todos os estados e municípios, em uma estrutura coordenada para centralizar a notificação de doações e providenciar a logística adequada dos órgãos e tecidos, garantindo que estes cheguem nas condições certas para beneficiarem outras vidas.'/>
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