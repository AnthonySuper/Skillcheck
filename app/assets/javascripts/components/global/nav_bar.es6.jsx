import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Link to={this.props.to} className={this.getClass()}>
      {this.props.children}
    </Link>;
  }

  getClass() {
    return do {if(this.context.router.isActive(this.props.to)) {
      "navbar-link active"
    } else {
      "navbar-link"
    }};
  }
}

NavLink.contextTypes = {
  router: React.PropTypes.object.isRequired
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <nav id="navbar">
      <NavLink to="/users">
        Users
      </NavLink>

      <NavLink to="/projects">
        Projects
      </NavLink>

      <NavLink to="/skills">
        Skills
      </NavLink>
    </nav>
  }
}

export default Navbar;
