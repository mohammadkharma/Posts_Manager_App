// Exported to: Dashboard.js

import React from 'react';
import PostSummary from './PostSummary';

const PostsList = () => {
    return(
        <div className="posts-list section">
        <PostSummary />
        <PostSummary />
        <PostSummary />
        <PostSummary />
        </div>
    )
}

export default PostsList;