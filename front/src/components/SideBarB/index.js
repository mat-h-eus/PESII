import React, {Component} from 'react'
import M from 'materialize-css'
import './style.css'
import Product from 'C:/Users/Mateus Edival/Documents/Codigos/CodeWEB/PESII/front/src/pages/product'

export default class SideBarB extends Component{
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

    }
    render(){
      return(
          <div>
            <div>
              <MapButton onClick={this.handleMapClick} />
              <HorarioButton onClick={this.handleHorarioClick} />
            </div>
            <SearchBar/>
            <div>
              <Box isMap={this.state.isMap}/>
            </div>
          </div>
        );
    }
}


function SearchBar(){
  return(
    <div>
      <label style={{marginLeft:5}} className="label-icon" for="search"><i className="material-icons">search</i></label>
      <input style={{paddingLeft:30, maxWidth:200}} id="search" type="search" required/>
    </div>

  );
}

function MapBox(props){
  return(
    <h1>Mapa</h1>
  );
}

function HorarioBox(props){
  return(
    <h1>Horario</h1>
  );
}


function Box(props){
  const isMap = props.isMap;
  if(isMap)
    return <MapBox/>;
  return <HorarioBox/>;
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
