import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom'

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
        const {page, productInfo} = this.state;
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
            <h1> Numero de produtos : {this.state.products.length}</h1>
            <div className= "product-list"> 
                {products.map(product => (
                    <article key = {product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages}onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        </div>
        )
    }
}