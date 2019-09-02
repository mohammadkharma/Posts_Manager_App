import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions/signOutAction';
import NewPost from '../../media/new-post.png';
import SignOut from '../../media/sign-out.png';
import InitialsSign from '../../media/initials-sign.jpg';
import '../../styles/signedInLinks.scss';

const SignedInLinks = (props) => {
    return(
    <ul> 
        <li id='newPost'><NavLink to='/create'><img src={NewPost} alt=""/></NavLink></li>
        <li><NavLink onClick={props.signOut}><img src={SignOut} alt=""/></NavLink></li>
        <div id="initials">
        <img src={InitialsSign} alt=""/>
        <div id="centered"><NavLink to='/'>{props.profile.initials}</NavLink></div>
        </div>
    </ul>
    )
}

const mapDispatch = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatch)(SignedInLinks);