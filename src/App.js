import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Breadcrumb, Layout, Menu } from 'antd';

import LayoutHeader from './components/layout-header';

import Home from './pages/home';
import About from './pages/about';
import Topics from './pages/topics';
import Mockers from './pages/mockers';

const { Header, Content } = Layout;

const App = () => (
    <Router>

        <Layout className="container">
            <Header className="header">
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

            <LayoutHeader/>

            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/mockers" component={Mockers} />
                </Content>
            </Layout>

        </Layout>

    </Router>
);

export default App;