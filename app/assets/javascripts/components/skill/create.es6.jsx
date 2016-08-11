import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addSkills } from '../../actions.es6';
import Form from './form.es6.jsx';

import { formToObject, 
  wrapObjectParams, 
  apiResponseToObject } from '../../utils.es6';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Form onSubmit={::this.submit} />
  }

  async submit(event) {
    event.preventDefault();
    let obj = formToObject(event.target);
    try {
      let r = await $.post(`/api/v1/skills/`, 
        {skill: obj},
        "json");
      console.log("Got sick data",r);
      this.props.dispatch(addSkills(apiResponseToObject(r)));
      this.context.router.push(`/skills/${r.data.id}`);
    }
    catch(err) {
      console.warn("got submission error",err);
    }
  }
}

Create.contextTypes = {
  router: React.PropTypes.func
};

function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(Create);
