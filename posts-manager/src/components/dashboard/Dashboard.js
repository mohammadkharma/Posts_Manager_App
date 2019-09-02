import React, { Component } from 'react';
import Notifications from './Notifications';
import PostsList from '../posts/PostsList';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import '../../styles/dashboard.scss';
import Plant from '../../media/leafs.jpg';


class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { posts, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div id='dashboard'>
                <div>
                    <PostsList posts={posts} />
                </div>
                <img src={Plant} alt=""/>
                <div>
                    <Notifications notifications={notifications} />
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
        { collection: 'posts', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard);
