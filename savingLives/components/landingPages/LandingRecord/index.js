import React from 'react';
import { StyleSheet, View, TextInput, Text, ImageBackground, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import logo from '../../../assets/images/plant.png';

 const width = Dimensions.get('screen').width
 const height = Dimensions.get('window').height
// const sizeLtetter = width/100 * 70;
// const heightTree = height / 2;



function LandingRecord(){
    return (
        
       <View>
           <ImageBackground source={logo} style={styles.background}>
           <View style={styles.container}>
           <Text style={styles.mainText}>GRAVE UM DEPOIMENTO</Text>
           <Text style={styles.description}>Contando a todos que você decidiu ser um doador de vidas</Text>
           <Text style={styles.description}>Depois, faça o upload dentro do nosso aplicativo</Text>
        </View>
        <View style={styles.footer}>
            <Text>Icone de passar</Text>
        </View>
           </ImageBackground>
       </View>
    )
}
export default LandingRecord;

const styles = StyleSheet.create({

    background : {
        flex : 1,
        resizeMode : 'cover',
        width : width
    },
     container : {
         alignItems : 'center',
         alignSelf : 'center',
         marginTop : 24,
         width : width / 100 * 80,
         height : height / 100 * 60,
         justifyContent : 'space-between',  
     },
     footer : {
         flexDirection : 'row', 
         justifyContent : 'center',
         alignItems : 'center',
         width : width,
         height : height / 3
     },
     mainText : {
         borderColor : 'white',
         borderWidth : 1,
         paddingHorizontal : 16,
         paddingVertical: 12,
         fontSize : 32,
         textAlign : 'center',
         color : 'white',
     },
     description : {
         color : 'white',
         lineHeight : 28,
         fontSize : 16
     },  
});
