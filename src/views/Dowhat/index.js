import React, { Component } from "react";
import { Checkbox } from "antd";
import "./style.scss";
class Dowhat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doWhatName: [
        {
          key: 0,
          value: "业务管理",
        },
      ],
    };
  }
  render() {
    const { doWhatName } = this.state;
    return <div className="dowhat">{doWhatName[0].value}</div>;
  }
}

export default Dowhat;
