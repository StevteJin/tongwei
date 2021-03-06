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
        },
      ],
      centerdata: [
        { state: "终", time: "10:20:45", where: "杭州北部软件园" },
        { state: "起", time: "10:20:45", where: "杭州东部软件园" },
        { state: "起", time: "10:20:45", where: "杭州北部软件园" },
      ],
    };
  }
  jump() {
    this.props.history.push("/Faces");
  }
  render() {
    const { whatCount, centerdata } = this.state;
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
          <div className="Right">
            <div className="peopleCounting">
              <div className="righttop">
                <span className="spanleft">人员轨迹</span>
                <span className="spanright">X</span>
              </div>
              <div className="rightbottom">
                <div className="headbox">
                  <div className="headpng"></div>
                  <div className="headright">
                    <div>张敏（123456）</div>
                    <div>334354656565</div>
                    <div>园区西门1门787738</div>
                  </div>
                </div>
                <div className="rightcenter">
                  <div className="centertop">
                    <span>1天</span>
                    <span>3个点位</span>
                    <span>3条记录</span>
                  </div>
                  <div className="centerbottom">
                    2021-04-21 07:09:09 至 2021-05-21 07:09:09
                  </div>
                </div>
                <div className="rightbottom">
                  <div className="msgbottom">
                    {centerdata.map((item, index) => {
                      return (
                        <div key={index} className="msgbox">
                          <div className="msg1">{item.state}</div>
                          <div className="msg2">
                            <div>{item.time}</div>
                            <div>{item.where}</div>
                          </div>
                          <div className="msg3"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Researchcontrol);
