import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return(
      <div className="Navbar">
        <Link to='/'>
    <img className="imageClass" src={'https://i.imgur.com/pMvioiT.png'} alt='home' style={{marginTop:80, marginBottom: 30}} />
          </Link>
      </div>
    );
  }
}

export default Header;