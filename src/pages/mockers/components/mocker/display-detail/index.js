import React from 'react';
import { Row, Col, Card, Button, Input } from 'antd';

import './index.less';

export default function MockerDetail(props) {
  const { mockerItem, actualURL, onShowResult, onParamsChange } = props;

  let curUrl = actualURL;

  // 获得当前激活状态的那个 mock module
  let mockModuleList = mockerItem.mockModuleList || [],
    mockModuleItem;

  for (let i = 0, length = mockModuleList.length; i < length; i++) {
    let curMockModule = mockModuleList[i];

    if (curMockModule.name === mockerItem.config.activeModule) {
      if (curMockModule.host) {
        curUrl = `http://${curMockModule.host}${curUrl}`;
      }

      mockModuleItem = curMockModule;
      break;
    }
  }

  return (
    <div className="mocker-detail">
      <Row>
        <Col span={12}>
          <Card>

            <Button
              type="primary"
              disabled={mockerItem.disable ? 'disable' : ''}
              size="large"
              icon="link"
              onClick={onShowResult.bind(this, mockModuleItem.config.query, mockModuleItem.config.host)}>

              {mockerItem.config.method} : {curUrl}

            </Button>


            <div>
              {
                mockerItem.params && mockerItem.params.length ? (
                  mockerItem.params.map((item, index) => {
                    return <div key={index}>
                      {item.name}:
                      <Input placeholder={item.name}
                             defaultValue={item.defaultValue}
                             onChange={onParamsChange.bind(this, item.name)}
                      />
                    </div>
                  })
                ) : null
              }
            </div>

            <h2>{mockerItem.name}</h2>
            <p>
              {mockerItem.version ? `v${mockerItem.version}` : ''}
              {mockerItem.author ? ` by ${mockerItem.author}` : ''}
            </p>
            <p>{mockerItem.description}</p>
            <p>本地路径：{mockerItem._fullPath}</p>
            <p>配置的路由: {mockerItem.route}</p>
          </Card>
        </Col>

        <Col span={12}>
          <Card>
            <textarea
              style={{ width: '100%', minHeight: '200px' }}
              value={JSON.stringify(mockerItem, null, 2)}
              readOnly
            />
          </Card>
        </Col>
      </Row>

    </div>
  );
}
