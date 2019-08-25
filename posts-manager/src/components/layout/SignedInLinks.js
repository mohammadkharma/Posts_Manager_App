// This component is responsible for:
// The layout when signed in (what the user see).

// Exported to: Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return(
    <ul className="right">
        <li><NavLink to='/create'>New Post</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating pink lighten-1'>MK</NavLink></li>
    </ul>
    )
}

export default SignedInLinks;