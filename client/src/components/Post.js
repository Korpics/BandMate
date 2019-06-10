import React, { Component } from 'react';
import { createPost } from '../services/postApi';
import {Redirect} from 'react-router-dom';



class Post extends Component {
    constructor () {
        super();
        this.state = {
            title: null,
            seeking: null,
            genre: null,
            body: null,
            updatedPost: false           
        }
    }


handleChange = async (e) => {
    const element = e.target;
    const name = element.name;
    const value = element.value;
    await this.setState({[name]: value});
}


handleSubmit = async(e) => {
    e.preventDefault();
    const newPost = {
        username: this.props.user.username,
        title: this.state.title,
        genre: this.state.genre,
        body: this.state.body,
        seeking: this.state.seeking
    }
    await createPost(newPost);
    await this.props.fetch()
    await this.props.getAllPosts()
    await this.setState({updatedPost: true});


}



render() {
if(this.state.updatedPost){
    return <Redirect to='/' />
} else {
return (
  <div className="Main">
    <div className="field" style={{marginLeft: 400, marginRight: 400}}>
        <form className="User-form" onSubmit={this.handleSubmit}>
            <label style={{color:"white", marginTop: 20}}>Looking For..</label>
            <input
                className="input is-rounded" 
                type='input'
                placeholder='seeking'
                id='seeking'
                name='seeking'
                value={this.state.seeking}
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
            <label style={{color:"white", marginTop: 20}}>title</label>
            <input
                className="input is-rounded" 
                type='input'
                placeholder='title'
                id='title'
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
            />
            <label style={{color:"white", marginTop: 20}}>body</label>
            <input
                className="input is-rounded" 
                type='input'
                placeholder='body'
                id='body'
                name='body'
                value={this.state.body}
                onChange={this.handleChange}
            />
            <button class="button is-rounded is-info" style={{ marginTop: 20}} onClick={this.handleSubmit}>Post!</button>
        </form>
    </div>
  </div>
)}
}
}

export default Post;