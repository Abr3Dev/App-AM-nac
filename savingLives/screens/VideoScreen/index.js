import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import EditButton from '../../components/EditButton';
import Header from '../../components/Header';
import { faTimesCircle as close } from '@fortawesome/free-solid-svg-icons';
import { faRedo as reload } from '@fortawesome/free-solid-svg-icons';
import { faUpload as upload } from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-crop-picker';
import Video, { FilterType } from 'react-native-video';
// import user from '../../assets/defaults/user.png';

const width = Dimensions.get('screen').width / 100 * 90

export default class VideoScreen extends React.Component {

    state = {
        video : ' ',
        hasVideo : false,
        pause : false
    }

    componentDidMount = () =>{
        //Chamar o vídeo através do ID passado para cá

        // ImagePicker.openPicker({
        //     mediaType: 'video',
        //   }).then(video => {
            
        //     this.setState({
        //         video : video.path,
        //         hasVideo : true
        //     })
        //   });
    }

    chooseVideo = () =>{
        ImagePicker.openPicker({
            mediaType: 'video',

          }).then(video => {
            console.log(video)
            this.setState({
                video : video.path,
                hasVideo : true
            })
          });
    }

    handleRemoveVideo = () =>{
        this.setState({
            video : ' ',
            hasVideo : false
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
                        maxBitRate={15000000}
                        resizeMode={'cover'}
                        onLoad={() =>{console.log(video)}}
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