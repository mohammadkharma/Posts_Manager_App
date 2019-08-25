// This component is responsible for:
// The home page (PostsLists & Notifications).

// Exported to: App.js (Route)

import React, { Component } from 'react';
import Notifications from './Notifications';
import PostsList from '../posts/PostsList';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s12 m6">
                        <PostsList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>

            </div>
        )
    }
}

export default Dashboard
