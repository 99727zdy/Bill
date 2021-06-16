import React from "react";
import { Tabs } from "antd";
import ManageUser from "../components/ManageUser/index";
import ManageBill from '../components/ManageBill/index';
import Visualization from '../components/Visualization/index'
const { TabPane } = Tabs;

export default class SlidingTabPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "查看账单",
    };
  }

  render() {
    function callback(key) {
      console.log(key);
    }
    return (
      <div>
        <Tabs onChange={callback} type="card">
          <TabPane tab="管理用户" key="1">
            <ManageUser>{this.state.name}</ManageUser>
          </TabPane>
          <TabPane tab="管理账单" key="2">
            <ManageBill></ManageBill>
          </TabPane>
          <TabPane tab="可视化·" key="3">
            <Visualization></Visualization>
          </TabPane>
        </Tabs>
        ,
      </div>
    );
  }
}
