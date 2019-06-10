import React, { Component } from 'react';
import { deletePost} from '../services/postApi';
import {Redirect} from 'react-router-dom';

class Ads extends Component {
    constructor(props){
        super(props)
        this.state = {
            deleted: false
        }
    }

    handleDelete = async (key) => {
            const id = key
            await deletePost(id)
            await this.setState({deleted: true})
            await this.props.getAllPosts()
    }

    render() {
       return this.props.posts.map((post, i) => {
           if(post.username === this.props.user.username && this.state.deleted == false){
           let key=post.id
           return (
<div className="tile is-ancestor" style={{ justifyContent: "center", flexDirection: "row"}}>
  <div className="tile is-parent is-4">
    <article className="tile is-child box">
      <p className="title">Genre: {post.genre}</p>
      <p className="title">Seeking: {post.seeking}</p>
      <p className="subtitle">{post.title}</p>
      <p className="subtitle">{post.username}</p>
      <button className="button is-small is-rounded is-info">Interested</button>
      <button className="button is-small is-rounded is-primary">Message</button>
      <button className="button is-small is-rounded is-danger" onClick={()=>{this.handleDelete(key)}}>DELETE</button>
    </article>
  </div>
  </div> 
      )} else if (post.username !== this.props.user.username && this.state.deleted == false){
return(
                <div className="tile is-ancestor" style={{ justifyContent: "center", flexDirection: "row"}}>
                <div className="tile is-parent is-4">
                  <article className="tile is-child box">
                    <p className="title">Genre: {post.genre}</p>
                    <p className="title">Seeking: {post.seeking}</p>
                    <p className="subtitle">{post.title}</p>
                    <p className="subtitle">{post.username}</p>
                    <button className="button is-small is-rounded is-info">Interested</button>
                    <button className="button is-small is-rounded is-primary">Message</button>
                  </article>
                </div>
                </div> 

               )
           } else {
               return <Redirect to='/' />
           }    
    });
        }
}

export default Ads;