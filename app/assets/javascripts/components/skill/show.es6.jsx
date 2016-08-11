import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import marked from 'marked';
import { fetchSkill } from '../../actions.es6';

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
    return <div className="skill-show">
      <div className="page-header">
        <h1>Skill: {skill.name}</h1>
        <Link to={`/skills/${this.props.id}/edit`}>
          Edit
        </Link>
      </div>
      <div className="skill-description markdown-description"
        dangerouslySetInnerHTML={this.getDescription()} />
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
  return {
    skill: state.skills[ownProps.params.id],
    id: ownProps.params.id
  };
}

export default connect(mapStateToProps)(Show);
