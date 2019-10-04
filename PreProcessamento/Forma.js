class Forma {
    constructor(objeto) {
        this.feicao = objeto;
        this.feicao;
        this.nome;
        this.setCoordenadas = [];
        this.coordenadas = [];
    }

    addCoordenadas(vet) {
        vet.forEach(ponto => {
            if (!this.coordenadas[ponto]) {
                this.coordenadas.push(ponto);
                this.coordenadas[ponto] = true;
            }
        })
    }

    getFeature() {
        this.feicao['geometry']['coordinates'] = this.coordenadas;
        return this.feicao;
    }
}

module.exports = { Forma };