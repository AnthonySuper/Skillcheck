import React, { Component } from 'react';

class NewSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSkillId: null
    };
  }

  render() {
  }
}

function mapStateToProps(state) {
  return {
    skills: state.skills
  };
}

export default connect(mapStateToProps)(NewSkill);
