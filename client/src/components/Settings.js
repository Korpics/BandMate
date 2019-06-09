import React, { Component } from 'react';
import { putUsers, deleteUsers } from '../services/userApi';
import {Redirect} from 'react-router-dom';

class Settings extends Component {
    constructor () {
        super();
        this.state = {
            name: null,
            age: null,
            genre: null,
            instrument: null,
            influences: null,
            link: null,
            borrough: null,
            bio: null,
            image: null,
            updatedUser: false,
            deleted: false
        }
    }
    handleFill = async () => {
        const name = this.props.user.name;
        const age = this.props.user.age;
        const genre = this.props.user.genre;
        const instrument = this.props.user.instrument;
        const borrough = this.props.user.borrough;
        const influences = this.props.user.influences;
        const bio = this.props.user.bio;
        const link= this.props.user.link;
        const image = this.props.user.image;
        await this.setState({name, age, borrough,  genre, instrument, influences, bio, link, image})
        console.log(this.state)
    }

    handleChange = async (e) => {
        const element = e.target;
        const name = element.name;
        const value = element.value;
        await this.setState({[name]: value});
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            age: this.state.age,
            genre: this.state.genre,
            instrument: this.state.instrument,
            influences: this.state.influences,
            bio: this.state.bio,
            borrough: this.state.borrough,
            link: this.state.link,
            image: this.state.image
        }
        let id = Number(this.props.user.id)
        await putUsers(id, newUser);
        await this.setState({updatedUser: true});
        await this.props.fetch()


    }

    onDelete = async(e) => {
        e.preventDefault();
        const id = this.props.user.id
        await deleteUsers(id)
        await this.setState({deleted: true})
        alert('you are gone')
        await this.props.handleLogout(e)

    }
    routeIt = async(e) => {
        return <Redirect to='/' />
    }

    componentDidMount = () => {
        this.handleFill();
    }
    render() {
        if(this.state.updatedUser){
            return <Redirect to='/' />
        } else if(!this.state.updatedUser && !this.state.deleted){
        return (
          <div className="Main">
            <div className="field" style={{marginLeft: 400, marginRight: 400}}>
                <form className="User-form" onSubmit={this.handleSubmit}>
                    <label style={{color:"white", marginTop: 20}}>name</label>
                    <input
                        className="input is-rounded" 
                        type='input'
                        placeholder='name'
                        id='name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label style={{color:"white", marginTop: 20}}>age</label>
                    <input
                        className="input is-rounded" 
                        type='input'
                        placeholder='Age'
                        id='age'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <label style={{color:"white", marginTop: 20}}>genre</label>
                    <input
                        className="input is-rounded" 
                        type='input'
                        placeholder='genre'
                        id='genre'
                        name='genre'
                        value={this.state.genre}
                        onChange={this.handleChange}
                    />
                    <label style={{color:"white", marginTop: 20}}>instrument</label>
                    <input
                        className="input is-rounded" 
                        type='input'
                        placeholder='instrument'
                        id='instrument'
                        name='instrument'
                        value={this.state.instrument}
                        onChange={this.handleChange}
                    />
                    <label style={{color:"white", marginTop: 20}}>influences</label>
                    <input
                        className="input is-rounded" 
                        type='input'
                        placeholder='influences'
                        id='influences'
                        name='influences'
                        value={this.state.influences}
                        onChange={this.handleChange}
                    />
                    <label style={{color:"white", marginTop: 20}}>borough</label>
                    <input
                        className="input is-rounded" 
                        type='input'
                        placeholder='borrough'
                        id='borrough'
                        name='borrough'
                        value={this.state.borrough}
                        onChange={this.handleChange}
                    />
                    <label style={{color:"white", marginTop: 20}}>link</label>
                    <input
                        className="input is-rounded" 
                        type='input'
                        placeholder='link'
                        id='link'
                        name='link'
                        value={this.state.link}
                        onChange={this.handleChange}
                    />
                    <label style={{color:"white", marginTop: 20}}>bio</label>
                    <input
                        className="input is-rounded" 
                        type='input'
                        placeholder='bio'
                        id='bio'
                        name='bio'
                        value={this.state.bio}
                        onChange={this.handleChange}
                    />
                    <label style={{color:"white", marginTop: 20}}>image</label>
                    <input
                        className="input is-rounded" 
                        type='input'
                        placeholder='image'
                        id='image'
                        name='image'
                        value={this.state.image}
                        onChange={this.handleChange}
                    />
                    <button class="button is-rounded is-info" style={{ marginTop: 20}} onClick={this.handleSubmit}>Update</button>
                </form>
                <div>
                <button class="button is-danger" onClick={this.onDelete} style={{ marginTop: 20}}>DELETE USER</button>
                </div>
            </div>
          </div>
        );}
        else if(!this.state.updatedUser && this.state.deleted){
            return(





                
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <figure className="image is-128x128">
                <img src="https://i.imgur.com/pTfd8Of.png" />
                <p>sorry to see you go</p>
                </figure>
                </div>
            )
        }
    }
}

export default Settings;