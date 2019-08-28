// This component is responsible for:
// A new post template to be outputted to the home page. 

// Exported to: PostsLists.js

import React from 'react';

const PostSummary = ({post}) => {
    return(
        <div className="card z-depth-0 post-summery">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"  key={post.id}>{post.title}</span>
                <p>Posted by {post.authFirstName} {post.authLastName} </p>
                <p className="grey-text">3rd August, 2am</p>
            </div>
        </div>
    )
}

export default PostSummary;