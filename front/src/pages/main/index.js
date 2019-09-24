import React, { Component } from 'react';
import './styles.css';
import M from "materialize-css"
import Mapa from '../../components/Map';
import SideBar from '../../components/SideBar';
import Horarios from '../../components/Horarios'

export default class Main extends Component{
    state = {
    };

    componentDidMount(){
        M.AutoInit();
    }
    render(){
        return (
            <div>
                <Mapa/>
                <div className="sidebar-wrapper green lighten-5">
                    <SideBar/>
                </div>
                <hr/>
                <Horarios/>
            </div>
            
        )
    }
}