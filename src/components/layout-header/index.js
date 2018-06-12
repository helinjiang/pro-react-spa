import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import './index.less';

class LayoutHeader extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            activeMenu: '',
            isInit: false
        };
    }

    handleIsActive = (curMenu) => {
        if (!curMenu) {
            return;
        }
        console.log('---handleIsActive---', curMenu);

        const map = {
            '/': 'home',
            '/mockers': 'mockers',
            '/about': 'about',
            '/topics': 'topics'
        };

        let newMenuId = map[curMenu.url];

        if (newMenuId && newMenuId !== this.state.activeMenu) {
            setTimeout(() => {
                this.setState({
                    activeMenu: newMenuId,
                    isInit: true
                });
            }, 0);
        }
    };

    render() {
        let { activeMenu } = this.state;

        return (
            <Layout.Header className="layout-header header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[activeMenu]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home">
                        <NavLink exact to="/" isActive={this.handleIsActive}>Home</NavLink>
                    </Menu.Item>

                    <Menu.Item key="mockers">
                        <NavLink to="/mockers" isActive={this.handleIsActive}>Mockers</NavLink>
                    </Menu.Item>

                    <Menu.Item key="about">
                        <NavLink to="/about" isActive={this.handleIsActive}>About</NavLink>
                    </Menu.Item>

                    <Menu.Item key="topics">
                        <NavLink to="/topics" isActive={this.handleIsActive}>Topics</NavLink>
                    </Menu.Item>
                </Menu>
            </Layout.Header>
        );
    }
}

export default LayoutHeader;