import React from 'react';

import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

import './index.less';

export default function MockerSwitcher(props) {
  const { name } = props;

  return (
    <div className="mocker-breadcrumb">

      <Breadcrumb>
        <Breadcrumb.Item>
            <NavLink exact to="/"> 首页 </NavLink>
        </Breadcrumb.Item>

        <Breadcrumb.Item>
            <NavLink to="/mockers"> mocker 列表 </NavLink>
        </Breadcrumb.Item>

        <Breadcrumb.Item>
            {name}
            </Breadcrumb.Item>
      </Breadcrumb>

    </div>
  );
}
