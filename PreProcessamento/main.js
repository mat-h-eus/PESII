const fs = require('fs');
const { Mapa } = require('./Mapa')

// leitura do geojson com o mapa de ruas
let raw = fs.readFileSync('MapaSHP.geojson');
let map = JSON.parse(raw);

// Definição do mapa
const { features } = map;
const mapaProcessado = new Mapa(map);

// faz o processamento do mapa unindo as fetures que formam uma mesma rua
fs.writeFile("./teste.geojson", JSON.stringify(mapaProcessado.getMapaProcessado()), err => {
    if (err)
        console.log(err);
});