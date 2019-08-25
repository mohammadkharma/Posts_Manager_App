// Exported to: Dashboard.js

import React from 'react';
import PostSummary from './PostSummary';

const PostsList = ({posts}) => {
    return(
        <div className="posts-list section">
        {posts && posts.map(post => {
            return(
                <PostSummary post={post} key={post.id} />
            )
        })}
        </div>
    )
}

export default PostsList;