import React, { Component } from 'react';
import 'ol/ol.css';
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlPoint from 'ol/geom/Point';
import OlVector from 'ol/layer/Vector';
import OlFeature from 'ol/Feature';
import OlLineString from 'ol/geom/LineString';
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import {transform} from 'ol/proj.js';
import './style.css'

export default class Mapa extends Component{
    constructor(props) {
        super(props);

        this.renderizarCaminhos = this.renderizarCaminhos.bind(this);

        this.map = new OlMap({
          target: null,
          layers: [
            new OlLayerTile({
              source: new OlSourceOSM()
            })
          ],
          view: new OlView({
            center: transform([-53.46330958485, -24.9614305105536], 'EPSG:4326', 'EPSG:3857'),
            zoom: 13
          })
        });
        
    }

    renderizarCaminhos(){
      
    }

    componentDidMount() {
        this.map.setTarget("map");
    }

    render() {
      this.renderizarCaminhos();
      console.log(this.props.rotaAtual)
        return (
          <div className='mapWrapper'>
            <div id="map" className = "mapBox"></div>
          </div>
        );
    }


}
