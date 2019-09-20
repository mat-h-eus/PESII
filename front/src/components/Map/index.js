import React, { Component } from 'react';
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import {transform} from 'ol/proj.js';

export default class Mapa extends Component{
    constructor(props) {
        super(props);
    
        this.state = { center: [-5951508.399108645, -2871007.9746428006], zoom: 13 };
    
        this.olmap = new OlMap({
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

    updateMap() {
        this.olmap.getView().setCenter(this.state.center);
        this.olmap.getView().setZoom(this.state.zoom);
    }

    componentDidMount() {
        this.olmap.setTarget("map");
    
        // Listen to map changes
        this.olmap.on("moveend", () => {
          let center = this.olmap.getView().getCenter();
          let zoom = this.olmap.getView().getZoom();
          this.setState({ center, zoom });
        });
    }

    render() {

        return (
          <div id="map" ></div>
        );
    }


}
