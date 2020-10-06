import React from 'react';
import AppNavigator from './routes';
import LinkBar from './components/LinkBar';
import Header from './components/Header';
import Input from './components/Input';
import OptionNav from './components/OptionNav';
import Carousel from './screens/Carousel';
import DuvidasFrequentes from './screens/DuvidasFrequentes';
import Cadastro from './screens/Cadastro';
import TelaPrincipal from './screens/telaPrincipal';
import Topic from './components/Topic';
import MinhasInformacoes from './screens/MinhasInformacoes';
import Title from './components/Title';
import Duvidas from './screens/Duvidas';
import Login from './screens/login';
import RedefinirSenha from './screens/RedefinirSenha';
import RedefinirSenhaCodigo from './screens/RedefinirSenhaCodigo';

//Fluxo das telas : PreLogin -> ComoFunciona ou Você sabia ou Login -> TelaPrincipal

export default App = () => <AppNavigator/>;

// export default app = () => <Input/>
