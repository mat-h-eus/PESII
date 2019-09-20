import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom'
import Mapa from '../../components/Map'

export default class Main extends Component{
    state = {
        products : [],
        productInfo: {},
        page : 1
    };

    componentDidMount(){
        this.loadProducts();

    }

    loadProducts = async (page = 1) => {
        
        const response =  await api.get(`/products?page=${page}`);

        const {docs, ...productInfo} = response.data;

        this.setState({products : docs, productInfo, page});
    }

    prevPage = () =>{
        const {page} = this.state;
        if(page === 1) return;
        const numberPage = page - 1; 
        this.loadProducts(numberPage);
    }

    nextPage = () =>{
        const {page, productInfo} = this.state;
      
        if(page === productInfo.pages) return;

        const numberPage = page+1;
        this.loadProducts(numberPage);
    }

    render(){
        const {products, productInfo, page} = this.state;

        return (
        <div>
           <div id="mapaConteiner">
                <Mapa/>
           </div>
        </div>
        )
    }
}