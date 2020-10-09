import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import EditButton from '../../components/EditButton';
import Header from '../../components/Header';
import { faTimesCircle as close } from '@fortawesome/free-solid-svg-icons';
import { faRedo as reload } from '@fortawesome/free-solid-svg-icons';
import { faUpload as upload } from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-crop-picker';

const width = Dimensions.get('screen').width / 100 * 90

export default class VideoScreen extends React.Component {

    state = {
        video : '',
        hasVideo : false,
        pause : false
    }

    componentDidMount = () =>{
        //Chamar o vídeo através do ID passado para cá
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


    render() {
        const {video, hasVideo} = this.state
        return (
            <>
            <Header text='Meu Vídeo' />
            <View style={styles.container}>
                <View style={styles.video}>

                </View>
                <View style={styles.options}>
                    
                {hasVideo &&(
                    <>
                    <EditButton colorButton={'#D93B3B'} text='Excluir vídeo' icon={close} onClick={() =>{}} disabled={false}/>
                    <EditButton colorButton={'#0389FF'} text='Trocar vídeo' icon={reload} onClick={this.chooseVideo}/>
                    </>
                )}
                {!hasVideo &&(
                    <>
                    <EditButton colorButton={'grey'} text='Excluir vídeo' icon={close} disabled={true}/>
                    <EditButton colorButton={'#0389FF'} text='Adcionar vídeo' icon={upload} onClick={this.chooseVideo}/>
                    </>
                )}
                        
                </View>
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        alignSelf: 'center'
    },
    video: {
        width: width,
        height: 300,
        marginTop: 24,
        backgroundColor: 'black',
        alignSelf: 'center'
    },
    options : {
        marginTop : 36,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
})