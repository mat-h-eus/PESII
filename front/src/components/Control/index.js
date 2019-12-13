import React, { Component } from 'react';
import Mapa from '../Map';
import Horarios from '../Horarios';

export default class Control extends Component
{
  render(){
    if(this.props.isMap){
      return  <Mapa rotaAtual={this.props.rotaAtual}/>;
    }
    else {
      return <Horarios rotaAtual={this.props.rotaAtual}/>;
    }
  }
}
