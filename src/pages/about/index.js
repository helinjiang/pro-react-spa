import React, { Component } from 'react';

import { Button } from 'antd';

import './index.css';

export default class About extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="about">
                <h2>About</h2>
            <Button type="primary">Primary</Button>
            </div>
        );
    }
}