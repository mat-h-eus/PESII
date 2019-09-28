import React, {Component} from 'react';
import './styles.css';
import M from "materialize-css"

export default class Header extends Component{
    componentDidMount(){
        M.AutoInit();
    }
    render(){
        return ( 
            <div className='navbar-fixed green lighten-1'>
                <nav className="green lighten-1 rem-bs">
                    <div className = "main-header">
                        <div>
                            BTG - Bus Tracker Generico
                        </div>
                    </div>
                </nav>
            </div>  
        )
    }
}
