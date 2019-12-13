import React, { Component } from 'react';
import './styles.css';
import M from "materialize-css"
import Control from '../../components/Control'
import api from '../../services/api'

export default class Main extends Component{
    constructor(props){
      super(props);

      this.handleMapClick = this.handleMapClick.bind(this);
      this.handleHorarioClick = this.handleHorarioClick.bind(this);
      this.setRotaAtual = this.setRotaAtual.bind(this);

      this.state = {
        isMap: true,
        rotas : [],
        rotaAtual : null
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

    setRotaAtual(rota){
      console.log("novaRota");
      console.log(rota);
      if(rota != null)
        this.setState({rotaAtual : rota});
      return;
    }

    componentDidMount(){
        M.AutoInit();
        this.loadRotas();
    }

    loadRotas = async () => {
      const response = await api.get("/products");
      this.setState({rotas : response.data.docs});
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
                    <div>
                      <SearchBar/>
                      <div>
                        {
                          this.state.rotas.map(rota => (
                            <button key = {rota._id} onClick={() => this.setState({rotaAtual : rota})}> {rota.nome}</button>
                          ))
                        }   
                      </div>
                    </div>
                </div>
                <div className="map-wrapper col s10">
                    <Control isMap={this.state.isMap} rotaAtual={this.state.rotaAtual}/>
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

function SearchBar(){
  return(
    <div>
      <label style={{marginLeft:5}} className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
      <input style={{paddingLeft:30, maxWidth:200}} id="search" type="search" required/>
    </div>
  );
}
