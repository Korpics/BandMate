import React, { Component } from 'react';
import './App.css';
import { login, signup } from './services/authApi';
import Login from './components/Login'
import Signup from './components/Signup'
import Header from './components/Header'
import { Redirect, Link, Route } from 'react-router-dom'


class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      username: '',
      password: '',
      name: '',
      age: '',
      borrough: '',
      influences: '',
      instrument: '',
      genre: '',
      bio: '',
      link: '',
      signedup: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this)
  }
  async handleLogin() {
    try {
        const { username, password} = this.state;
        const response = await login({username, password});
        console.log(response);
        await this.setState({
            authenticated: true
        })
    }
    catch (e) {
        console.log(e.message);
    }
  }

  async handleSignup(){
    try {
      const { 
        username, password, 
        name, age, borrough, 
        influences, instrument, 
        genre, bio, link
      } = this.state;

      const payload = {
        "username": username,
        "password": password,
        "name": name,
        "bio": bio,
        "borrough": borrough,
        "influences": influences,
        "instrument": instrument,
        "genre": genre,
        "link": link,
        "age": age
      }

       console.log(this.state)
      const response = await signup(payload);
      this.setState({signedup: true})
    }
    catch (e) {
        console.log(e.message);
  }

  }
  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
        return {[key]: value}});
  }


  handleLogOut = () => {
    this.setState({authenticated: false})
  };

  render() {
    if(this.state.signedup){
   return (
        <div className="App">
          <p>thanks bud</p>
          <Header/>
          <Login 
            authenticated={this.state.authenticated} 
            handleLogin={this.handleLogin}
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
          />
        </div>
          )
    }
    return (
      <div className="App">
        <Header/>
        <Route
          exact path='/login'

          render={() => <Login
          authenticated={this.state.authenticated} 
          handleLogin={this.handleLogin}
          username={this.state.username}
          password={this.state.password}
          handleChange={this.handleChange}
            />} />

        <Route
          exact path='/signup'

          render={() => <Signup
            authenticated={this.authenticated}
            handleSignup={this.handleSignup}
            handleLogin={this.handleLogin}
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
            borrough={this.state.borrough}
            name={this.state.name}
            age={this.state.age}
            instrument={this.state.instrument}
            influences={this.state.influences}
            genre={this.state.genre}
            bio={this.state.bio}
            links={this.state.links}
            />} />
        </div>
      );}
    }
  

  export default App;
