import React, { Component } from 'react';
import './App.css';
import { login, signup } from './services/authApi';
import { getAllUsers, Base_URL} from './services/userApi'
import { fetchAllPosts } from './services/postApi'
import Login from './components/Login'
import Signup from './components/Signup'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { Redirect, Link, Route, Switch } from 'react-router-dom'
import Settings from './components/Settings'
import Footer from './components/Footer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allUsers: [],
      allPosts: [],
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
      signedup: false,
      signupselect:false
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
            user: user,
            signedup: true
            
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


  handleLogOut = async(e) => {
    e.preventDefault();
    await this.setState({
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
      signedup: false,
      signupselect:false
  })
  };

  componentDidMount=()=>{
    this.fetchAllUsers()
    this.getAllPosts()
    console.log(this.state)

  }

  fetchAllUsers = async () => {
    const allUsers =  await getAllUsers();
    await this.setState({allUsers});
    console.log(this.state)

   }
   getAllPosts = async () => {
    const allPosts =  await fetchAllPosts();
    await this.setState({allPosts});
    console.log(this.state)

   }

   signupSelect = async(e) => {
     e.preventDefault()
     await this.setState({
        signupselect: true
     })
     

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
            allUsers={this.state.allUsers}
            allPosts={this.state.allPosts}
            authenticated={this.state.authenticated} 
            handleLogin={this.handleLogin}
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
          />
        </div>
          )
    } else if (!this.state.signedup && !this.state.authenticated && this.state.signupselect){
    return (
      <div className="App">
        <Header authenticated={this.state.authenticated}/>
          <Signup
            user={this.state.user}
            allUsers={this.state.allUsers}
            allPosts={this.state.allPosts}
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
            links={this.state.links}/>
        </div>
      );} else if (!this.state.signedup && !this.state.authenticated && !this.state.signupselect){
    return (<div className="App">
      <div className="App" style={{display: "flex", alignContent:"center", flexDirection: "column"}}>
        <Header authenticated={this.state.authenticated}/>
        <div className="field is-grouped" style={{justifyContent: "center", marginTop:30}}>
        <a className="button is-rounded is-light " onClick={this.truthSet}>Login</a>
        <a className="button is-rounded is-light " onClick={this.signupSelect} >Register</a>
        </div>        
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
        <footer className="footer" style={{background:"rgba(240, 161, 242, 0.0)", justifyContent: "flex-end"}}>
        <div className="content has-text-centered" >
          <p style={{color:"white"}}>
            <strong style={{color:"white"}}>BandMate</strong>.  Currently work-in-progress
          </p>
        </div>
      </footer>
      </div>
      </div>
    );}   else if (this.state.authenticated && this.state.signedup){
        return (
          <Dashboard 
          fetch={this.fetchAllUsers}
          getAllPosts={this.getAllPosts}
          allUsers={this.state.allUsers}
          allPosts={this.state.allPosts}
          user={this.state.user}
          authenticated={this.authenticated}
          handleSignup={this.handleSignup}
          handleLogin={this.handleLogin}
          handleLogOut={this.handleLogOut}
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
