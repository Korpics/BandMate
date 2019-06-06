import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
  render() {
    if(this.props.authenticated){
      return(
        <div className="Navbar">
        <ul>
          <Link to='/'>
            <img src={'https://i.imgur.com/pMvioiT.png'} alt='home' />
          </Link>
          <Link to='/logout'>
            <li>Logout</li>
          </Link>

        </ul>
      </div>
      )
    }
    return (
      <div className="Navbar">
        <ul>
        <Link to='/'>
    <img src={'https://i.imgur.com/pMvioiT.png'} alt='home' />
          </Link>
          <Link to='/signup'>
            <li>signup</li>
          </Link>
          <Link to='/login'>
            <li>Login</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Header;