import React, { Component } from 'react';
import { Link } from 'react-router';
import marked from 'marked';

class SkillDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    let cn = "user-skill-item";
    if(this.state.expanded) {
      cn += " expanded";
    }
    return <li className={cn}>
      <div className="user-skill-header"
        onClick={::this.toggleExpansion}>
        <Link to={`/skills/${this.props.skill.id}`}>
          {this.props.skill.name}
        </Link>
        <div className="skill-stat">
          <input type="range"
            min={0}
            max={20}
            value={this.props.stat} />
          <span>{this.props.stat}</span>
        </div>
      </div>
      <div className="skill-stub-body">
        <div className="markdown-description"
          dangerouslySetInnerHTML={this.getDescription()} />
      </div>
    </li>;
  }

  toggleExpansion() {
    this.setState({
      expanded: ! this.state.expanded
    });
  }

  getDescription() {
    return {__html: marked(this.props.description)};
  }
}

export default SkillDisplay;
