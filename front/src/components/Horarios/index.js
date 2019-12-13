import React, {Component} from 'react'
import M from 'materialize-css'
import './style.css'

export default class Horarios extends Component{
    constructor(props){
        super(props);

        this.printSemana = this.printSemana.bind(this);
        this.printSabados = this.printSabados.bind(this);
        this.printDomingos = this.printDomingos.bind(this);

        this.state = {
         horarioSemana: []
        };
      }

    componentridMount(){
        M.AutoInit();
    }

    printSemana(){
        let arraySemana = [];

        if(this.props.rotaAtual != null){
            if(this.props.rotaAtual.horaChegadaA.chegadaSemana.length > this.props.rotaAtual.horaChegadaB.chegadaSemana.length){
                let i;
                for(i = 0; i < this.props.rotaAtual.horaChegadaB.chegadaSemana.length; i++)
                    arraySemana.push([this.props.rotaAtual.horaChegadaA.chegadaSemana[i], this.props.rotaAtual.horaChegadaB.chegadaSemana[i]]);
                for(;i < this.props.rotaAtual.horaChegadaA.chegadaSemana.length; i++)
                    arraySemana.push([this.props.rotaAtual.horaChegadaA.chegadaSemana[i], " "]);

            }
            else {
                let i;
                for(i = 0; i < this.props.rotaAtual.horaChegadaA.chegadaSemana.length; i++)
                    arraySemana.push([this.props.rotaAtual.horaChegadaA.chegadaSemana[i], this.props.rotaAtual.horaChegadaB.chegadaSemana[i]]);
                for(;i < this.props.rotaAtual.horaChegadaB.chegadaSemana.length; i++)
                    arraySemana.push([" ", this.props.rotaAtual.horaChegadaB.chegadaSemana[i]]);
            }
        }
        return (
            <tbody> {
                arraySemana.map(horario =>
                    <tr>
                        <td>{horario[0]}</td>
                        <td>{horario[1]}</td>
                    </tr>
                )}
            </tbody>
        )
    }

    printSabados(){
        let arraySemana = [];

        if(this.props.rotaAtual != null){
            if(this.props.rotaAtual.horaChegadaA.chegadaSabados.length > this.props.rotaAtual.horaChegadaB.chegadaSabados.length){
                let i;
                for(i = 0; i < this.props.rotaAtual.horaChegadaB.chegadaSabados.length; i++)
                    arraySemana.push([this.props.rotaAtual.horaChegadaA.chegadaSabados[i], this.props.rotaAtual.horaChegadaB.chegadaSabados[i]]);
                for(;i < this.props.rotaAtual.horaChegadaA.chegadaSabados.length; i++)
                    arraySemana.push([this.props.rotaAtual.horaChegadaA.chegadaSabados[i], " "]);

            }
            else {
                let i;
                for(i = 0; i < this.props.rotaAtual.horaChegadaA.chegadaSabados.length; i++)
                    arraySemana.push([this.props.rotaAtual.horaChegadaA.chegadaSabados[i], this.props.rotaAtual.horaChegadaB.chegadaSabados[i]]);
                for(;i < this.props.rotaAtual.horaChegadaB.chegadaSabados.length; i++)
                    arraySemana.push([" ", this.props.rotaAtual.horaChegadaB.chegadaSabados[i]]);
            }
        }
        return (
            <tbody> {
                arraySemana.map(horario =>
                    <tr>
                        <td>{horario[0]}</td>
                        <td>{horario[1]}</td>
                    </tr>
                )}
            </tbody>
        )
    }

    printDomingos(){
        let arraySemana = [];

        if(this.props.rotaAtual != null){
            console.log(this.props.rotaAtual.horaChegadaA.chegadaDomingos.length);
            if(this.props.rotaAtual.horaChegadaA.chegadaDomingos.length > this.props.rotaAtual.horaChegadaB.chegadaDomingos.length){
                let i;
                for(i = 0; i < this.props.rotaAtual.horaChegadaB.chegadaDomingos.length; i++)
                    arraySemana.push([this.props.rotaAtual.horaChegadaA.chegadaDomingos[i], this.props.rotaAtual.horaChegadaB.chegadaSabados[i]]);
                for(;i < this.props.rotaAtual.horaChegadaA.chegadaDomingos.length; i++)
                    arraySemana.push([this.props.rotaAtual.horaChegadaA.chegadaDomingos[i], " "]);

            }
            else {
                let i;
                for(i = 0; i < this.props.rotaAtual.horaChegadaA.chegadaDomingos.length; i++)
                    arraySemana.push([this.props.rotaAtual.horaChegadaA.chegadaDomingos[i], this.props.rotaAtual.horaChegadaB.chegadaSabados[i]]);
                for(;i < this.props.rotaAtual.horaChegadaB.chegadaDomingos.length; i++)
                    arraySemana.push([" ", this.props.rotaAtual.horaChegadaB.chegadaDomingos[i]]);
            }
        }
        return (
            <tbody> {
                arraySemana.map(horario =>
                    <tr>
                        <td>{horario[0]}</td>
                        <td>{horario[1]}</td>
                    </tr>
                )}
            </tbody>
        )
    }


    render(){
        return(
            <div>
                <div className="tableWrapper">
                    <h4>{this.props.rotaAtual != null ? (this.props.rotaAtual.nome):" "}</h4>
                </div>
                <table >
                  <thead>
                    <tr>
                      <th  style={{ border:"1px solid black", textAlign:"center"}}>Segunda a sexta</th>
                      <th  style={{ border:"1px solid black", textAlign:"center"}}>Sábados</th>
                      <th  style={{ border:"1px solid black", textAlign:"center"}}>Domingos e Feriados</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding:0}}>
                        <table style={{minWidth: "100%"}} className="striped tabela green lighten-3">
                            <thead>
                                <tr>
                                    <th>{this.props.rotaAtual != null ? (this.props.rotaAtual.nomePontoA):"--"}</th>
                                    <th>{this.props.rotaAtual != null ? (this.props.rotaAtual.nomePontoB):"--"}</th>
                                </tr>
                            </thead>
                                {
                                   this.printSemana()
                                }
                        </table>
                      </td>
                      <td style={{ padding:0}}>
                        <table style={{minWidth: "100%"}} className="striped tabela green lighten-3">
                            <thead>
                                <tr>
                                    <th>{this.props.rotaAtual != null ? (this.props.rotaAtual.nomePontoA):"--"}</th>
                                    <th>{this.props.rotaAtual != null ? (this.props.rotaAtual.nomePontoB):"--"}</th>
                                </tr>
                            </thead>
                                {
                                   this.printSabados()
                                }
                        </table>
                      </td>
                      <td style={{ padding:0}}>
                        <table style={{minWidth: "100%"}} className="striped tabela green lighten-3">
                            <thead>
                                <tr>
                                    <th>{this.props.rotaAtual != null ? (this.props.rotaAtual.nomePontoA):"--"}</th>
                                    <th>{this.props.rotaAtual != null ? (this.props.rotaAtual.nomePontoB):"--"}</th>
                                </tr>
                            </thead>
                                {
                                   this.printDomingos()
                                }
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        )
    }
}
