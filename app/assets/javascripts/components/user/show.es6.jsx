import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions.es6';
import marked from 'marked';
import { Link } from 'react-router';

class Show extends Component {
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
      <div className="page-header">
        <h1>{user.name}</h1>
        {do{
          if(this.props.currentUser && 
            (this.props.currentUser.id == this.props.id)) {
            <Link to={`/users/${this.props.id}/edit`}>
              Edit (Not yet implemented lol)
            </Link>;
          }
          else { <span />; }
        }}
      </div>
      <div className="user-bio markdown-description"
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
    id: id,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Show);