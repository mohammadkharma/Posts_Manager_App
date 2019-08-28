// This component is responsible for:
// The layout when signed out (what the user see).

// Exported to: Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import WelcomeText from './WelcomeText'


const SignedOutLinks = () => {
    return(
    <div className="landing">
    <ul className="right">
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
    </ul>
    <WelcomeText />
    </div>
    )
}

export default SignedOutLinks;