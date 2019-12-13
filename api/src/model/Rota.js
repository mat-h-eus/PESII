const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');

const RotaSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    horaChegadaA:{
        type: Object,
        required: true
    },
    horaChegadaB:{
        type: Object,
        required: true
    },
    coordenadasPontoA : {
        type:String,
        required : true
    },
    coordenadasPontoB : {
        type:String,
        required : true
    },
    nomePontoA:{
        type: String,
        required: true
    },
    nomePontoB:{
        type: String,
        required: true
    },
    geomEtinerarioIda : {
        type:Object,
        required : true
    },
    geomEtinerarioVolta : {
        type:Object,
        required : true
    },
});

RotaSchema.plugin(mongoosePaginate);

mongoose.model("Rota", RotaSchema);

/*
Estrutura dos parametros de hora de chegada

Ex:
    horaChegadaA : {
        "chegadaSemana"   : {"13:30", "15:20", "17:50"},
        "chegadaSabados"  : {"13:30", "15:20", "17:50"},
        "chegadaDomingos" : {"13:30", "15:20", "17:50"},
    }
*/