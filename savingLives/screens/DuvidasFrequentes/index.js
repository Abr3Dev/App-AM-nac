import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native';
import Title from '../../components/Title';
import LinkBar from '../../components/LinkBar/index';
import Header from '../../components/Header';

export default class DuvidasFrequentes extends React.Component{
    
    click = () =>{
        const { navigation : {navigate},} = this.props
        navigate('Duvidas')

    }
    
    render(){
        return(
            <>
                <Header  onPress={this.click} isnavigable={true}/>
                <ScrollView>
                <Title title={'Dúvidas frequentes'} />
                <View style={styles.container}>
                <LinkBar style={styles.margin} title="Posso doar em vida?" content='A doação pode ser de órgãos (rim, fígado, coração, pâncreas e pulmão) ou de tecidos (córnea, pele, ossos, válvulas cardíacas, cartilagem, medula óssea e sangue de cordão umbilical). A doação de órgãos como o rim, parte do fígado e da medula óssea pode ser feita em vida.'/>
                <LinkBar style={styles.margin} title="Possíveis doadores" content='É possível também a doação entre vivos, no caso de órgãos duplos (ex: rim). No caso do fígado e do pulmão, também é possível o transplante entre vivos, sendo que apenas uma parte do órgão do doador poderá ser transplantada no receptor.
                                                        O "doador vivo" é considerado uma pessoa em boas condições de saúde – de acordo com avaliação médica – capaz juridicamente e que concorda com a doação. Por lei, pais, irmãos, filhos, avós, tios e primos podem ser doadores. Não parentes podem ser doadores somente com autorização judicial.'/>
                <LinkBar style={styles.margin} title="Custo para os procedimentos" content='Não há nenhum custo para a família quanto à doação de órgãos e tecidos, como também não há nenhum ganho material.'/>
                <LinkBar style={styles.margin} title="Tempo de preservação dos órgãos" content='os rins, mais resistentes, aguentam até 36 horas. Pâncreas, fígado e intestino não podem ficar mais de 12 horas no regime hipotérmico. Coração e pulmão, se não transplantados em quatro horas, perdem a serventia. Se apenas metade desses órgãos descartados chegasse aos receptores, a estimativa é que as listas de espera acabariam em, no máximo, três anos.'/>
                <LinkBar style={styles.margin} title="O processo" content='Após o diagnóstico de morte encefálica, a família deve ser consultada e orientada sobre o processo de doação de órgãos. Depois de seis horas de atestada a falência cerebral, o potencial doador passa por um novo teste clínico para confirmar o diagnóstico. Em seguida, a família é questionada sobre o desejo de doar os órgãos.'/>
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