import React from 'react';
//import { directive } from '@babel/types';
import Header from './components/Header'
import './styles.css';
import Main from './pages/main';
import Routes from './routes';
import api from './services/api'

const App = () => (
    <div>
        <Header/>
        <Routes/>    
    </div>
);

export default App;
