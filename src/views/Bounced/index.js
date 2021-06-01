import React, { Component } from "react";
import "./style.scss";
class Bounced extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
      </div>
    );
  }
}

export default Bounced;
