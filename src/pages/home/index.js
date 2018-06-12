import React, { Component } from 'react';

import { Breadcrumb, Layout } from 'antd';

import './index.less';

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout className="page-home">
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout.Content>
                    <h2>HOME</h2>
                    <p>hello</p>
                </Layout.Content>
            </Layout>
        );
    }
}