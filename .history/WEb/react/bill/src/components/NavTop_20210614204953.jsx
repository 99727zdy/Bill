import React from 'react';
import { Tabs } from 'antd';
import SlidingTabsDemo from './NavLeft'
const { TabPane } = Tabs;

export default class SlidingTabPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name:"查看账单"
    };
  }


  render() {
const name =this.state.name
function callback(key) {
  console.log(key);
}
    const { mode } = this.state;
    return (
      <div>
  <Tabs onChange={callback} type="card">
    <TabPane tab="管理用户" key="1">
    <SlidingTabsDemo {this.name}></SlidingTabsDemo>
    </TabPane>
    <TabPane tab="管理账单" key="2">
    <SlidingTabsDemo></SlidingTabsDemo>
    </TabPane>
    <TabPane tab="" key="3">
    <SlidingTabsDemo></SlidingTabsDemo>
    </TabPane>
  </Tabs>,
      </div>
    );
  }
}




