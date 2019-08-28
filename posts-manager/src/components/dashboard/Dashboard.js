// This component is responsible for:
// The home page (PostsLists & Notifications).

// Exported to: App.js (Route)

import React, { Component } from 'react';
import Notifications from './Notifications';
import PostsList from '../posts/PostsList';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'; 
import { Redirect } from 'react-router-dom';


class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { posts, auth, notifications } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s12 m6">
                        <PostsList posts={posts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>

            </div>
        )
    }
}

const mapState = state => {
    // console.log(state);
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapState),
    firestoreConnect([
        {collection: 'posts', orderBy: ['createdAt', 'desc']},
        {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard);
