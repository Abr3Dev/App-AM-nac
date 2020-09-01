import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import ComoFunciona from './screens/comoFunciona/index'
import Login from './screens/login';
import TelaPrincipal from './screens/principal';
import PreLogin from './screens/preLogin';
import VoceSabia from './screens/VoceSabia';

const StackNavigator = createStackNavigator(
    {
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
    },
    {
       initialRouteName : 'PreLogin',
       headerMode : 'none'
    }
);

export default createAppContainer(StackNavigator);