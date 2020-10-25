import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import {faPlay as play} from '@fortawesome/free-solid-svg-icons';
import {faInfo as infos} from '@fortawesome/free-solid-svg-icons';
import {faPencilAlt as pencil} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';
import Topic from '../../components/Topic';
import MinhasInformacoes from '../MinhasInformacoes';
import MinhaMensagem from '../MinhaMensagem';
import MeuVideo from '../MeuVideo';
import ImagePicker from 'react-native-image-crop-picker';
import photoUser from '../..//assets/defaults/user.png';
import api from '../../api/api';

const width = Dimensions.get('screen').width / 100 * 90

export default class TelaPrincipal extends React.Component{

    state = {
        user : {
            id : 0,
            avatar : '',
            name : '',
            email : '',
            cpf : '',
            password : '',
            birthDate : '',
            gender : '',
            contentId : 0,
        },
        loading: true,
        error : false,
        colorIcon : '#C6C5C5',
        colorFont : '#C6C5C5',      
        video : '',
        hasVideo : false,
        nameTopic : 'MinhasInformacoes',
    };

    
    componentDidMount = () =>{

        const {
            navigation : {
                state : {params}
            },
        } = this.props;

        const {userData} = params;
        
        this.setState({
            user : {
                id : userData.id,
                avatar : userData.avatar == null ? photoUser : userData.avatar,
                name : userData.name,
                email : userData.email,
                cpf : userData.cpf,
                password : userData.password,
                birthDate : userData.birthDate,
                gender : userData.gender,
                contentId : userData.contentId,
            }
        });
    }

    handleAddVideo = () =>{
        const {
            navigation : {navigate},
        } = this.props;
        navigate('VideoScreen')
    }

    onScrollColor = e => {
        let position = e.nativeEvent.contentOffset.x
        if(position <= 162){
            this.setState({
                nameTopic : 'MinhasInformacoes',
            });
        }else if(position >= 162 && position <= 486){  
            this.setState({
                nameTopic : 'MinhaMensagem'
            });
        }else if(position >= 486 && position ){
            this.setState({
                nameTopic : 'MeuVideo'
            });
        }
    }

    useFromLibrary = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64 : true
          }).then(image => {

            const {user : {id, name, email, cpf, password, birthDate, gender, contentId}} = this.state;

            api.put(`doandovidas/user/${id}`,{
                "avatar" : image.data,
                "id": id,
                "name": name,
                "email": email,
                "cpf": cpf,
                "password": password,
                "birthDate": birthDate,
                "gender": gender,
                "contentId" : contentId
            }).then(resp =>{
                
                this.setState({
                    user : {
                        avatar : image.data,
                        name : resp.data.data.name,
                    }
                });
                
            }).catch(err =>{
                
                console.log('ACABOU DANDO ERRO')
                console.log(err.response.data);

            })
          });
    }
    //COLOCAR EM HELPERS
     changeName = (name) =>{  
         const newName = name.split(' ')[0];
         return newName;
     }
    render(){

           const {
            navigation : {
                state : {params}
            },
        } = this.props;

        const {userData} = params;

        const {colorIcon, colorFont, nameTopic, video, hasVideo, user : {
            avatar,
            name
        }} = this.state;

        return( 
            <ScrollView style={{backgroundColor : '#ECECEC'}}>
           <Header text={"Minhas informações"}/>
            <View style={styles.container}>
                <TouchableOpacity onPress={this.useFromLibrary} onPressOut={console.log(avatar)}>
                <Image source={avatar == null ? avatar : {uri : `data:image/gif;base64,${avatar}`}} style={styles.photo}/>
                </TouchableOpacity>
                <View style={styles.descriptionContainer}>
        <Text style={styles.reverence}>Olá {this.changeName(name)}!</Text>
                    <Text style={styles.textReverece}>Aqui você pode visualizar e editar seus dados!</Text>
                </View>
            </View>
            
            <View style={styles.optionsNavigation}>
                {nameTopic == 'MinhasInformacoes' && (
                    <>
                        <Topic 
                            icon={infos} 
                            style={{backgroundColor : '#009640', width : 60, height : 60 }} 
                            text={'Minhas informações'} 
                            backgroundText={colorFont} 
                            size={36} 
                            onPress={() =>{}}
                        />
                        <Topic 
                            icon={pencil} 
                            style={{backgroundColor : colorIcon, width : 60, height : 60}} 
                            text={'Minha mensagem'} 
                            backgroundText={'#C6C5C5'} 
                            size={36} 
                
                        />
                        <Topic 
                            icon={play} 
                            style={{backgroundColor : colorIcon, width : 60, height : 60}} 
                            text={'Meu vídeo'} backgroundText={'#C6C5C5'} 
                            size={36} 
                
                        />
                    </>
                )}
                {nameTopic === 'MinhaMensagem' &&(
                    <>
                        <Topic 
                            icon={infos} 
                            style={{backgroundColor : colorIcon, width : 60, height : 60}} 
                            text={'Minhas informações'} 
                            backgroundText={colorFont} 
                            size={36} 
                
                        />
                        <Topic 
                            icon={pencil} 
                            style={{backgroundColor : '#009640', width : 60, height : 60 }} 
                            text={'Minha mensagem'} 
                            backgroundText={'#C6C5C5'} 
                            size={36} 
                
                        />
                        <Topic 
                            icon={play} 
                            style={{backgroundColor : colorIcon, width : 60, height : 60}} 
                            text={'Meu vídeo'} 
                            backgroundText={'#C6C5C5'} 
                            size={36} 
                
                        />
                    </>
                )}

                {nameTopic === 'MeuVideo' &&(
                    <>
                        <Topic 
                            icon={infos} 
                            style={{backgroundColor : colorIcon, width : 60, height : 60}} 
                            text={'Minhas informações'} 
                            backgroundText={colorFont} 
                            size={36} 
                
                        />
                        <Topic 
                            icon={pencil} 
                            style={{backgroundColor : colorIcon, width : 60, height : 60}} 
                            text={'Minha mensagem'} 
                            backgroundText={'#C6C5C5'} 
                            size={36} 
                
                        />
                        <Topic 
                            icon={play} 
                            style={{backgroundColor : '#009640', width : 60, height : 60 }} 
                            text={'Meu vídeo'} 
                            backgroundText={'#C6C5C5'} 
                            size={36} 
                
                        />
                    </>
                )}
               
            </View>

            {/* Precisa colocar uma função para mudar os Options navigation conforme o scroll ao lado */}
            <ScrollView 
                style={styles.options} 
                horizontal={true} 
                pagingEnabled={true}
                keyboardDismissMode={'on-drag'} 
                onScroll={this.onScrollColor}   
            >
                <MinhasInformacoes user={userData}/>
               <MinhaMensagem contentId={userData.contentId}/> 
               <MeuVideo video={video} hasVideo={hasVideo} onPress={this.handleAddVideo}/>
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
   },
})

