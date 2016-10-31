import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formToObject,
  wrapObjectParams } from '../../utils.es6';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Form onSubmit={::this.submit} />;
  }

  submit(event) {
    event.preventDefault();
    let obj = formToObject(event.target);
    this.props.dispatch(createProject(obj));
  }
}

New.contextTypes = {
  router: React.PropTypes.func
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(New);
