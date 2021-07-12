import React from "react";
import { Component } from "react";
import { padLeft, range } from "../utility";

class MonthPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggleDropdown = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen, //点击切换菜单下拉或收起
    });
  };
  render() {
    const { year, month } = this.props;
    const { isOpen } = this.state;
    //生成月份和年份数组
    const monthRange = range(12, 1);
    const yearRange = range(9, -4).map((number) => number + year);
    // console.log(yearRange);

    return (
      <div className="dropdown month-picker-component">
        <h4>选择月份</h4>
        <button
          className="btn btn-lg btn-secondary dropdown-toggle"
          onClick={this.toggleDropdown}
        >
          {`${year}年 ${padLeft(month)}月`}
        </button>
        {isOpen && (
          <div className="dropdown-menu" style={{ display: "block" }}>
            <div className="row">
              <div className="col border-right">
              {/* 遍历数组 并且展示在同一列 */}
                {yearRange.map((yearNumber, index) => (
                  <a key={index} className="dropdown-item">
                    {yearNumber} 年
                  </a>
                ))}
              </div>
              <div className="col">
              {/* 遍历数组 并且展示在同一列 */}
                {monthRange.map((monthNumber, index) => (
                  <a key={index} className="dropdown-item">
                    {padLeft(monthNumber)} 月
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MonthPicker;
