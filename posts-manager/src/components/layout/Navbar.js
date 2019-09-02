// This component is responsible for:
// The navigation bar.

// Exported to: App.js

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../styles/navbar.scss';
import ProjectLogo from '../../media/project-logo.jpg';


const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return (
        <nav className="myNav">
            <div id="logo">
                <img src={ProjectLogo} alt="" />
                <div id="centered"><Link to='/'>Posts Manager</Link></div>
            </div>
            {links}
        </nav>
    )
}

const mapState = state => {
    // console.log('Navbar state', state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapState)(Navbar);