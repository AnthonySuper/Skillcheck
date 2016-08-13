import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import marked from 'marked';
import { fetchSkill } from '../../actions.es6';
import UserDisplay from './user_display.es6.jsx';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if(! this.props.skill) {
      return <progress />;
    }
    let { skill } = this.props;
    let users = this.props.userSkills.map(u => {
      if(this.props.users[u.userId]) {
        return <UserDisplay 
          key={u.id}
          user={this.props.users[u.userId]}
          userSkill={u} />;
      }
      else {
        return <span />;
      }
    });
    return <div className="skill-show">
      <div className="page-header">
        <h1>Skill: {skill.name}</h1>
        <Link to={`/skills/${this.props.id}/edit`}>
          Edit
        </Link>
      </div>
      <div className="skill-description markdown-description"
        dangerouslySetInnerHTML={this.getDescription()} />
      <ul className="user-skill-list">
        {users}
      </ul>
    </div>;
  }

  getDescription() {
    return {__html: marked(this.props.skill.description)};
  }

  componentDidMount() {
    if(this.state.skill === undefined) {
      this.props.dispatch(fetchSkill(this.props.id));
    }
  }

}

function mapStateToProps(state, ownProps) {
  let us = state.userSkills;
  let ourUS = [];
  for(var p in us) {
    if(us[p].skillId == ownProps.params.id) {
      ourUS.push(us[p]);
    }
  }
  
  return {
    skill: state.skills[ownProps.params.id],
    id: ownProps.params.id,
    users: state.users,
    userSkills: ourUS
  };
}

export default connect(mapStateToProps)(Show);
