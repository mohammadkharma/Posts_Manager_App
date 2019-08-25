// This component is responsible for:
// The home page (PostsLists & Notifications).

// Exported to: App.js (Route)

import React, { Component } from 'react';
import Notifications from './Notifications';
import PostsList from '../posts/PostsList';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'; 

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { posts } = this.props;
        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s12 m6">
                        <PostsList posts={posts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>

            </div>
        )
    }
}

const mapState = state => {
    console.log(state);
    return {
        posts: state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapState),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(Dashboard);
