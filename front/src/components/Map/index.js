import React, { Component } from 'react';
import OlMap from "ol/map";
import OlView from "ol/view";
import OlLayerTile from "ol/layer/tile";
import OlSourceOSM from "ol/source/osm";

export default class Map extends Component{
    
    componentDidMount(){
        var featuresLayer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: []
            })
        });

        var map = new olMap({
            target : "mapContainer",
            layers:[
                new ollayerTile({
                    source : ol.layer.Tile({
                        source : new olSourceOSM()
                    })
                }),
                featuresLayer
            ],
            view: new olView({
                center: [-11718716.28195593, 4869217.172379018],
                zoom: 13
            })
        })

        this.setState({
            map : map,
            featuresLayer: featuresLayer
        })
    }

    componentDidUpdate(prevProps, prevState){
        this.state.featuresLayer.setSource(
            new ol.source.Vector({
                features: this.props.routes
            })
        )

    }
    render(){
        return (
            <div ref="mapContainer"></div>
        );
    }


}
