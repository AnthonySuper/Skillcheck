import React from 'react';

export default function FieldHelper(props) {
  props = Object.assign({}, FieldHelper.DEFAULT_PROPS, props);

  return <div class="form-field">
    <label htmlFor={props.name}>
      {props.label || props.name}
    </label>
    <input type={props.type}
      onChange={props.onChange}
      name={props.name} />
  </div>;
}

FieldHelper.DEFAULT_PROPS = {
  type: "text",
  onChange: () => {},
}
