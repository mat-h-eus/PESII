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
            <section style={{border:"1px solid black", height:"100%"}}>
                <div className="map-wrapper">
                    <Mapa/>
                </div>
                <div className="sidebar-wrapper green lighten-5">
                    <SideBar/>
                </div>
                
            </section>
                <hr/>
                <Horarios/>
            </div>
        )
    }
}