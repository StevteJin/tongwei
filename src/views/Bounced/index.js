import React, { Component } from "react";
import { Radio } from "antd";

import "./style.scss";
class Bounced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="bounced">
        <div className="close">X</div>
        <div className="title">访客非法闯入</div>
        <div className="imgbox">
          <div className="topimg">
            <span>实时预览</span>
            <span>历史回放</span>
          </div>
          <div className="bottomimg"></div>
          <div className="imgtime">2021-09-09 19:09:32</div>
          <div className="imgwhere">园区西门1门BH19201TO</div>
        </div>
        <div className="radiobox">
          <div className="radioleft">
            <Radio.Group onChange={this.onChange} value={value}>
              <Radio value={1}>确认</Radio>
              <Radio value={2}>派工</Radio>
            </Radio.Group>
          </div>
          <div className="radioright">选择联系人</div>
        </div>
        <div className="lastbox">
          <span className="lastleft">请选择或输入意见</span>
          <span className="lastright">处理</span>
        </div>
      </div>
    );
  }
}

export default Bounced;
