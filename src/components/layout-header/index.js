import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './index.less';

const { Header } = Layout;

class LayoutHeader extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Header className="layout-header header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['mocker']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="mocker">Mocker</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default LayoutHeader;