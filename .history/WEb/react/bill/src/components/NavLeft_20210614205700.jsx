import React from 'react';
import { Tabs, Radio } from 'antd';
const { TabPane } = Tabs;

export default class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'left',
      name:this.props
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode});
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          {[...Array.from({ length: 4 }, (v, i) => i)].map(i => (
            <TabPane tab={"111"} key={i} disabled={i === 28}>
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

