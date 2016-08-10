import React from 'react';

function SubmitButton(props) {
  props = Object.assign({}, SubmitButton.DEFAULT_PROPS, props);
  return <input type="submit"
    value={props.label} />;
}

SubmitButton.DEFAULT_PROPS = {
  label: "Submit"
};

export default SubmitButton;
