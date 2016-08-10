import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions.es6';
import marked from 'marked';

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
    return <div className="user-show">
      <h1>{user.name}</h1>
      <div className="user-bio"
        dangerouslySetInnerHTML={this.getBio()} />
    </div>;
  }

  getBio() {
    return {__html: marked(this.props.user.bio)};
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
