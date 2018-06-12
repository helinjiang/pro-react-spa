import React from 'react';
import { Link, Route } from 'react-router-dom';

import List from './components/list'
import Mocker from './components/mocker'

import './index.less';

export default function MockersContainer(props) {
    let { match } = props;

    return (
        <div className="mockers">
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.url}/:mockerName`} component={Mocker} />
            <Route
                exact
                path={match.url}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );

}

