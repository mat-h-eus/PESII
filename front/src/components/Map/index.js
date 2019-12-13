import React, { Component } from 'react';
import 'ol/ol.css';
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlPoint from 'ol/geom/Point';
import OlStyleStyle from 'ol/style/Style';
import OlStyleFill from 'ol/style/Fill';
import OlStyleStroke from 'ol/style/Stroke'
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';
import OlFeature from 'ol/Feature';
import OlLineString from 'ol/geom/LineString';
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import {transform} from 'ol/proj.js';
import Overlay from 'ol/Overlay';
import {Icon} from 'ol/style';
import iconTerminal from '../../images/terminal2.png';
import './style.css'

export default class Mapa extends Component{
    constructor(props) {
        super(props);

        this.renderizarCaminhoIda = this.renderizarCaminhoIda.bind(this);
        this.renderizarCaminhoVolta = this.renderizarCaminhoVolta.bind(this);
        this.addPontosAB = this.addPontosAB.bind(this);


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

    renderizarCaminhoIda(){
      var points = [];
      if(this.props.rotaAtual != null){
        for(let i = 0; i < this.props.rotaAtual.geomEtinerarioIda.length; i++){
          let pontoString = this.props.rotaAtual.geomEtinerarioIda[i];

          let pontoStringCoord = pontoString.split(',');
          

          let lat = parseFloat(pontoStringCoord[0]);
          let lng = parseFloat(pontoStringCoord[1]);

          let ponto = [lat,lng];
          points.push(ponto);
        }
      }

      for (var i = 0; i < points.length; i++) {
        points[i] = transform(points[i], 'EPSG:4326', 'EPSG:3857');
      }
      var featureLine = new OlFeature({
          geometry: new OlLineString(points)
      });
      var vectorLine = new OlSourceVector({});
      vectorLine.addFeature(featureLine);

      var vectorLineLayer = new OlLayerVector({
          source: vectorLine,
          style: new OlStyleStyle({
              fill: new OlStyleFill({ color: '#00FF00', weight: 6 }),
              stroke: new OlStyleStroke({ color: '#00FF00', width: 5 })
          })
      });

      this.map.addLayer(vectorLineLayer);
    }

    renderizarCaminhoVolta(){
      var points = [];
      if(this.props.rotaAtual != null){
        for(let i = 0; i < this.props.rotaAtual.geomEtinerarioVolta.length; i++){
          let pontoString = this.props.rotaAtual.geomEtinerarioVolta[i];

          let pontoStringCoord = pontoString.split(',');
          

          let lat = parseFloat(pontoStringCoord[0]);
          let lng = parseFloat(pontoStringCoord[1]);

          let ponto = [lat,lng];
          points.push(ponto);
        }
      }

      for (var i = 0; i < points.length; i++) {
        points[i] = transform(points[i], 'EPSG:4326', 'EPSG:3857');
      }
      var featureLine = new OlFeature({
          geometry: new OlLineString(points)
      });
      var vectorLine = new OlSourceVector({});
      vectorLine.addFeature(featureLine);

      var vectorLineLayer = new OlLayerVector({
          source: vectorLine,
          style: new OlStyleStyle({
              fill: new OlStyleFill({ color: '#FF0000', weight: 6 }),
              stroke: new OlStyleStroke({ color: '#FF0000', width: 5 })
          })
      });

      this.map.addLayer(vectorLineLayer);
    }

    addPontosAB(){
      if(this.props.rotaAtual != null){

        let pontoAString = this.props.rotaAtual.coordenadasPontoA;
        let pontoAStringCoord = pontoAString.split(',');
        let latA = parseFloat(pontoAStringCoord[0]);
        let lngA = parseFloat(pontoAStringCoord[1]);

        let pontoBString = this.props.rotaAtual.coordenadasPontoB;
        let pontoBStringCoord = pontoBString.split(',');
        let latB = parseFloat(pontoBStringCoord[0]);
        let lngB = parseFloat(pontoBStringCoord[1]);

        let pontoA = [latA,lngA];
        let pontoB = [latB,lngB];


        var iconStyle = new OlStyleStyle({
          image: new Icon({
            anchor: [0.5, 0.5],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: iconTerminal
          })
        });

        var iconFeatureA = new OlFeature({
          geometry: new OlPoint(transform(pontoA, 'EPSG:4326', 'EPSG:3857')),
          name: 'Null Island',
          population: 4000,
          rainfall: 500
        });

        var iconFeatureB = new OlFeature({
          geometry: new OlPoint(transform(pontoB, 'EPSG:4326', 'EPSG:3857')),
          name: 'Null Island',
          population: 4000,
          rainfall: 500
        });

        iconFeatureA.setStyle(iconStyle);
        iconFeatureB.setStyle(iconStyle);

        var vectorSource = new OlSourceVector({
          features: [iconFeatureA,iconFeatureB]
        });

        var vectorLayer = new OlLayerVector({
          source: vectorSource
        });

        this.map.addLayer(vectorLayer);
      }
    }

    componentDidMount() {
        this.map.setTarget("map");        
    }

    render() {
      this.renderizarCaminhoIda();
      this.renderizarCaminhoVolta();
      this.addPontosAB();
      console.log(this.props.rotaAtual)
        return (
          <div className='mapWrapper'>
            <div id="map" className = "mapBox"><div id="popup"></div></div>
          </div>
        );
    }


}
