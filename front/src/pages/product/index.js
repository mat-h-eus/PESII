import React, {Component} from 'react';
import api from '../../services/api';

export default class Product extends Component{
    state = {
        product : {}
    };
    async componentDidMount(){
        const id = this.props.match.params;
        const response  = await api.get(`products/${id}`)
    }
    render(){
        return <h1>Product</h1>
    }
}