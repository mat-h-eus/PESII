import React, {Component} from 'react'
import M from 'materialize-css'
import './style.css'


export default class SideBar extends Component{
    componentDidMount(){
        M.AutoInit();
    }

    render(){
        return(
            <div className="customSideBar">
                <div style = {{border: "1px solid red", display:"flex", alignItems:"", justifyContent:"center" }}>
                    <div className="input-field" style = {{border: "1px solid red", display: "flex"}}>
                        <label style={{marginLeft:5}} className="label-icon" for="search"><i className="material-icons">search</i></label>
                        <input style={{paddingLeft:30, maxWidth:200}} id="search" type="search" required/>
                    </div>
                </div>
            </div>
        )
    }
}
