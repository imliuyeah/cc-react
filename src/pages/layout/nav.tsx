/*
 * @Descripttion: 
 * @Author: 21100053
 * @Date: 2023-09-21 20:42:17
 */
import { HomeOutlined, FolderAddOutlined, OrderedListOutlined, DesktopOutlined, LineChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: 'home',
    icon: <HomeOutlined />
  },
  {
    label: '任务创建管理',
    key: 'creat',
    icon: <FolderAddOutlined />,
    children: [
      {
        label: '配置管理',
        key: 'configManage',
      },
      {
        label: '任务创建',
        key: 'taskCreating',
      },
      {
        label: '任务审核',
        key: 'taskCheck',
      },
    ]
  },
  {
    label: '任务工单池',
    key: 'taskList',
    icon: <OrderedListOutlined />
  },
  {
    label: '任务调度',
    key: 'taskDispatch',
    icon: <DesktopOutlined />,
    children: [
      {
        label: '任务推送',
        key: 'taskPush',
      },
      {
        label: '拜访计划管理',
        key: 'visitPlanManage',
      }
    ]
  },
  {
    label: '任务统计分析',
    key: 'taskAnalyze',
    icon: <LineChartOutlined />,
    children: [
      {
        label: '任务查询',
        key: 'taskQuery',
      },
      {
        label: '任务进度统计',
        key: 'taskProgress',
      },
      {
        label: '执行结果分析',
        key: 'resultAnalysis',
      }
    ]
  }
];

const Nav: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['home']}
      defaultOpenKeys={['home']}
      mode="inline"
      items={items}
    />
  );
};

export default Nav;