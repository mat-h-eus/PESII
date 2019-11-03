import React, { Component } from 'react';
import './styles.css';
import M from "materialize-css"
import SideBarB from '../../components/SideBarB';
import Control from '../../components/Control'

export default class Main extends Component{
    constructor(props){
      super(props);

      this.handleMapClick = this.handleMapClick.bind(this);
      this.handleHorarioClick = this.handleHorarioClick.bind(this);

      this.state = {
        isMap: true,
      };
    }

    handleMapClick(){
      const isMap = this.state.isMap;
      if(isMap)
        return;
      this.setState({isMap: true});
    }

    handleHorarioClick(){
      const isMap = this.state.isMap;
      if(isMap) {
        this.setState({isMap: false});
        return;
      }
      return;
    }

    componentDidMount(){
        M.AutoInit();

    }
    render(){
        return (
            <div>
            <section style={{border:"1px solid black", height:"100%"}} className="row">
                <div className="sidebar-wrapper green lighten-5 col s2">
                    <div>
                      <MapButton onClick={this.handleMapClick} />
                      <HorarioButton onClick={this.handleHorarioClick} />
                    </div>
                    <SideBarB/>
                </div>
                <div className="map-wrapper col s10">
                    <Control isMap={this.state.isMap}/>
                </div>
            </section>
            </div>
        )
    }
}

function MapButton(props){
  return(
    <button onClick={props.onClick}>MAP</button>
  );
}

function HorarioButton(props){
  return(
    <button onClick={props.onClick}>Horario</button>
  );
}
