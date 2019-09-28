const fs = require('fs');
const {Mapa} = require('./Mapa') 

//leitura do geojson
let raw = fs.readFileSync('MapaSHP.geojson');
let map = JSON.parse(raw);

const {features} = map;

const mapaProcessado = new Mapa(map);

console.log(mapaProcessado.getMapaProcessado());



