import React from 'react';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';
import '../../styles/postsList.scss';

const PostsList = ({ posts }) => {
    return (
        <div id='posts-list'>
            {posts && posts.map(post => {
                return (
                    <Link to={'/post/' + post.id} key={post.id} >
                        <PostSummary post={post} />
                    </Link>
                )
            })}
        </div>
    )
}

export default PostsList;