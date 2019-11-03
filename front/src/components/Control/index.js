import React, { Component } from 'react';
import Mapa from '../Map';
import Horarios from '../Horarios';

export default class Control extends Component
{
  render(){
    if(this.props.isMap){
      return  <Mapa/>;
    }
    else {
      return <Horarios/>;
    }
  }
}
