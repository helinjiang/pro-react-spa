import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import './index.less';

class LayoutHeader extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout.Header className="layout-header header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home">
                        <Link to="/">Home</Link>
                    </Menu.Item>

                    <Menu.Item key="mockers">
                        <Link to="/mockers">Mockers</Link>
                    </Menu.Item>

                    <Menu.Item key="about">
                        <Link to="/about">About</Link>
                    </Menu.Item>

                    <Menu.Item key="topics">
                        <Link to="/topics">Topics</Link>
                    </Menu.Item>
                </Menu>
            </Layout.Header>
        );
    }
}

export default LayoutHeader;