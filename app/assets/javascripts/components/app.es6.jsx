import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TopBar from './top_bar.es6.jsx';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <TopBar />
      {this.props.children}
    </div>;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
