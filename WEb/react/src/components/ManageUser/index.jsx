import React from "react";
import { Tabs } from "antd";
import AddUser from './AddUser'
const { TabPane } = Tabs;

export default class ManageUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "left",
      name: this.props,
    };
  }
  componentWillMount(){
    console.log(this.state);
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode,name} = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
            <TabPane tab={name.children} key={1} disabled={1 === 28}>
              <AddUser/>
            </TabPane>
        </Tabs>
      </div>
    );
  }
}