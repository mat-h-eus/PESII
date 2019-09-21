import React, {Component} from 'react'
import M from 'materialize-css'
import './style.css'

export default class Horarios extends Component{
    componentridMount(){
        M.AutoInit();
    }
    render(){
        return(
            <div>
                <div className="tableWrapper">
                    <h4>SUL - LESTE via MARIA LUIZA</h4>
                </div>
                <div className = "tableWrapper">
                    <table className="striped tabela green lighten-3">
                        <thead>
                            <tr>
                                <th>Term. Leste</th>
                                <th>Term. Sul</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>05:00</td>
                                <td>05:20</td>
                            </tr>
                            <tr>
                                <td>05:40</td>
                                <td>06:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}