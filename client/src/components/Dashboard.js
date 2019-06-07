import React, { Component } from 'react';
import Settings from './Settings'
import Users from './Users'
import { Link, Switch, Route} from 'react-router-dom';
import addUsers from '../services/userApi';


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount=()=>{
        this.props.fetch()
    }
    render() {
        return (
            <div>
            <div className="tabs is-centered">
            <ul>
            <Link to='/settings' className="is-active">
            <p>User Settings</p>
            </Link>
            <Link to ='/users' className="is-active">
            <p> All Users </p>
            </Link>
            <Link to='/logout' className="is-active">
            <p>Log Out</p>
            </Link>
            </ul>
          </div>
            <Switch>
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
          <div style={{justifyContent: 'center'}}>Hello {this.props.user.name}</div>
          </div>
        );
    }
}

export default Dashboard;