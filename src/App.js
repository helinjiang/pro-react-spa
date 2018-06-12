import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Topics from './pages/topics';
import Mockers from './pages/mockers';

const App = () => (
    <Router>
        <div className="container">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to="/mockers">Mockers</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/mockers" component={Mockers} />
        </div>
    </Router>
);

export default App;