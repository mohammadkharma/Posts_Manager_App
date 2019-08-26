import React from 'react'
import { connect } from 'react-redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


const PostDetails = (props) => {
  const { post } = props;
  // console.log('props', props);
  if (post) {
    return (
      <div className="container section post-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by {post.authFirstName} {post.authLastName}</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
    )
  } else {
    return (
    <div className="container center">
      <p>Loading post...</p>
    </div>
      )
  }
  
}

const mapState = (state, ownProps) => {
  // console.log('statetstate', state);
  const id = ownProps.match.params.post_id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post
  }
}

export default compose(
  connect(mapState),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(PostDetails)