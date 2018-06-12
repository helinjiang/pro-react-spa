import React from 'react';
import { Button, Alert } from 'antd';

import './index.less';

export default function MockerSwitcher(props) {
  const { isDisabled, updateDisable } = props;

  return (
    <div className="mocker-switcher">
      {
        isDisabled ? (
          <Alert
            message="当前 mock 服务已被禁用，您可请点击“启用”按钮开始 mock 服务！"
            type="warning"
            showIcon
          />
        ) : (
          <Alert
            message="mock 服务已开始生效！"
            type="success"
            showIcon
          />
        )
      }

      <Button type={isDisabled ? 'primary' : 'default'} icon="setting" onClick={updateDisable}>
        {isDisabled ? '启用' : '禁用'} mock 服务
      </Button>

    </div>
  );
}
