import React from 'react';
//import { directive } from '@babel/types';
import Header from './components/Header'
import './styles.css';
import Main from './pages/main';
import Routes from './routes';
import api from './services/api'
import Map from './components/Map'

const App = () => (
    <div>
        <Header/>
        <Routes/>
        <Map/>    
    </div>
);

export default App;
