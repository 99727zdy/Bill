import React from 'react';
const { TabPane } = Tabs;
import { Tabs } from 'antd';
import SlidingTabsDemo from './test'


export default class SlidingTabPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {

function callback(key) {
  console.log(key);
}
    const { mode } = this.state;
    return (
      <div>
  <Tabs onChange={callback} type="card">
    <TabPane tab="Tab 1" key="1">
    <SlidingTabsDemo></SlidingTabsDemo>
    </TabPane>
    <TabPane tab="Tab 2" key="2">
    <SlidingTabsDemo></SlidingTabsDemo>
    </TabPane>
    <TabPane tab="Tab 3" key="3">
    <SlidingTabsDemo></SlidingTabsDemo>
    </TabPane>
  </Tabs>,
      </div>
    );
  }
}




