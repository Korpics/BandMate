import React, { Component } from 'react';
import Settings from './Settings'
import Users from './Users'
import Main from './Main'
import { Link, Switch, Route} from 'react-router-dom';
import Home_URL from '../services/userApi';


class Dashboard extends Component {


    componentDidMount=()=>{
        this.props.fetch()
    }
    render() {
        return (<div>
            <h1>Hello {this.props.user.name}</h1>
            <img className="dash-img" src={'https://i.imgur.com/pMvioiT.png'} alt='home' />
            <div className="tabs is-centered">
            <ul>
            <Link to='/' className="is-active">
            <p>Main</p>
            </Link>
            <Link to='/settings' className="is-active">
            <p>User Settings</p>
            </Link>
            <Link to ='/users' className="is-active">
            <p> All Users </p>
            </Link>
            <Link to='/logout' className="is-active" onClick={this.props.handleLogOut}>
            <p>Log Out</p>
            </Link>
            </ul>
          </div>
            <Switch>
            <Route
            exact path='/'
            render={() =><Main/>}/> 
            <Route
            exact path='/settings'
            render={() =>  <Settings
            fetch={this.props.fetch}
            user={this.props.user}
            authenticated={this.props.authenticated}
            handleSignup={this.props.handleSignup}
            handleLogin={this.props.handleLogin}
            username={this.props.username}
            password={this.props.password}
            handleChange={this.props.handleChange}
            borrough={this.props.borrough}
            name={this.props.name}
            age={this.props.age}
            instrument={this.props.instrument}
            influences={this.props.influences}
            genre={this.props.genre}
            bio={this.props.bio}
            links={this.props.links}
            />} />
            <Route
            exact path='/users'
            render={() => <Users
            allUsers={this.props.allUsers}
            />} />
          </Switch>
          
          </div>
        );
    }
}

export default Dashboard;