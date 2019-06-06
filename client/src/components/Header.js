import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
    constructor(props){
        super(props)
    }
  render() {
    if(this.props.authenticated){
      return(
        <div className="Navbar">
        <ul>
          <Link to='/'>
            <img className="authimageClass" src={'https://i.imgur.com/pMvioiT.png'} alt='home' />
          </Link>
          <Link to='/settings'>
            <p>User Settings</p>
          </Link>
          <p>authenticated</p>

        </ul>
      </div>
      )
    } else
    return (
      <div className="Navbar">
        <Link to='/'>
    <img className="imageClass" src={'https://i.imgur.com/pMvioiT.png'} alt='home' />
          </Link>
      </div>
    );
  }
}

export default Header;