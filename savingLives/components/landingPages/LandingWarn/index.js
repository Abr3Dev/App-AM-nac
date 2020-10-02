import React from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground} from 'react-native';
import logo from '../../../assets/images/happyFamily.png';
import MainButton from '../../MainButton';

const width = Dimensions.get('screen').width
const height = Dimensions.get('window').height

function LandingWarn(){

    const handleChangeSub = () =>{
        
    }

    const handleChangeLogin = () =>{
        
    }

    return (
        <View style={{flex : 1}}>
       <ImageBackground source={logo} style={styles.background}>
       <View style={styles.container}>
           <Text style={styles.mainText}>AVISE SUA FAMILIA</Text>
           <Text style={styles.description}>Esse é o passo mais importante pois de acordo com a legislação somente ela poderá autorizar a doação.</Text>
           <MainButton text='Cadastre-se' bgColor='#009640' textColor='white' onPress={handleChangeSub}/>
           <Text>Ou</Text>
           <MainButton text='Faça seu Login' bgColor='#009640' textColor='white' onPress={handleChangeLogin}/>
        </View>
       </ImageBackground>
        </View>
    )
}

export default LandingWarn;

const styles = StyleSheet.create({

    background : {
        flex : 1,
        resizeMode : 'cover',
        width : width
    },
    container : {
        height : height / 100 * 80,
        alignItems : 'center',
        alignSelf : 'center',
        marginTop : 24,
        width : width / 100 * 80,
        justifyContent : 'space-between'
        
    },
    footer : {
        flexDirection : 'row', 
        justifyContent : 'center',
        width : width
    },
    mainText : {
        borderColor : 'white',
        borderWidth : 1,
        paddingHorizontal : 16,
        paddingVertical: 12,
        fontSize : 32,
        textAlign : 'center',
        color : 'white',
        borderRadius : 5
    },
    description : {
        color : 'white',
        lineHeight : 28,
    },  
    emphasis : {
        fontSize : 17
    },  
    footer : {
        flexDirection : 'row', 
        justifyContent : 'center',
        alignItems : 'center',
        width : width,
        height : height / 3
    },
})

