// Exported to: Dashboard.js

import React from 'react';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

const PostsList = ({ posts }) => {
    return (
        <div className="posts-list section">
            {posts && posts.map(post => {
                return (
                    <Link to={'/post/' + post.id}>
                        <PostSummary post={post} key={post.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default PostsList;