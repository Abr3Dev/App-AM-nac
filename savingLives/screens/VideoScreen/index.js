import React from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
import EditButton from '../../components/EditButton';
import { faTimesCircle as close } from '@fortawesome/free-solid-svg-icons';
import { faRedo as reload } from '@fortawesome/free-solid-svg-icons';
import { faUpload as upload } from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-crop-picker';
import api from '../../api/api';
import { Fail, Success } from '../../Helpers/Messages';
import Video from 'react-native-video';


const width = Dimensions.get('screen').width / 100 * 90

export default class VideoScreen extends React.Component {

    state = {
        contentId : 0,
        video : ' ',
        hasVideo : false,
        pause : true,
        error : false,
        message : '',
        success : ''
    }

    componentDidMount = () =>{ 
        const {contentId} = this.props
        this.setState({
            contentId : contentId,
            success : ''
        })

        api.get(`doandovidas/content/${contentId}`)
        .then(resp =>{
            this.setState({
                video : resp.data.data.video == null ? ' ' : resp.data.data.video,
                pause : true,
                message : resp.data.data.message,
                hasVideo : resp.data.data.video == null ? false : true
            })
        }).catch(err =>{
            this.setState({
                error : true
            })
        })
    }

    chooseVideo = () =>{

        ImagePicker.openPicker({
            mediaType: 'video',
        }).then(video => {
            this.setState({
                video : video.path,
                hasVideo : true,
            })
        this.sendVideo();
    })
}

    sendVideo = () =>{
        const {contentId} = this.state
        api.put(`doandovidas/content/update/${contentId}`, {
            "video" : this.state.video,
            "message" : this.state.message
        })
        .then(response =>{
            this.setState({
                video : response.data.data.video,
                success : 'Vídeo atualizado com sucesso!'
            })
            console.log('chegou aqui')
            console.log(this.state.success)
        }).catch(err =>{
            console.log('deu erro')
            console.log(err.response.data)
            this.setState({
                error : true,
                success : ''
            })
        })
    }

    handleRemoveVideo = () =>{
        console.log(this.state.contentId)
        api.put(`doandovidas/content/update/${this.state.contentId}`, {
            'id' : this.state.contentId,
            'video' : null,
            'message' : this.state.message
        }).then(response =>{ 
            console.log(response.data)
            this.setState({
                video : ' ',
                hasVideo : false,
                success : 'Vídeo removido com sucesso!'
            });
        }).catch(err =>{
            this.setState({
                error : true
            });
            console.log(err.response);
        });
    }

    render() {
        const {video, hasVideo, pause, error, success} = this.state;
        
        return (
            <>
            <View style={styles.container}>
                {error == true && <Fail message={'Não foi possível pegar seu vídeo. Tente novamente mais tarde'}/>}
                {success !== '' && <Success message={success}/>}
                <View style={styles.video}>
                    <Video
                        source={{ uri: video }}
                        style={styles.videoplay}
                        controls={true}
                        fullscreenOrientation={'landscape'}
                        resizeMode={'cover'}
                        paused={pause}
                        />
                </View>
                <View style={styles.options}>
                {hasVideo &&(
                    <>
                    <EditButton colorButton={'#D93B3B'} text='Excluir vídeo'    icon={close} onClick={this.handleRemoveVideo} disabled={false}/>
                    <EditButton colorButton={'#0389FF'} text='Trocar vídeo'     icon={reload} onClick={this.chooseVideo}/>
                    </>
                )}
                {!hasVideo &&(
                    <>
                    <EditButton colorButton={'grey'} text='Excluir vídeo'       icon={close} disabled={true}/>
                    <EditButton colorButton={'#0389FF'} text='Adcionar vídeo'   icon={upload} onClick={this.chooseVideo}/>
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