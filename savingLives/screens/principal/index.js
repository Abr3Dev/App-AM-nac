import React from 'react';
import { StyleSheet, View, TextInput, Image, Text, ActivityIndicator, Dimensions } from 'react-native';
import logo from '../..//assets/Logo.png';
import {faPlay as play} from '@fortawesome/free-solid-svg-icons';
import {faInfo as infos} from '@fortawesome/free-solid-svg-icons';
import {faPencilAlt as pencil} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import Topic from '../../components/Topic';
import MinhasInformacoes from '../MinhasInformacoes/'
import MinhaMensagem from '../MinhaMensagem';
import MeuVideo from '../MeuVideo';

const width = Dimensions.get('screen').width / 100 * 90



export default class TelaPrincipal extends React.Component{

    state = {
        id : 0,
        user : '',
        picture : '',
        loading: true,
        error : false,
        colorIcon : '#C6C5C5',
        colorFont : '#C6C5C5',
        nameTopic : ''
    };
    componentDidMount = () =>{
        this.setState({
            nameTopic : 'MinhasInformacoes',
        })
    }

    onScrollColor = e => {
        let position = e.nativeEvent.contentOffset.x
        if(position == 0){
            this.setState({
                nameTopic : 'MinhasInformacoes',
            })
        }else if(position == 324){
            console.log('chegou em 324')
            this.setState({
                nameTopic : 'MinhaMensagem'
            })
        }else if(position == 648){
            this.setState({
                nameTopic : 'MeuVideo'
            })
        }
    }


    render(){
        const {colorIcon, colorFont, nameTopic} = this.state
        return( 
            <ScrollView style={{backgroundColor : '#ECECEC'}}>
           <Header text={"Minhas informações"}/>
            <View style={styles.container}>
                <Image source={logo} style={styles.photo}/>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.reverence}>Olá User!</Text>
                    <Text style={styles.textReverece}>Aqui você pode visualizar e editar seus dados!</Text>
                </View>
            </View>
            


            <View style={styles.optionsNavigation}>
                {nameTopic == 'MinhasInformacoes' && (
                    <>
                        <Topic icon={infos} style={{backgroundColor : '#009640', width : 60, height : 60 }} text={'Minhas informações'} backgroundText={colorFont} size={36} />
                        <Topic icon={pencil} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Minha mensagem'} backgroundText={'#C6C5C5'} size={36}/>
                        <Topic icon={play} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Meu vídeo'} backgroundText={'#C6C5C5'} size={36} />
                    </>
                )}
                {nameTopic === 'MinhaMensagem' &&(
                    <>
                        <Topic icon={infos} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Minhas informações'} backgroundText={colorFont} size={36} />
                        <Topic icon={pencil} style={{backgroundColor : '#009640', width : 60, height : 60 }} text={'Minha mensagem'} backgroundText={'#C6C5C5'} size={36} />
                        <Topic icon={play} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Meu vídeo'} backgroundText={'#C6C5C5'} size={36} />
                    </>
                )}

                {nameTopic === 'MeuVideo' &&(
                    <>
                        <Topic icon={infos} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Minhas informações'} backgroundText={colorFont} size={36} />
                        <Topic icon={pencil} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Minha mensagem'} backgroundText={'#C6C5C5'} size={36} />
                        <Topic icon={play} style={{backgroundColor : '#009640', width : 60, height : 60 }} text={'Meu vídeo'} backgroundText={'#C6C5C5'} size={36} />
                    </>
                )}
               
            </View>




            {/* Precisa colocar uma função para mudar os Options navigation conforme o scroll ao lado */}
            <ScrollView style={styles.options} horizontal={true} pagingEnabled={true} onScroll={e=> this.onScrollColor(e)}>
               <MinhasInformacoes/>
               <MinhaMensagem/>
               <MeuVideo/>
            </ScrollView>
            </ScrollView>

        );
    }

}

const styles = StyleSheet.create({
   container : {
       width : width,
       alignSelf : 'center',
       flexDirection : 'row',
       justifyContent : 'space-between',
       height : 170,
       alignItems : 'center'
   },
   photo : {
       width : 100,
       height : 100,
       borderRadius : 100
   },
   descriptionContainer : {
       width : 190,
       flexDirection : 'column',
       alignItems : 'center'
   },
   reverence : {
       fontSize : 20,
       marginBottom : 16
   },
   textReverece : {
       textAlign : 'center'
   },
   optionsNavigation : {
       width : width,
       justifyContent : 'space-between',
       flexDirection : 'row',
       alignSelf : 'center'
   },
   options : {
       width : width,
       alignSelf : 'center'
   }
})

