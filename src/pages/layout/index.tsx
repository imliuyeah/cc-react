/*
 * @Descripttion: 
 * @Author: 21100053
 * @Date: 2023-10-30 23:31:12
 */
import React from "react";

import Nav from './nav.js'

import { Layout as LayoutComponents, Menu } from "antd";


const { Sider, Content } = LayoutComponents;


// const contentStyle: React.CSSProperties = {
//   textAlign: 'center',
//   minHeight: 120,
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#108ee9',
// };

// const siderStyle: React.CSSProperties = {
//   textAlign: 'center',
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#3ba0e9',
// };

const Layout: React.FC = () => {
  return (
    <LayoutComponents>
      <Sider>
        <Nav></Nav>
      </Sider>
      <Content>content</Content>
    </LayoutComponents>
  )
}

export default Layout;