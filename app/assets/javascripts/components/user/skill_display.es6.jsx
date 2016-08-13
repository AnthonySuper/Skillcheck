import React, { Component } from 'react';
import { Link } from 'react-router';
import marked from 'marked';
import { connect } from 'react-redux';
import { updateUserSkill } from '../../actions.es6';

class SkillDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      stat: this.props.stat,
      editing: false,
      description: this.props.description
    };
  }

  render() {
    let cn = "user-skill-item";
    if(this.state.expanded || this.state.editing) {
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
            value={this.state.stat}
            onChange={::this.changeStat} />
          <span>{this.state.stat}</span>
          {do{
            if(this.context.canEdit){
              <button onClick={::this.toggleEdit}>
                Edit
              </button>;
            } else {}}}
        </div>
      </div>
      <div className="skill-stub-body">
        {do{
          if(this.state.editing){
            <div>
              <textarea 
                className="user-skill-description-input"
                name="description"
                value={this.state.description}
                onChange={::this.changeDescription} />
              <button onClick={::this.submitChanges}>
                Submit
              </button>
            </div>
          }
          else{
          <div className="markdown-description"
            dangerouslySetInnerHTML={this.getDescription()} />;
          }}}
          
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

  toggleEdit() {
    this.setState({
      editing: ! this.state.editing
    });
  }

  changeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  changeStat(event) {
    if(! this.state.editing) { return; }
    event.preventDefault();
    this.setState({
      stat: event.target.value
    });
  }

  async submitChanges(event) {
    event.preventDefault();
    let d = {
      description: this.state.description,
      stat: this.state.stat
    };
    let dis = await this.props.dispatch(updateUserSkill(this.props.id, d));
    this.setState({
      editing: false,
      description: this.props.description,
      stat: this.props.stat
    });
  }
}

SkillDisplay.contextTypes = {
  canEdit: React.PropTypes.bool
};

export default connect()(SkillDisplay);
