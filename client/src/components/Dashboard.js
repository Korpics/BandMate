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
            <img className="dash-img" src={'https://i.imgur.com/pMvioiT.png'} style={{marginLeft: 20, marginTop: 20}}alt='home' />
            <strong style={{color:"white", marginLeft: 5}}>Hello {this.props.user.name}! </strong>
            <div className="tabs is-centered">
            <ul>
            <Link to='/' className="is-active">
            <strong style={{color:"white"}}>Main</strong>
            </Link>
            <Link to='/settings' className="is-active">
            <strong style={{color:"white"}}>User Settings</strong>
            </Link>
            <Link to ='/users' className="is-active">
            <strong style={{color:"white"}}> All Users </strong>
            </Link>
            <Link to='/logout' className="is-active" onClick={this.props.handleLogOut}>
            <strong style={{color:"white"}}>Log Out</strong>
            </Link>
            </ul>
          </div>
            <Switch>
            <Route
            exact path='/'
            render={() =><Main user={this.props.user}/>}/> 
            <Route
            exact path='/settings'
            render={() =>  <Settings
            fetch={this.props.fetch}
            user={this.props.user}
            authenticated={this.props.authenticated}
            handleSignup={this.props.handleSignup}
            handleLogin={this.props.handleLogin}
            handleLogout={this.props.handleLogOut}
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