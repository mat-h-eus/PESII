class Forma{
    feicao;
    nome;
    setCoordenadas = [];
    coordenadas =[];

    constructor(objeto){
        this.feicao = objeto;
    }
    
    addCoordenadas(array){
        array.forEach(ponto => {
            if(!this.coordenadas[ponto]){
                this.coordenadas.push(ponto);
                this.coordenadas[ponto] = true;
            }    
        })
    }

    getFeature(){
        this.feicao['geometry']['coordinates'] = this.coordenadas;
        return this.feicao;
    }
}

module.exports = {Forma};
