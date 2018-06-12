import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Button, Card, Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';

import { loadMockerList } from './data/data-mocker-list';

import './index.less';

class Mockers extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            curTag: '全部'
        };
    }

    componentDidMount() {
        this.props.loadMockerList();
    }

    getAllTags() {
        const { list } = this.props;

        let arr = [];

        list.forEach((item) => {
            arr = arr.concat(item.config.tags);
        });

        return _.uniq(arr);
    }

    getFilterList() {
        const { curTag } = this.state;
        const { list } = this.props;

        return list.filter(item => item.config.tags.indexOf(curTag) > -1);
    }

    handleClickTag(tagName) {
        this.setState({
            curTag: tagName
        });
    }

    render() {
        const { curTag } = this.state;
        const { list } = this.props;

        const tagList = this.getAllTags();
        const filterList = this.getFilterList();

        return (
            <div className="mockers">
                <div className="tag-wrapper">
                    <Button.Group>
                        {
                            tagList.map((tagName, tagIndex) => {
                                return <Button
                                    key={tagIndex}
                                    className={tagName === curTag ? 'active' : ''}
                                    icon="tag"
                                    onClick={this.handleClickTag.bind(this, tagName)}>{tagName}</Button>;
                            })
                        }
                    </Button.Group>
                </div>
                <div className="list-wrapper">
                    {
                        filterList.map((item, index) => {
                            return (
                                <Row key={index}>
                                    <Col span={24}>
                                        <Card title={`${index + 1}. ${item.name}`}>
                                            <Button.Group>
                                                {
                                                    item.config.tags.map((tagName, tagIndex) => {
                                                        return <Button
                                                            key={tagIndex}
                                                            className={tagName === curTag ? 'active' : ''}
                                                            icon="tag"
                                                            onClick={this.handleClickTag.bind(this, tagName)}>{tagName}</Button>;
                                                    })
                                                }
                                            </Button.Group>
                                            <div className="detail">
                                                <p>{item.description}</p>
                                                <p>{item._fullPath}</p>
                                            </div>

                                            <NavLink to={`/admin/mockers/mocker/${item.name}`}>
                                                <Button type="primary"
                                                        size="large"
                                                        icon="tool">更多...</Button>
                                            </NavLink>
                                        </Card>
                                    </Col>
                                </Row>
                            );
                        })
                    }
                </div>
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
