import React from 'react';
import { StyleSheet, View, TextInput, Image, Text, ActivityIndicator, Dimensions, PermissionsAndroid, TouchableOpacity, ScrollView } from 'react-native';
import logo from '../..//assets/Logo.png';
import {faPlay as play} from '@fortawesome/free-solid-svg-icons';
import {faInfo as infos} from '@fortawesome/free-solid-svg-icons';
import {faPencilAlt as pencil} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';
import Topic from '../../components/Topic';
import MinhasInformacoes from '../MinhasInformacoes/';
import MinhaMensagem from '../MinhaMensagem';
import MeuVideo from '../MeuVideo';
import ImagePicker from 'react-native-image-crop-picker';



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
        nameTopic : '',
        snap : 'center',
        photo : '',
        video : '',
        hasVideo : false
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
            
            this.setState({
                nameTopic : 'MinhaMensagem'
            })
        }else if(position == 648){
            this.setState({
                nameTopic : 'MeuVideo'
            })
        }
    }

    snap = () =>{
        console.log('snapou')
        this.setState({
            snap : 'end'
        })
    }

    // AskPermissionCamera = async () =>{
    //     try{
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.CAMERA,
    //             {
    //                 title : 'Acesso à câmera',
    //                 message : 'Você nos permite acessar sua câmera?',
    //                 buttonPositive : 'Permitir',
    //                 buttonNegative : 'Negar'
                    
    //             }
    //         )
    //         if(granted === PermissionsAndroid.RESULTS.GRANTED){
    //             console.warn('Você deixou a gente acessar sua câmera!!!')
    //         }else{
    //             console.warn('Você não deixou a gente acessar à câmera')
    //         }
    //     }catch(e){
    //         console.log(e)
    //     }
    // }

    // HandlePermission = async () =>{
    //     const granted = await this.AskPermissionCamera();
    // }

    useFromLibrary = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            this.setState({
                photo : image.path
            });
          });
    }
    chooseVideo = () =>{
        ImagePicker.openPicker({
            mediaType: 'video',
          }).then(video => {
            
            this.setState({
                video : video.path,
                hasVideo : true
            })
          });
    }


    render(){
        const {colorIcon, colorFont, nameTopic, snap, photo, video, hasVideo} = this.state
        return( 
            <ScrollView style={{backgroundColor : '#ECECEC'}}>
           <Header text={"Minhas informações"}/>
            <View style={styles.container}>
                <TouchableOpacity onPress={this.useFromLibrary}>
                <Image source={{uri : photo}} style={styles.photo}/>
                </TouchableOpacity>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.reverence}>Olá User!</Text>
                    <Text style={styles.textReverece}>Aqui você pode visualizar e editar seus dados!</Text>
                </View>
            </View>
            


            <View style={styles.optionsNavigation}>
                {nameTopic == 'MinhasInformacoes' && (
                    <>
                        <Topic icon={infos} style={{backgroundColor : '#009640', width : 60, height : 60 }} text={'Minhas informações'} backgroundText={colorFont} size={36} onPress={this.snap}/>
                        <Topic icon={pencil} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Minha mensagem'} backgroundText={'#C6C5C5'} size={36} onPress={this.snap}/>
                        <Topic icon={play} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Meu vídeo'} backgroundText={'#C6C5C5'} size={36} onPress={this.snap}/>
                    </>
                )}
                {nameTopic === 'MinhaMensagem' &&(
                    <>
                        <Topic icon={infos} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Minhas informações'} backgroundText={colorFont} size={36} onPress={this.snap}/>
                        <Topic icon={pencil} style={{backgroundColor : '#009640', width : 60, height : 60 }} text={'Minha mensagem'} backgroundText={'#C6C5C5'} size={36} onPress={this.snap}/>
                        <Topic icon={play} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Meu vídeo'} backgroundText={'#C6C5C5'} size={36} onPress={this.snap}/>
                    </>
                )}

                {nameTopic === 'MeuVideo' &&(
                    <>
                        <Topic icon={infos} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Minhas informações'} backgroundText={colorFont} size={36} onPress={this.snap}/>
                        <Topic icon={pencil} style={{backgroundColor : colorIcon, width : 60, height : 60}} text={'Minha mensagem'} backgroundText={'#C6C5C5'} size={36} onPress={this.snap}/>
                        <Topic icon={play} style={{backgroundColor : '#009640', width : 60, height : 60 }} text={'Meu vídeo'} backgroundText={'#C6C5C5'} size={36} onPress={this.snap}/>
                    </>
                )}
               
            </View>

            {/* Precisa colocar uma função para mudar os Options navigation conforme o scroll ao lado */}
            <ScrollView 
                style={styles.options} 
                horizontal={true} 
                onScroll={e=> this.onScrollColor(e)} 
                snapToInterval={324} 
                decelerationRate={1.0}
                snapToStart = {snap}
                snapToInterval={324}
            >
               <MinhasInformacoes/>
               <MinhaMensagem/>
               <MeuVideo onPress={this.chooseVideo} video={video} hasVideo={hasVideo}/>
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

