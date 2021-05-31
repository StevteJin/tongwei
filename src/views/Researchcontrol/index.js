import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
// import Piechart from "../../views/Piechart";
import "./style.scss";
class Researchcontrol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whatCount: [
        {
          name: "张敏123456",
          biaohao: "2128837478299",
          where: "园区西门1门BH19201",
          time: "2021-09-09 19:09:32",
        },
        {
          name: "周敏123456",
          biaohao: "2128837478299",
          where: "园区西门1门BH19201",
          time: "2021-09-09 19:09:32",
        },
        {
          name: "罗敏123456",
          biaohao: "2128837478299",
          where: "园区西门1门BH19201",
          time: "2021-09-09 19:09:32",
        }
      ],
    };
  }
  jump() {
    this.props.history.push("/Faces");
  }
  render() {
    const { whatCount, whoDo } = this.state;
    return (
      <Fragment>
        <div className="Facecontrol">
          <div className="topTitle">
            <div>2021-02-12 12:00:00 至 2021-02-14 12:00:00</div>
            <div>选择区域</div>
          </div>
          {/* 这是左边 */}
          <div className="Left">
            <div className="topmsg">
              <div className="leftmsg">
                <div className="msginput">输入身份证、工号或姓名</div>
                <div className="msginput">开始时间</div>
                <div className="msginput">结束时间</div>
              </div>
              <div className="rightmsg">
                <div className="topbtn">点击上传</div>
                <div className="bottombtn">查询</div>
              </div>
            </div>
            <div className="bottommsg">
              {whatCount.map((item, index) => {
                return (
                  <div key={index} className="pcbox">
                    <div className="portrait"></div>
                    <div className="rightport">
                      <div>
                        <span>{item.name}</span>
                        <span>查看轨迹</span>
                      </div>
                      <div>{item.biaohao}</div>
                      <div>{item.where}</div>
                      <div>{item.time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 这是右边 */}
          <div className="Right"></div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Researchcontrol);
