import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions.es6';



class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if(! this.props.user) {
      return <progress></progress>;
    }
    let { user } = this.props;
    return <div class="user-show">
      <h1>{user.name}</h1>
    </div>;
  }

  componentDidMount() {
    if(! this.props.user ) {
      this.props.dispatch(fetchUser(this.props.id));
    }
  }
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.params.id;

  return {
    user: state.users[id],
    id: id
  };
}

export default connect(mapStateToProps)(User);
