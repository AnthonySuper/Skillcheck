import React from 'react';

export default function FieldHelper(props) {
  props = Object.assign({}, FieldHelper.DEFAULT_PROPS, props);

  return <div className="form-field-container">
    <label htmlFor={props.name}>
      {props.label || props.name}
    </label>
    <input type={props.type}
      onChange={props.onChange}
      name={props.name} 
      defaultValue={props.defaultValue} />
  </div>;
}

FieldHelper.DEFAULT_PROPS = {
  type: "text",
  onChange: () => {},
  defaultValue: ""
}
