// This component is responsible for:
// The layout when signed out (what the user see).

// Exported to: Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
// import WelcomeText from './WelcomeText'
import SignUp from '../../media/sign-up.png';
import SignIn from '../../media/sign-in.png';
// import WelcomeText from '../../media/welcome-text.jpg';

const SignedOutLinks = () => {
    return(
    <ul>
        <li><NavLink to='/signup'><img src={SignUp} alt=""/></NavLink></li>
        <li><NavLink to='/signin'><img src={SignIn} alt=""/></NavLink></li>
    {/* <WelcomeText /> */}
    {/* <div id="welcome-text">
        <img src={WelcomeText} alt=""/>
    </div> */}
    </ul>

    )
}

export default SignedOutLinks;