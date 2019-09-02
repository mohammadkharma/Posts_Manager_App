import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import SigninForm from '../../media/form1.png';
import '../../styles/createPost.scss';

class CreatePost extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createPost(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />
    
    return (
      <div id="create-post">
      <img src={SigninForm} alt=""/>
        <form onSubmit={this.handleSubmit}>
          <h3>Create new post</h3>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id='title' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Post content</label>
           <textarea id="content" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button>Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatch = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  }
}

export default connect(mapState, mapDispatch)(CreatePost);