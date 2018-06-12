import React from 'react';
import { Button, Table } from 'antd';

import './index.less';

export default function MockerMockModuleList(props) {
    const { isLoaded, mockerItem, onShowResult, updateActive } = props;

    const activeModule = mockerItem.config.activeModule || '';
    const mockModuleList = mockerItem.mockModuleList || [];

    const tableColumns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
            <Button
                type="primary"
                disabled={mockerItem.config.disable ? 'disable' : ''}
                onClick={onShowResult.bind(this, record.query, record.host)}
            >
                {text}
            </Button>
        )
    }, {
        title: 'Version',
        dataIndex: 'version',
        key: 'version'
    }, {
        title: 'Author',
        dataIndex: 'author',
        key: 'author'
    }, {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <div>
                {
                    (record.name !== activeModule) ?
                        <Button
                            type="primary"
                            disabled={mockerItem.config.disable ? 'disable' : ''}
                            onClick={updateActive.bind(this, record.name)}
                        >
                            Active It
                        </Button>
                        : <span>Aready active</span>
                }

                <span className="ant-divider" />
                <Button disabled> 编辑 </Button>

                <span className="ant-divider" />
                <Button disabled> 删除 </Button>
            </div>
        )
    }];

    return (
        <div className="mocker-mock-module-list">

            < Table loading={!isLoaded} rowKey="name" columns={tableColumns} dataSource={mockModuleList} />

        </div>
    );
}
