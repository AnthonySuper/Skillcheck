import React, { Component } from 'react';
import { fetchSkills } from '../../actions.es6';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFetched: false
    };
  }

  render() {
    if(this.props.skills.length === 0) {
      return this.state.hasFetched ? <div>
        No skills yet, <Link to="skills/create">create one</Link>
      </div> : <progress />;
    }
    let skills = this.props.skills.map(({id, name}) => <li key={id}>
      <Link to={`/skills/${id}`}>
        {name}
      </Link>
    </li>);
    return <ul className="skills-list">
      <ReactCSSTransitionGroup
        transitionName="skills-transition"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {skills}
      </ReactCSSTransitionGroup>
    </ul>
  }

  componentDidMount() {
    if(this.props.skills.length === 0) {
      this.props.dispatch(fetchSkills()).then(() => {
        this.setState({
          hasFetched: true
        });
      });
    }
    else {
      this.props.dispatch(fetchSkills());
    }
  }
}

function mapStateToProps(state) {
  let array = [];
  let s = state.skills;
  for(var id in s) {
    array.push(s[id]);
  }
  return {
    skills: array
  };
}

export default connect(mapStateToProps)(Index);
