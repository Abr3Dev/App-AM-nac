import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import MainButton from '../../components/MainButton';
import { faTimesCircle as close } from '@fortawesome/free-solid-svg-icons';
import { faRedo as reload } from '@fortawesome/free-solid-svg-icons';
import { faUpload as upload } from '@fortawesome/free-solid-svg-icons';
import EditButton from '../../components/EditButton';
import Title from '../../components/Title'
import Video from 'react-native-video';

const width = Dimensions.get('screen').width / 100 * 90

export default class MeuVideo extends React.Component {

    state = {
        idUser: 0,
        hasVideo: false,
        paused: false,
        video: ''
    }

    componentDidMount = () => {
        //Aqui vai pesquisar no banco o Id recebido do usuário. Caso não tnha um vídeo, retorna uma View
    }

    render() {
        const { hasVideo, paused, video } = this.state
        const {onPress} = this.props
        return (
            <View style={styles.container}>
                <Title title={"Meu vídeo"} />

                {hasVideo && (
                    
                    <>
                        <Video
                            source={video  == null ? '' : { uri: video }}
                            style={styles.video}
                            controls={true}
                            pictureInPicture={true}
                            
                        />
                        <View style={styles.options}>
                            <EditButton colorButton={'#D93B3B'} text='Excluir vídeo' icon={close} />
                            {hasVideo && console.log(video)(
                                <TouchableOpacity>
                                    <EditButton colorButton={'#0389FF'} text='Trocar vídeo' icon={reload} />
                                </TouchableOpacity>
                            )}
                            {!hasVideo && (
                                <TouchableOpacity>
                                    <EditButton colorButton={'#0389FF'} text='Adicionar vídeo' icon={upload} />
                                </TouchableOpacity>
                            )}
                        </View>
                    </>
                )}
                <View style={styles.noVideo}>
                    <Text style={styles.TextNoVideo}>Você não possui vídeo!</Text>
                </View>
                <MainButton text='Adicionar Vídeo' bgColor='#009640' textColor='white' onPress={onPress}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
    },
    video: {
        width : width,
        height : 300,
        backgroundColor : 'blue',
        alignSelf: 'center'
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