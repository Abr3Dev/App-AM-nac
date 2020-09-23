import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import HowWorks from '../..//assets/tela-pre-login/bolinha-prancheta.png';
import YouKnow from '../..//assets/tela-pre-login/bolinha-olho.png';
import Questions from '../..//assets/tela-pre-login/bolinha-duvidas.png';
import SNT from '../..//assets/tela-pre-login/bolinha-hospital.png';
import Header from '../../components/Header'
import OptionNav from '../../components/OptionNav'
import MainButton from '../../components/MainButton'



export default class PreLogin extends React.Component {


    //Deixa isso mais pequeno, tem muitas funções para a mesma coisa, mudando apenas um
  
    navigateComoFunciona = () =>{
        const {navigation : {navigate}} = this.props;
        navigate('ComoFunciona',{
    });
}
    navigateVoceSabia = () =>{
        const {navigation : {navigate}} = this.props;
        navigate('VoceSabia')
    }
    navigateLogin = () =>{
        const {navigation : {navigate}} = this.props;
        navigate('Login',{
        });
    }
    navigateCadastro = () =>{
        const {navigation : {navigate}} = this.props;
        navigate('Cadastro');
    }

    navigateDuvidas = () =>{
        const {navigation : {navigate}} = this.props;
        navigate('DuvidasFrequentes');
    }
   
    render() {
        const {navigation : {navigate}} = this.props;
        return (
            <>
               <Header text={'Doando vidas'} sizeText={22}/>
               <View style={styles.container}>
                    <Text style={styles.saudation}>Olá visitante! Seja bem-vindo</Text>

                    <View style={styles.content}>

                    
                    <TouchableOpacity onPress={this.navigateComoFunciona} style={styles.item}>
                        <OptionNav image={HowWorks} description={'Como Funciona'} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateVoceSabia} style={styles.item}>
                        <OptionNav image={YouKnow} description={'Você sabia'} navigation={navigate}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item} onPress={this.navigateDuvidas}>
                        <OptionNav image={Questions} description={'Dúvidas frequentes'}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <OptionNav image={SNT} description={'Saiba mais sobre o SNT'}/>
                    </TouchableOpacity>
                    </View>
                <TouchableOpacity onPress={this.navigateCadastro}>
                <MainButton text={'Quero ser um doador!'} bgColor={'#AE191D'} textColor={'white'}/>
                </TouchableOpacity>
                    <View>
                        <TouchableOpacity onPress={this.navigateLogin} style={styles.item}>
                            <Text style={styles.footerTxt}>Já sou um doador!</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
            </>
        )
    }
}

const widthContainer = Dimensions.get('screen').width / 100 * 80

const styles = StyleSheet.create({
    saudation : {
        alignSelf : 'center',
        marginVertical : 16,
        color : '#009640',
        fontWeight : 'bold'
    },  
    container : {
        flexDirection : 'column',
        width : widthContainer,
        alignSelf : 'center',
        justifyContent : 'space-between',
    },
    content : {
        justifyContent : 'space-between',
        flexDirection : 'row',
        flexWrap : 'wrap',
    },
    item : {
        marginVertical : 12
    },
    button : {
        marginVertical : 160
    },  
    footerTxt : {
        textAlign : 'center',
        textDecorationLine : 'underline',
    }
   
});

