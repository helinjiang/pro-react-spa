import React from 'react';
import { Table, Button } from 'antd';

import './index.less';

export default function MockerMockModuleList(props) {
  const { isLoaded, mockerData, onShowResult, updateActive } = props;

  const activeModule = mockerData.activeModule || '';
  const mockModuleList = mockerData.modules || [];

  const tableColumns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <Button
        type="primary"
        disabled={mockerData.disable ? 'disable' : ''}
        onClick={onShowResult.bind(this, record.query, record.host)}
      >
        {text}
      </Button>
    ),
  }, {
    title: 'Version',
    dataIndex: 'version',
    key: 'version',
  }, {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  }, {
    title: 'Host',
    dataIndex: 'host',
    key: 'host',
  }, {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <div>
        {
          (record.name !== activeModule) ?
            <Button
              type="primary"
              disabled={mockerData.disable ? 'disable' : ''}
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
    ),
  }];

  return (
    <div className="mocker-mock-module-list">

      < Table loading={!isLoaded} rowKey="name" columns={tableColumns} dataSource={mockModuleList} />

    </div>
  );
}
