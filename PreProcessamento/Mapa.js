const { Forma } = require('./Forma')

class Mapa {
    constructor(_map) {
        this.map = _map;
    }
    getMapaProcessado() {
        const { features } = this.map;
        let setFeatures = [];
        let featuresProcessadas = [];
        let nomes = [];

        features.forEach(feature => {
            try {
                const [{ name }, { coordinates }] = [feature['properties'], feature['geometry']];
                if (!setFeatures[name]) {
                    let forma = new Forma(feature);
                    nomes.push(name);
                    forma.addCoordenadas(coordinates);
                    setFeatures[name] = forma;
                } else
                    setFeatures[name].addCoordenadas(coordinates);
            } catch (e) {
                console.log(e);
                console.log(feature);
            }
        });
        let cont = 0;
        nomes.forEach(nome => {
            featuresProcessadas.push(setFeatures[nome].getFeature());
            cont ++;
        })
        this.map['features'] = featuresProcessadas;
        return this.map;
    }
}

module.exports = { Mapa };