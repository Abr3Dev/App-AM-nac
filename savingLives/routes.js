import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { faUserAlt as user } from '@fortawesome/free-solid-svg-icons';
import { faVideo as upload } from '@fortawesome/free-solid-svg-icons';
import { faInfo as info } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt as logout } from '@fortawesome/free-solid-svg-icons';
import Login from './screens/login';
import Duvidas from './screens/Duvidas/index';
import TelaPrincipal from './screens/principal';
import VideoScreen from './screens/VideoScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import Cadastro from './screens/Cadastro';
import Carousel from './screens/Carousel';
import Logout from './screens/Logout'

const getTabBarIcon = (icon) => ({tintColor}) =>(
    <FontAwesomeIcon
        icon={icon}
        size={16}
        style={{color : tintColor}}
    />
)

const LogoutScreens = createStackNavigator(
    {Logout},
    {
        initialRouteName : 'Logout',
        navigationOptions : {
            tabBarIcon : getTabBarIcon(logout),
            tabBarLabel: 'Logout',
        },
        headerMode : false
    }
)

// const AllScreens = createStackNavigator(
//     {
//         Carousel : {
//             screen : Carousel,
//             navigationOptions : {
//                 header : () => false
//             }
//         },
//         Cadastro : {
//             screen : Cadastro,
//             navigationOptions : {
//                 header : () => false
//             }
//         },
//         Login : {
//             screen : Login
//         }

//     }
// )

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

const VideoScreens = createStackNavigator(
    {VideoScreen},
    {
       initialRouteName : 'VideoScreen',
       navigationOptions : {
           tabBarIcon: getTabBarIcon(upload),
           tabBarLabel: 'Meu vídeo',
       } ,
       headerMode : false
    }
);


const QuestionScreens = createStackNavigator(
    {Login},
    {
       initialRouteName : 'Login',
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
        VideoScreen : VideoScreens,
        Login : QuestionScreens,
        Logout : LogoutScreens
        
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

export default createAppContainer(TabNavigator);