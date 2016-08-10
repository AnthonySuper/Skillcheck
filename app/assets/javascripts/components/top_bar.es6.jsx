import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateToken, signIn } from '../actions.es6';
import SubmitButton from './forms/submit_button.es6.jsx';
import FieldHelper from './forms/field_helper.es6.jsx';
import { formToObject } from '../utils.es6';
import { Link } from 'react-router';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let klass = "top-bar";
    if(this.props.currentUser) {
      klass += " signed-in";
    }
    return <header className={klass}>
      <h1>
        Skillcheck
      </h1>
      {do {
        if(this.props.currentUser) {
          <Link to={`/users/${this.props.currentUser.id}`}>
            {this.props.currentUser.name}
          </Link>
        }
        else {
          <NoUserConnected />
          }}}
        </header>
  }

  componentDidMount() {
    this.props.dispatch(validateToken());
  }
}

function SignInForm({onSubmit}){
  return <form onSubmit={onSubmit}>
    <FieldHelper type="email" name="email" />
    <FieldHelper type="password" name="password" />
    <SubmitButton />
  </form>
}

function SignUpForm({onSubmit}) {
  return <form onSubmit={onSubmit}>
    <FieldHelper name="name" />
    <FieldHelper type="email" name="email" />
    <FieldHelper type="password" name="password" />
    <FieldHelper type="password" name="password_confirmation"
      label="Password Confirmation" />
    <SubmitButton />
  </form>;
}

class NoUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false
    };
  }

  render() {

    console.log("Sign in form is",SignInForm);
    let { showSignIn, showSignUp } = this.state;
    console.log("State",this.state);
    return <div>
      No user set
      <button onClick={::this.toggleSignIn}>
        Sign in
      </button>
      <button onClick={::this.toggleSignUp}>
        Create Account
      </button>
      {do{
        if(showSignIn){
          <SignInForm onSubmit={::this.submitSignIn} />;
        }
        else if(showSignUp){
          <SignUpForm onSubmit={::this.submitNew}/>;
        }
        else{ 
          <div> Neither </div>;
        }
      }}
    </div>
  }

  toggleSignIn() {
    this.setState({showSignIn: this.state.showSignIn ? false : true});
  }

  toggleSignUp() {
    this.setState({showSignUp: this.state.showSignUp ? false : true});
  }

  async submitSignIn(event) {
    event.preventDefault();
    let o = formToObject(event.target);
    try {
      let si = await Auth.emailSignIn(o);
      this.props.dispatch(signIn(si));
    }
    catch(err) {
      console.warn("Got sign in error:",err);
    }
  }

  async submitNew(event) {
    event.preventDefault();
    let o = formToObject(event.target);
    try {
      console.log("For form object",o);
      let si = await Auth.emailSignUp(o);
      this.props.dispatch(signIn(si));
    }
    catch(err) {
      console.warn("Got sign up error",err);
    }
  }
}

const NoUserConnected = connect()(NoUser);


function mapStateToProps(state, props) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(TopBar);
