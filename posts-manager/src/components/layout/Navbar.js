// This component is responsible for:
// The navigation bar.

// Exported to: App.js

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../styles/navbar.scss';

const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks /> 
    return(
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to='/' className='brand-logo hide-on-med-and-down'>Posts Manager</Link>
            { links }
        </div>
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