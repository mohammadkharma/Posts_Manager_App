import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import '../../styles/postDetails.scss';

const PostDetails = (props) => {
  const { post, auth } = props;
  // console.log('props', props);

  if(!auth.uid) return <Redirect to='/signin' />

  if (post) {
    return (
      <div className="post-details">
        <div className="content">
          <h1>{post.title}</h1>
          <h3>{post.content}</h3>
        </div>
        <div className="post-auth">
          <div>Posted by {post.authFirstName} {post.authLastName}</div>
          <p>{moment(post.createdAt.toDate()).calendar()}</p>
        </div>
    </div>
    )
  } else {
    return (
      <p>Loading post...</p>
      )
  }
  
}

const mapState = (state, ownProps) => {
  // console.log('state', state);
  const id = ownProps.match.params.post_id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapState),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(PostDetails)