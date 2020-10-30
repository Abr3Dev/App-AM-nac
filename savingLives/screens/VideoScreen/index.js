import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import EditButton from '../../components/EditButton';
import Header from '../../components/Header';
import { faTimesCircle as close } from '@fortawesome/free-solid-svg-icons';
import { faRedo as reload } from '@fortawesome/free-solid-svg-icons';
import { faUpload as upload } from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-crop-picker';
import Video, { FilterType } from 'react-native-video';
import api from '../../api/api';


const width = Dimensions.get('screen').width / 100 * 90

export default class VideoScreen extends React.Component {

    state = {
        id : 0,
        video : ' ',
        hasVideo : false,
        pause : false
    }

    // componentDidMount = () => {
    //     this.setState({
    //         id : contentId
    //     });
    //     console.log(contentId)
    // }

    componentDidMount = () =>{
        //const {navigation : {state : {params}}} = this.props;   
       
    }

    chooseVideo = (id) =>{

        ImagePicker.openPicker({
            mediaType: 'video',
        }).then(video => {
            this.setState({
                video : video.path,
                hasVideo : true
            });
            console.log(id)
        this.sendVideo(id);
    });
}

    sendVideo = (id) =>{
        console.log( id)
        const {contentId} = this.state
        api.put(`doandovidas/content/update/${contentId}`, {
            'id' : id,
            'video' : this.state.video
        })
        .then(response =>{
            
        }).catch(err =>{
            console.log('deu erro')
            console.log(err.response.data)
        })
    }

    handleRemoveVideo = (id) =>{
        
        api.delete(`doandovidas/content/delete/`, {
            'id' : id,
            'video' : null
        }).then(response =>{ 
            console.log(response.data)
            this.setState({
                video : ' ',
                hasVideo : false
            });
        }).catch(err =>{
            console.log(err.response);
        })
    }

    render() {
        const {video, hasVideo} = this.state
        
        return (
            <>
            <Header text='Meu Vídeo' />
            <View style={styles.container}>
                <View style={styles.video}>
                    <Video
                        source={{ uri: video }}
                        style={styles.videoplay}
                        controls={true}
                        fullscreenOrientation={'landscape'}
                        resizeMode={'cover'}
                        />
                </View>
                <View style={styles.options}>
                    
                {hasVideo &&(
                    <>
                    <EditButton colorButton={'#D93B3B'} text='Excluir vídeo' icon={close} onClick={this.handleRemoveVideo} disabled={false}/>
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
    container : {
        width: width,
        alignSelf: 'center'
    },
    video : {
        width: width,
        height: 300,
        marginTop: 24,
        backgroundColor: 'black',
        alignSelf: 'center'
    },
    videoplay : {
        width : width,
        height : 300,
        alignSelf : 'flex-end',
        alignItems : 'center',
        justifyContent : 'center',

    },
    options : {
        marginTop : 36,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
})