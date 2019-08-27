// This component is responsible for:
// The navigation bar.

// Exported to: App.js

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return(
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to='/' className='brand-logo'>Posts Manager</Link>
            <SignedInLinks />
            <SignedOutLinks />
        </div>
    </nav>       
    )
}

const mapState = state => {
    console.log('Navbar state', state);
    return {
        // firebase: state.firebase
    }
}

export default connect(mapState)(Navbar);