import React, { Component } from "react";
import { Checkbox } from "antd";
import "./style.scss";
class Commoncontrol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceName: [
        {
          key: 1,
          value: "门禁设备",
        },
        {
          key: 2,
          value: "视频设备",
        },
        {
          key: 3,
          value: "出入口设备",
        },
        {
          key: 4,
          value: "人脸抓拍机",
        },
        {
          key: 5,
          value: "AR设备",
        },
        {
          key: 6,
          value: "卡口测试",
        },
        {
          key: 7,
          value: "无人叉车",
        },
        {
          key: 8,
          value: "单兵",
        },
      ],
    };
  }
  onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  render() {
    const { choiceName } = this.state;
    return (
      <div className="Commoncontrol">
        <ul>
          {choiceName.map((item, index) => {
            return (
              <li key={index}>
                <Checkbox onChange={this.onChange}>{item.value}</Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Commoncontrol;
