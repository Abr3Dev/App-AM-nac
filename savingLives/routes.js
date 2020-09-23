import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import ComoFunciona from './screens/comoFunciona/index'
import Login from './screens/login';
import TelaPrincipal from './screens/principal';
import PreLogin from './screens/preLogin';
import VoceSabia from './screens/VoceSabia';
import Carousel from './screens/Carousel'
import DuvidasFrequentes from './screens/DuvidasFrequentes';

const StackNavigator = createStackNavigator(
    {
        Carousel : {
            screen : Carousel
        },
        ComoFunciona : {
            screen : ComoFunciona
        },
        PreLogin  :{
            screen : PreLogin
        },
        VoceSabia : {
            screen : VoceSabia
        },
        Login : {
            screen : Login
        },
        TelaPrincipal : {
            screen : TelaPrincipal
        },
        DuvidasFrequentes : {
            screen : DuvidasFrequentes
        }
    },
    {
       initialRouteName : 'Carousel',
       headerMode : 'none'
    }
);

export default createAppContainer(StackNavigator);