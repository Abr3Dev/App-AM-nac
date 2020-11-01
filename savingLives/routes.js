import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { faUserAlt as user } from '@fortawesome/free-solid-svg-icons';
import { faInfo as info } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import Cadastro from './screens/Cadastro';
import Carousel from './screens/Carousel';
import Login from './screens/Login';
import Duvidas from './screens/Duvidas/index';
import TelaPrincipal from './screens/TelaPrincipal';
import DuvidasFrequentes from './screens/DuvidasFrequentes';
import RedefinirSenha from './screens/RedefinirSenha';
import RedefinirSenhaCodigo from './screens/RedefinirSenhaCodigo';
import SobreAMensagem from './screens/SobreAMensagem';
import SobreSNT from './screens/SobreSNT';
import SobreNos from './screens/SobreNos'

const getTabBarIcon = (icon) => ({tintColor}) =>(
    <FontAwesomeIcon
        icon={icon}
        size={16}
        style={{color : tintColor}}
    />
)

const UserScreens = createStackNavigator(
    {TelaPrincipal},
    {
       initialRouteName : 'TelaPrincipal',
       navigationOptions : {
           tabBarIcon: getTabBarIcon(user),
           tabBarLabel: 'Minhas infos',
       } ,
       headerMode : false
    }
);

const QuestionScreens = createStackNavigator(
    {Duvidas},
    {
       initialRouteName : 'Duvidas',
       navigationOptions : {
           tabBarIcon: getTabBarIcon(info),
           tabBarLabel: 'Informações',
       },
       headerMode : false
       
    }
);

const TabNavigator = createBottomTabNavigator(
    {
        TelaPrincipal : UserScreens,
        Login : QuestionScreens,
    },
    {
        initialRouteName : 'TelaPrincipal',
        tabBarOptions : {
            style :{
                backgroundColor : '#FFFFFF',  
            },
            showLabel : true,
            showIcon : true,
            activeTintColor : '#009640',
            activeBackgroundColor : '#ECECEC',
            inactiveBackgroundColor : '#FFFFFF',
            inactiveTintColor : '#C6C5C5'
        },
    }
);

const stackNavigator = createStackNavigator(
    {
        Carousel : {
            screen : Carousel
        },
        Cadastro : {
            screen : Cadastro
        },
        Login : {
            screen : Login
        },
        TabNavigator : {
            screen : TabNavigator
        },
        DuvidasFrequentes : {
            screen : DuvidasFrequentes
        },
        RedefinirSenha : {
            screen : RedefinirSenha
        },
        RedefinirSenhaCodigo : {
            screen : RedefinirSenhaCodigo
        },
        SobreAMensagem : {
            screen : SobreAMensagem
        },
        SobreNos : {
            screen : SobreNos
        },
        SobreSNT : {
            screen : SobreSNT
        }
    },
    {
        initialRouteName : 'Carousel',
        headerMode : false
    }
)

export default createAppContainer(stackNavigator);