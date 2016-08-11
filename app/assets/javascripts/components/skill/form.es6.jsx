import React, { Component } from 'react';
import FieldHelper from '../forms/field_helper.es6.jsx'
import SubmitButton from '../forms/submit_button.es6.jsx'

class Form extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <form onSubmit={this.props.onSubmit} className="big-form">
      <FieldHelper name="name" 
        label="Name"
        defaultValue={this.props.name}/>
      <div className="form-field-container">
        <label name="bio">
          Bio
        </label>
        <textarea name="description"
          className="markdown-area"
          defaultValue={this.props.description} />
      </div>
      <SubmitButton />
    </form>
  }
}

export default Form;
