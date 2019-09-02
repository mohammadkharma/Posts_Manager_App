import React from 'react';
import moment from 'moment';
import '../../styles/postSummary.scss';

const PostSummary = ({post}) => {
    return(
        <div className="post-summary">
                <h1 className="post-title" key={post.id}>{post.title}</h1>
                <p className='posted-by'>Posted by {post.authFirstName} {post.authLastName} </p>
                <p className="post-date"> {moment(post.createdAt.toDate()).calendar()} </p>
        </div>
    )
}

export default PostSummary;