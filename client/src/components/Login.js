import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {


    handleSubmitForm = (event) => {
        event.preventDefault();
        this.props.handleLogin();
      }

    render() {
        if(this.props.authenticated){
            return <Redirect to='/settings' /> 
        }
        return (
            <div className="Wrapper">
              <h1>Login</h1>
              <div className="Wrapper">

                <form className="login-form" onSubmit={this.handleSubmitForm}>
                    <lable>Username:</lable>
                    <input
                        type='text' placeholder='Enter Username'
                        name='username'
                        onChange={this.props.handleChange}
                        value={this.props.username}
                    />
                    <lable>Password:</lable>
                    <input
                        type='password' placeholder='Enter Password'
                        name='password'
                        onChange={this.props.handleChange}
                        // value={this.props.password}
                    />
                    <button type='submit' onClick={this.handleSubmitForm}>LOG IN</button>
                </form>
              </div>
            </div>
        );
    }
}

export default Login;
