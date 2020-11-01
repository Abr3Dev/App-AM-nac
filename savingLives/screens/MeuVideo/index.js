import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import MainButton from '../../components/MainButton';
import Title from '../../components/Title'
import Video from 'react-native-video';
import api from '../../api/api';

const width = Dimensions.get('screen').width / 100 * 90

export default class MeuVideo extends React.Component {

    state = {
        idUser: 0,
        contentId : 0,
        hasVideo: false,
        video: ' ',
        paused : false
    }

    componentDidMount = () => {
        const contentId = this.props.video;

        api.get(`doandovidas/content/${contentId}`)
        .then(resp =>{
            const {video} = resp.data.data
            console.log(video);
            this.setState({
                contentId : contentId,
                video : video ==  null ? ' ' : video,
                hasVideo : this.state.video == ' ' ? false : true
            });
            
        }).catch(err =>{
            console.log(err.response.data);
        })
    }

    scroll = () =>{
        this.setState({
            paused : true
        })
    }

    render() {
        const { hasVideo, video } = this.state;
        const { onPress, onScroll } = this.props;
        return (
            <ScrollView style={styles.container}>
                <Title title={"Meu vídeo"} />

                {hasVideo && (
                    <>
                        <Video
                            source={video  == ' ' ? ' ' : { uri: video }}
                            style={styles.videoplay}
                            controls={true}
                            pictureInPicture={true}
                            fullscreenOrientation={'landscape'}
                            resizeMode={'cover'}
                            paused={onScroll}
                        />
                    </>
                )}
                {!hasVideo &&(
                    <>
                        <View style={styles.noVideo}>
                        <Text style={styles.TextNoVideo}>Você não possui vídeo!</Text>
                        </View>
                        <MainButton text='Adicionar Vídeo' bgColor='#009640' textColor='white' onPress={onPress}/>
                    </>
                )}
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
    },
    videoplay : {
        width : width,
        height : 300,
        alignSelf : 'flex-end',
        alignItems : 'center',
        justifyContent : 'center',

    },
    noVideo: {
        width: width,
        height: 300,
        backgroundColor : 'grey',
        flexDirection : 'column',
        justifyContent : 'space-around'
    },
    TextNoVideo : {
        fontSize : 24,
        textAlign : 'center'
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optionDelete: {
        backgroundColor: '#D93B3B',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 8,
        borderRadius: 5
    },
    optionTrade: {
        backgroundColor: '#0389FF',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 8,
        borderRadius: 5
    },
    desc: {
        color: 'white'
    }
})