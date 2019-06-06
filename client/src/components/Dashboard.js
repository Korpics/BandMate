import React, { Component } from 'react';
import Settings from './Settings'


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Settings
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
          />
            
        );
    }
}

export default Dashboard;