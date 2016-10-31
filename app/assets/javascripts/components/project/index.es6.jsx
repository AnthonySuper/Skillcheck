import React, { Component } from 'react';
import { fetchProjects } from '../../actions.es6';
import { connect } from 'react-redux';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFetched: false
    };
  }

  render() {
    if(this.props.projects.length === 0) {
      return this.state.hasFetched ? <div>
        No projects yet
      </div> : <progress />;
    }
    let projects = this.props.projects.map(({id, name}) => <li key={id}>
      <h1>{name}</h1>
    </li>);
    return <ul className="projects-list">
      {projects}
    </ul>;
  }

  async componentDidMount() {
    await this.props.dispatch(fetchProjects());
    this.setState({
      hasFetched: true
    });
  }
}

function mapStateToProps(state) {
  let a = [];
  let projs = state.projects;
  for(var id in projs) {
    a.push(projs[id]);
  }
  return {
    projects: a
  };
}

export default connect(mapStateToProps)(Index);
