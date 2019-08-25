// This component is responsible for:
// The layout when signed out (what the user see).

// Exported to: Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
    <ul className="right">
        <li><NavLink to='/'>Signup</NavLink></li>
        <li><NavLink to='/'>Login</NavLink></li>
    </ul>
    )
}

export default SignedOutLinks;