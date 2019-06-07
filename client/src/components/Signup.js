import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Signup extends Component {


    handleSubmitForm = (event) => {
        event.preventDefault();
        this.props.handleSignup();
      }

    render() {
        return (
            <div className="field" style={{marginLeft: 45, marginRight: 45}}>

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
                     <lable>Borrough:</lable>
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
                     <lable>Genre:</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='please only enter one'
                        name='genre'
                        onChange={this.props.handleChange}
                        value={this.props.genre}
                    />
                     <lable>Instrument:</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='primary instrument'
                        name='instrument'
                        onChange={this.props.handleChange}
                        value={this.props.instrument}
                    />
                     <lable>Age:</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='Enter Username'
                        name='age'
                        onChange={this.props.handleChange}
                        value={this.props.age}
                    />
                     <lable>Influences:</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='Please separate by comma'
                        name='influences'
                        onChange={this.props.handleChange}
                        value={this.props.influences}
                    />
                     <lable>Bio:</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='Tell us about yourself!'
                        name='bio'
                        onChange={this.props.handleChange}
                        value={this.props.bio}
                    />
                     <lable>Links:</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='Any links to your music?'
                        name='link'
                        onChange={this.props.handleChange}
                        value={this.props.link}
                    />
                    <button className='button' type='submit' style={{marginTop: 10}}>Register</button>
                </form>
              </div>
        );
    }
}

export default Signup;