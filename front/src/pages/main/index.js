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
            <section style={{border:"1px solid black", height:"100%"}} className="row">
                <div className="sidebar-wrapper green lighten-5 col s2">
                    <SideBar/>
                </div>
                <div className="map-wrapper col s10">
                    <Mapa/>
                </div>   
            </section>
                <hr/>
                <Horarios/>
            </div>
        )
    }
}