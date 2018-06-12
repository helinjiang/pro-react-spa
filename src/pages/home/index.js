import React, { Component } from 'react';

import './index.css';

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="home">
                <h2>Home</h2>
                <p>这是首页</p>
            </div>
        );
    }
}