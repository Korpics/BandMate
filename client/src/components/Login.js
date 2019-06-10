import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {


    handleSubmitForm = (event) => {
        event.preventDefault();
        this.props.handleLogin();
      }

    render() {
        if(this.props.authenticated){
            return <Redirect to='/dashboard' /> 
        }
        return (
        <div>
          <div className="field" style={{marginLeft: 600, marginTop: 30, marginRight: 600, marginBottom: 30}}>
            <p className="control has-icons-left has-icons-right">
            <input  className="input is-rounded" 
                    type='text' 
                    placeholder='Enter Username'
                    name='username'
                    onChange={this.props.handleChange}
                    value={this.props.username} />
            <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
                </span>
            <span className="icon is-small is-right">
                <i className="fas fa-check" />
                </span>
            </p>
          </div>
          <div className="field" style={{marginLeft: 600, marginTop: 30, marginRight: 600, marginBottom: 30}}>
            <p className="control has-icons-left">
            <input className="input is-rounded" 
                    type='password' 
                    placeholder='Enter Password'
                    name='password'
                    onChange={this.props.handleChange} />
            <span className="icon is-small is-left">
                <i className="fas fa-lock" />
                </span>
            </p>
          </div>
          <button class="button is-rounded is-light" type='submit' onClick={this.handleSubmitForm}>Login</button>

        </div>
        );
    }


}

export default Login;