const {Forma} = require('./Forma')

class Mapa{
    map;

    constructor(_map){
        this.map = _map;
    }
    getMapaProcessado(){
        const {features} = this.map;
        let setFeatures = [];
        let featuresProcessadas = [];

        features.forEach( feature => {
            const [nome, coordenadas] = [feature['properties']['name'], feature['geometry']['coordinates']];
            if(!setFeatures[nome]){
                let forma = new Forma(feature);
                forma.addCoordenadas(coordenadas);
                setFeatures[nome] = forma;
            }
            else
                setFeatures[nome].addCoordenadas(coordenadas);
        })

        setFeatures.forEach(feature =>{
            featuresProcessadas = feature.getFeature();
        })
        this.map['features'] = featuresProcessadas;
        return this.map;
    }
}

module.exports = {Mapa};