import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadMockerList } from './data/data-mocker-list';

import './index.less';

class Mockers extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.loadMockerList();
    }

    render() {
        let { isLoaded, list } = this.props;

        return (
            <div className="mockers">
                <h2>Mockers</h2>
                <p>isLoaded={isLoaded + ''}</p>
                <p>list={JSON.stringify(list)}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { mockerListInfo } = state;

    return {
        isLoaded: mockerListInfo.isLoaded,
        list: mockerListInfo.list
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadMockerList() {
            return dispatch(loadMockerList());
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mockers);
