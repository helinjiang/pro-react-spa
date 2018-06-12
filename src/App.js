import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Breadcrumb, Layout } from 'antd';

import LayoutHeader from './components/layout-header';

import Home from './pages/home';
import About from './pages/about';
import Topics from './pages/topics';
import Mockers from './pages/mockers';

import './App.less';

const { Content } = Layout;

const App = () => (
    <Router>

        <Layout className="matman-container">

            <LayoutHeader />

            <Layout>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content>
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