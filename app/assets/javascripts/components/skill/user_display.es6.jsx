import React, { Component } from 'react';
import { Link } from 'react-router';
import marked from 'marked';

class UserDisplay extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    let { user, userSkill } = this.props;
    let className = "user-skill-item";
    if(this.state.expanded) {
      className += " expanded";
    }
    return <li className={className}>
      <div className="user-skill-header"
        onClick={::this.toggleExpansion}>
        <Link to={`/users/${user.id}`} className="name">
          {user.name}
        </Link>
        <span className="skill-stat">
          <input type="range"
            min="0"
            max="20"
            value={userSkill.stat} />
          <span>{userSkill.stat}</span>
        </span>
      </div>
      <div className="skill-stub-body"
        dangerouslySetInnerHTML={this.getDescriptionHTML()} />
    </li>
  }

  toggleExpansion() {
    this.setState({expanded: ! this.state.expanded});
  }

  getDescriptionHTML() {
    return {__html: marked(this.props.userSkill.description)};
  }
}

export default UserDisplay;
