import React, { Component } from 'react';

class Users extends Component {
    constructor(props){
        super(props)
    }


    render() {
       return this.props.allUsers.map((user, i) => {
           return (
<div className="card" style={{marginLeft: 80, marginRight: 80, marginBottom: 100, marginTop: 100}}>
  <header className="card-header">
    <p className="card-header-title">
    {user.name}
    </p>
    <a href="#" className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true" />
      </span>
    </a>
  </header>
  <div className="card-content">
  <div className="content">
      {user.bio}
      <p>Primary Instrument: {user.instrument} </p> <p>Influences: {user.influences}</p><p>Link: {user.link}</p>
      <br />
      <time dateTime="2016-1-1">{user.createdAt}</time>
    </div>
  </div>
  <footer className="card-footer">
    <a href="#" class="card-footer-item"> Add </a>
    <a href="#" class="card-footer-item"> Deny </a>
    <a href="#" class="card-footer-item"> Flag </a>
  </footer>
</div>

















            )
        });
        }
}

export default Users;