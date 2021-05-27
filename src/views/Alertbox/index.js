import React, { Component } from "react";
import "./style.scss";
class Alertbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="alertBox">
        <div className="close">X</div>
        <div className="title">通威大道人脸抓拍HB18920NH</div>
        <div className="pointWhat">
          <div>点位用途：通威大道西街道</div>
          <div>所在位置：信息监察部门</div>
          <div>所属部门：人脸抓拍</div>
        </div>
        <div className="snap">
          <div className="snap1">今日累计人脸抓拍数</div>
          <div className="snap2">2528</div>
        </div>
      </div>
    );
  }
}

export default Alertbox;
