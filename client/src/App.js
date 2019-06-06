import React, { Component } from 'react';
import './App.css';
import { login, signup } from './services/authApi';
import { getAllUsers} from './services/userApi'
import Login from './components/Login'
import Signup from './components/Signup'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { Redirect, Link, Route, Switch } from 'react-router-dom'
import Settings from './components/Settings'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allUsers: [],
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
        console.log(response.user);
        const user = response.user
       await  this.setState({
            authenticated: true,
            user: user
            
        })
        console.log(this.state)
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

  componentDidMount=()=>{
    this.fetchAllUsers()
    console.log(this.state)

  }

  fetchAllUsers = async () => {
    const allUsers =  await getAllUsers();
    await this.setState({allUsers});
    console.log(this.state)

   }

   truthSet = async (e) => {
     e.preventDefault();
    await this.setState({signedup: true})
   }

  render() {
    if(this.state.signedup && !this.state.authenticated){
   return (
        <div className="App">
          <Header authenticated={this.state.authenticated} user={this.state.user}/>
          <Login 
            authenticated={this.state.authenticated} 
            handleLogin={this.handleLogin}
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
          />
        </div>
          )
    } else if (!this.state.signedup && !this.state.authenticated){
    return (
      <div className="App">
        {/* <Switch> */}
        <Header authenticated={this.state.authenticated}/>
        <button onClick={this.truthSet}>I already have an account!</button>
        <Link to='/signup'>
            <p>Register</p>
            </Link>
            <Switch>
        <Route
        exact path ='/signup'
        render={() => <Signup
            user={this.state.user}
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
        </Switch>
            
           {/* <Route
            exact path='/settings'

            render={() => <Settings
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
            </Switch> */}
        </div>
      );} else if (this.state.signedup && this.state.authenticated){
        return (
          <Dashboard 
          fetch={this.fetchAllUsers}
          allUsers={this.state.allUsers}
          user={this.state.user}
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
        />

        )}
      }
    }
  

  export default App;
