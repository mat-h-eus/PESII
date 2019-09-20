import React from 'react';
//import { directive } from '@babel/types';
import Header from './components/Header'
import './styles.css';
import Routes from './routes';

const App = () => (
    <div>
        <Header/>
        <Routes/>  
    </div>
);

export default App;
