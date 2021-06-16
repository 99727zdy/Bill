import React from 'react';
const { TabPane } = Tabs;
import { Tabs } from 'antd';



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
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>,
      </div>
    );
  }
}




