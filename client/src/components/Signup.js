import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Signup extends Component {


    handleSubmitForm = (event) => {
        event.preventDefault();
        this.props.handleSignup();
      }

    render() {
        return (
            <div className="field" style={{marginLeft: 500, marginRight: 500, marginTop: 30}}>

                <form onSubmit={this.handleSubmitForm}>
                    <lable style={{marginBottom: 15, color: "white"}}>Username</lable>
                    <input
                    
                        className="input is-rounded" 
                        type='text' placeholder='Enter Username'
                        name='username'
                        onChange={this.props.handleChange}
                        value={this.props.username}
                  
                  /><div style={{color:"white", marginTop: 15}}></div>
                    <lable style={{marginBottom: 15, color: "white"}}>Password</lable>
                    <input
                        
                        className="input is-rounded" 
                        type='password' placeholder='Enter Password'
                        name='password'
                        onChange={this.props.handleChange}
                        // value={this.props.password}
                  
                  /><div style={{color:"white", marginTop: 15}}></div>
                     <lable style={{marginBottom: 15, color: "white"}}>Borough</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='Where ya from?'
                        name='borrough'
                        onChange={this.props.handleChange}
                        value={this.props.borrough}
                  
                  /><div style={{color:"white", marginTop: 15}}></div>
                     <lable style={{marginBottom: 15, color: "white"}}>Name</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='Enter your first name'
                        name='name'
                        onChange={this.props.handleChange}
                        value={this.props.name}
                  
                  /><div style={{color:"white", marginTop: 15}}></div>
                     <lable style={{marginBottom: 15, color: "white"}}>Instrument</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='primary instrument'
                        name='instrument'
                        onChange={this.props.handleChange}
                        value={this.props.instrument}
                  
                  /><div style={{color:"white", marginTop: 15}}></div>
                     <lable style={{color:"white", marginBottom: 15}}>Influences</lable>
                    <input
                        className="input is-rounded" 
                        type='text' placeholder='Please separate by comma'
                        name='influences'
                        onChange={this.props.handleChange}
                        value={this.props.influences}
                  
                  /><div style={{color:"white", marginTop: 15}}></div>
                    <button className="button is-rounded" type='submit' style={{marginTop: 30}}>Register</button>
                </form>
              </div>
        );
    }
}

export default Signup;