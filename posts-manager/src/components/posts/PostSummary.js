import React from 'react';
import moment from 'moment';
import '../../styles/postSummary.scss';

const PostSummary = ({post}) => {
    return(
        <div className="post-summary">
                <span className="card-title" key={post.id}>{post.title}</span>
                <p>Posted by {post.authFirstName} {post.authLastName} </p>
                <p className="grey-text"> {moment(post.createdAt.toDate()).calendar()} </p>
        </div>
    )
}

export default PostSummary;