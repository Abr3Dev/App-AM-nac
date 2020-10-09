import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MainButton from '../../components/MainButton';
import user from '../../assets/defaults/user.png';

export default class Logout extends React.Component{
    state = {
        name : 'Raphael',
        photo : user
    }

    logout = () =>{
        const { navigation : {navigate},} = this.props
        navigate('Carousel')
    }
    render(){
        const {name, photo} = this.state
        return(
            <View style={styles.container}>
                <Image source={photo} style={styles.photo}/>
                <Text style={styles.sentence}>Tem certeza que deseja sair {name}?</Text>
                <MainButton text={'Logout'} bgColor='#D93B3B' textColor='white' onPress={this.logout}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    photo : {
        width : 100,
        height : 100,
        borderRadius : 100
    },
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'space-around',
        flexDirection : 'column'
    },
    sentence : {
        fontSize : 24,
        textAlign : 'center'
    }
})