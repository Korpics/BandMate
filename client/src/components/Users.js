import React, { Component } from 'react';

class Users extends Component {
    constructor(props){
        super(props)
    }


    render() {
       return this.props.allUsers.map((user, i) => {
           return (
<div className="card" style={{marginLeft: 80, marginRight: 80, marginBottom: 100, marginTop: 100}}>
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{user.name}</p>
        <p className="subtitle is-6">{user.username}</p>
      </div>
    </div>
    <div className="content">
      {user.bio}
      <p>Primary Instrument: {user.instrument} </p> <p>Influences: {user.influences}</p>
      <br />
      <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer class="card-footer">
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