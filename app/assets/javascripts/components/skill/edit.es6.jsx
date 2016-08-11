import React, { Component } from 'react';
import Form from './form.es6.jsx';
import { connect } from 'react-redux';
import { fetchSkill, addSkills } from '../../actions.es6';
import { formToObject, apiResponseToObject } from '../../utils.es6';

class Edit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(! this.props.skill) {
      return <progress />;
    }
    return <Form onSubmit={::this.submit} {...this.props.skill} />;
  }

  async submit(event) {
    console.log("Submit with event",event);
    event.preventDefault();
    let obj = formToObject(event.target);
    try {
      let d = await $.ajax({
        url: `/api/v1/skills/${this.props.id}`,
        data: {skill: obj}, 
        type: "PUT",
        dataType: "json"});
      this.props.dispatch(addSkills(apiResponseToObject(d)));
      this.context.router.push(`/skills/${d.data.id}`);
    }
    catch(err) {
      console.warn(`Could not edit skill ${this.props.id}`,err);
    }
  }

  componentDidMount() {
    console.log(this.props);
    if(! this.props.skill) {
      this.props.dispatch(fetchSkill(this.props.id));
    }
  }
}

Edit.contextTypes = {
  router: React.PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    skill: state.skills[ownProps.params.id],
    id: ownProps.params.id
  };
}

export default connect(mapStateToProps)(Edit);
