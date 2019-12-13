import React,{ Component } from 'react';
//import { directive } from '@babel/types';
import Header from './components/Header'
import './styles.css';
import Routes from './routes'
import 'materialize-css/dist/css/materialize.min.css';

export default class App extends Component{
    render(){
        return(
            <div style={{height: "100%"}}>
                <Header/>
                <Routes/>
            </div>
        )
    }
}
