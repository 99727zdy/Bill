import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

export default class ManageUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "left",
      name: this.props,
    };
  }

  // function name(params) {
    
  // }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
            <TabPane tab={"111"} key={1} disabled={1 === 28}>
              <div>管理用户</div>
            </TabPane>
        </Tabs>
      </div>
    );
  }
}