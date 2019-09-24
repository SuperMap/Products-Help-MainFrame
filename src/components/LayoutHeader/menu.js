import { Menu } from 'antd';
import React from 'react';


const menu = (
  <Menu>
  <Menu.Item key="iDesktop.NET">
    <a target="_parent" href="http://localhost:8080/iDesktop_NET">SuperMap iDesktop.NET</a>
  </Menu.Item>
   <Menu.Item key="iDesktop Java">
    <a target="_parent" href="http://Localhost:8080/iDesktop_Java">SuperMap iDesktop Java</a>
  </Menu.Item>
   <Menu.Item key="iObjects">
    <a target="_parent" href="http://Localhost:8080/iObjects">SuperMap iObjects</a>
  </Menu.Item>
  <Menu.Item key="iServer">
    <a target="_parent" href="http://Localhost:8080/iServer">SuperMap iServer</a>
  </Menu.Item>
  <Menu.Item key="iPortal">
    <a target="_parent" href="http://localhost:8080/iPortal">SuperMap iPortal</a>
  </Menu.Item>
   <Menu.Item key="iEdge">
   <a target="_parent" href="http://localhost:8080/iEdge">SuperMap iEdge</a>
  </Menu.Item>
  {/* <Menu.Item key="iManager">
    <a target="_parent" href="http://localhost:8080/iManager">SuperMap iManager</a>
  </Menu.Item>
  <Menu.Item key="iClient">
    <a target="_parent" href="http://localhost:8080/iClient">SuperMap iClient</a>
  </Menu.Item> */}
  <Menu.Item key="iMobile">
    <a target="_parent" href="http://localhost:8080/iMobile">SuperMap iMobile</a>
  </Menu.Item>
  </Menu>
  );
export default menu;