import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions/signInAction';
import { Redirect } from 'react-router-dom';
import SigninForm from '../../media/form1.png';
import '../../styles/signin.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />

    return (
      <div id="sign-container">
      <img src={SigninForm} alt=""/>
        <form id='signin-form' onSubmit={this.handleSubmit}>
          <h3>SIGN IN</h3>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button>Sign in</button>
            <div id='signin-err'>
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatch = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  }
}

export default connect(mapState, mapDispatch)(SignIn);