import React, { Component } from 'react';

import './index.less';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="page-home">
        <h2>HOME</h2>
        <p>hello</p>
      </div>
    );
  }
}