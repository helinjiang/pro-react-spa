import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ajax } from '../../../../business/db';

import { loadMocker, loadMockerReadme, setMockerActiveModule, setMockerDisable } from '../../data/data-mocker';

import MockerBreadcrumb from './display-breadcrumb';
import MockerDetail from './display-detail';
import MockerShowResult from './display-show-result';
import MockerSwitcher from './display-action';
import MockModuleList from './display-mock-module-list';

import './index.less';

class Mocker extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showModal: false,
            modalShowData: {},
            cgiParams: {},
            actualURL: ''
        };

        this.handleActive = this.handleActive.bind(this);
        this.handleModalHide = this.handleModalHide.bind(this);
        this.handleDisable = this.handleDisable.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoaded && (this.props.isLoaded !== nextProps.isLoaded)) {
            // 加载完 mocker 信息之后，要初始化填写的参数
            const { mockerItem } = nextProps;
            let mockerParams = mockerItem.params || [];
            let { cgiParams } = this.state;

            if (mockerParams.length) {
                mockerParams.forEach((item) => {
                    if (item.defaultValue) {
                        cgiParams[item.name] = item.defaultValue;
                    }
                });
            }

            this.setState({
                cgiParams: cgiParams,
                actualURL: this.getActualURL(mockerItem, cgiParams)
            });
        }
    }

    componentDidMount() {
        console.log('Mocker componentDidMount', this.props);

        let { mockerName } = this.props.match.params;

        // 加载这个 mocker 的信息
        this.props.loadMocker(mockerName);
        // this.props.loadMockerReadme(mockerName);
    }

    handlePreviewResult = (query, host) => {
        const { mockerItem } = this.props;

        let actualURL = mockerItem.config.route;

        if (process.env.NODE_ENV !== 'production') {
            host = 'localhost:9527';
        }

        // 如果有指定的host，则使用指定的host
        if (host && (actualURL.indexOf(host) < 0)) {
            actualURL = `http://${host}${actualURL}`;
        }

        console.log('--handlePreviewResult actualURL--', actualURL, query, host);

        ajax({
            method: mockerItem.config.method,
            url: actualURL,
            data: query
        })
            .then((data) => {
                console.log(data);
                this.setState({
                    showModal: true,
                    modalShowData: data
                });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    handleActive = (name) => {
        this.props.setMockerActiveModule(this.props.mockerItem.name, name);
    };

    handleModalHide = () => {
        this.setState({
            showModal: false,
            modalShowData: {}
        });
    };

    handleDisable = () => {
        // console.log('handleDisable', this.props.mockerItem.disable);
        this.props.setMockerDisable(this.props.mockerItem.name, !this.props.mockerItem.disable);
    };

    getActualURL(mockerItem, cgiParams) {
        let curUrl = mockerItem.config.route;

        if (Object.keys(cgiParams).length) {
            Object.keys(cgiParams).forEach((key) => {
                curUrl = curUrl.replace(':' + key, cgiParams[key]);
            });
        }

        console.log('curUrl', curUrl);
        return curUrl;
    }

    render() {
        const { isLoaded, mockerItem, readme } = this.props;
        const { showModal, modalShowData, actualURL } = this.state;

        return (
            <div className="mockers-mocker">

                <MockerBreadcrumb name={mockerItem.name} />

                {
                    isLoaded ? (
                        <div>
                            <MockerSwitcher
                                isDisabled={mockerItem.disable}
                                previewResult={this.handlePreviewResult.bind(this, null)}
                                updateDisable={this.handleDisable}
                            />

                            <MockerDetail
                                mockerItem={mockerItem}
                            />

                            <MockModuleList
                                isLoaded={isLoaded}
                                mockerItem={mockerItem}
                                previewResult={this.handlePreviewResult}
                                updateActive={this.handleActive}
                            />

                            <MockerShowResult
                                isShow={showModal}
                                data={modalShowData}
                                onHide={this.handleModalHide}
                            />

                            {/*<MockerReadme htmlContent={readme} />*/}

                        </div>
                    ) : (
                        <div>加载中...</div>
                    )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { mockerInfo } = state;

    return {
        isLoaded: mockerInfo.isLoaded,
        mockerItem: mockerInfo.data,
        readme: mockerInfo.readme
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadMocker(mockerName) {
            return dispatch(loadMocker(mockerName));
        },

        loadMockerReadme(mockerName) {
            return dispatch(loadMockerReadme(mockerName));
        },

        setMockerActiveModule(mockerName, mockModuleName) {
            return dispatch(setMockerActiveModule(mockerName, mockModuleName));
        },

        setMockerDisable(mockerName, value) {
            return dispatch(setMockerDisable(mockerName, value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mocker);


