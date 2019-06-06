import React, { Component } from 'react';

class Users extends Component {
    constructor(props){
        super(props)
    }


    render() {
       const listing = this.props.allUsers.map((user, i) => {
           return (
                <div
                className="List-item"
                id={i}>
                    <h1>{user.name}</h1>
                    <img
                    src={user.image}
                    alt='test'
                    // onClick={this.props.handleSelected}
                    id={user.id -1}
                    />
                </div>
            )
        });
        return (
            <div className="Pet-list">
                {listing}
            </div>
        );
    }
}

export default Users;