import React, { Component } from 'react';
import 'ol/ol.css';
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import {transform} from 'ol/proj.js';
import './style.css'

export default class Mapa extends Component{
    constructor(props) {
        super(props);

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
    componentDidMount() {
        this.map.setTarget("map");
    }

    render() {
        return (
          <div className='mapWrapper'>
            <div id="map" className = "mapBox"></div>
          </div>
        );
    }


}
