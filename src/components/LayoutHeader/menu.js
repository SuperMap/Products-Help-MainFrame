import { Menu } from 'antd';
import React from 'react';


const menu = (
  <Menu>
  <Menu.Item key="iDesktop">
    <a target="_parent" href="http://help.supermap.com/iDesktop">SuperMap iDesktop</a>
  </Menu.Item>
   <Menu.Item key="iDesktopX">
    <a target="_parent" href="http://help.supermap.com/iDesktopX">SuperMap iDesktopX</a>
  </Menu.Item>
   <Menu.Item key="iObjects">
    <a target="_parent" href="http://help.supermap.com/iObjects">SuperMap iObjects</a>
  </Menu.Item>
  <Menu.Item key="iServer">
    <a target="_parent" href="http://help.supermap.com/iServer">SuperMap iServer</a>
  </Menu.Item>
  <Menu.Item key="iPortal">
    <a target="_parent" href="http://help.supermap.com/iPortal">SuperMap iPortal</a>
  </Menu.Item>
   <Menu.Item key="iEdge">
   <a target="_parent" href="http://help.supermap.com/iEdge">SuperMap iEdge</a>
  </Menu.Item>
  <Menu.Item key="iManager">
    <a target="_parent" href="http://help.supermap.com/iManager">SuperMap iManager</a>
  </Menu.Item>
  <Menu.Item key="iManager K8S">
    <a target="_parent" href="http://help.supermap.com/iManager_K8S">SuperMap iManager K8S</a>
  </Menu.Item>
  {/* <Menu.Item key="iClient">
    <a target="_parent" href="http://help.supermap.com/iClient">SuperMap iClient</a>
  </Menu.Item> */}
  <Menu.Item key="iMobile">
    <a target="_parent" href="http://help.supermap.com/iMobile">SuperMap iMobile</a>
  </Menu.Item>
  </Menu>
  );
export default menu;