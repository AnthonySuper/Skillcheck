import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions.es6';
import marked from 'marked';
import { Link } from 'react-router';
import SkillDisplay from './skill_display.es6.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { valuesOfObject } from '../../utils.es6';

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
    let skills = this.props.userSkills.map(u => {
      let skill = this.props.skills[u.skillId];
      return <SkillDisplay {...u} 
        skill={skill} 
        key={u.id} />;
    });
    return <div className="user-show">
      <div className="page-header">
        <h1>{user.name}</h1>
        {do{
          if(this.props.currentUser && 
            this.props.currentUser.id == this.props.id) {
            <Link to={`/users/${this.props.id}/edit`}>
              Edit (Not yet implemented lol)
            </Link>;
          }
          else { <span />; }
        }}
      </div>
      <div className="user-bio markdown-description"
        dangerouslySetInnerHTML={this.getBio()} />
      <ul className="user-skill-list">
        <ReactCSSTransitionGroup transitionName="skill-expand"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {skills}
        </ReactCSSTransitionGroup>
      </ul>
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

  getChildContext() {
    if(! this.props.user || ! this.props.currentUser) {
      return {
        canEdit: false
      };
    }
    return {
      canEdit: this.props.user.id == this.props.currentUser.id
    };
  }
}

Show.childContextTypes = {
  canEdit: React.PropTypes.bool
};


function mapStateToProps(state, ownProps) {
  let id = ownProps.params.id;
  let us = valuesOfObject(state.userSkills).filter(s => s.userId == id);
  return {
    user: state.users[id],
    userSkills: us,
    skills: state.skills,
    id: id,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Show);
