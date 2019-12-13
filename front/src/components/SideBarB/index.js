import React, {Component} from 'react'
import M from 'materialize-css'
import './style.css'

export default class SideBarB extends Component{
    render(){
      return(
          <div>
            <SearchBar/>
            <div>
              <Box/>
            </div>
          </div>
        );
    }
}


function SearchBar(){
  return(
    <div>
      <label style={{marginLeft:5}} className="label-icon" for="search"><i className="material-icons">search</i></label>
      <input style={{paddingLeft:30, maxWidth:200}} id="search" type="search" required/>
    </div>

  );
}

function Box(props){
  return(
    <h1>Produto</h1>
  );
}
