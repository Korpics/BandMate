import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Signup extends Component {


    handleSubmitForm = (event) => {
        event.preventDefault();
        this.props.handleSignup();
      }

    render() {
        return (
            <div className="field" style={{marginLeft: 400, marginRight: 400}}>

                <form className="Volunteer-form" onSubmit={this.handleSubmitForm}>
                    <lable>Username:</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='Enter Username'
                        name='username'
                        onChange={this.props.handleChange}
                        value={this.props.username}
                    />
                    <lable>Password:</lable>
                    <input
                        className="input is-rounded" 
                        type='password' placeholder='Enter Password'
                        name='password'
                        onChange={this.props.handleChange}
                        // value={this.props.password}
                    />
                     <lable>Borough:</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='Where ya from?'
                        name='borrough'
                        onChange={this.props.handleChange}
                        value={this.props.borrough}
                    />
                     <lable>Name:</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='Enter your first name'
                        name='name'
                        onChange={this.props.handleChange}
                        value={this.props.name}
                    />
                     <lable>Instrument:</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='primary instrument'
                        name='instrument'
                        onChange={this.props.handleChange}
                        value={this.props.instrument}
                    />
                     <lable>Influences:</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='Please separate by comma'
                        name='influences'
                        onChange={this.props.handleChange}
                        value={this.props.influences}
                    />
                    <button className="button is-rounded" type='submit' style={{marginTop: 30}}>Register</button>
                </form>
              </div>
        );
    }
}

export default Signup;