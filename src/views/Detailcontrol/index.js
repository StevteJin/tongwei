import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
// import Piechart from "../../views/Piechart";
import "./style.scss";
class Detailcontrol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whatCount: [
        { number: 1, where: "园区西门1门BH19201TO", count: 189739 },
        { number: 2, where: "园区西门1门BH19201TO", count: 178736 },
        { number: 3, where: "园区西门1门BH19201TO", count: 124563 },
        { number: 4, where: "园区西门1门BH19201TO", count: 106543 },
      ],
      whoDo: [
        {
          dowhat: "陌生人",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
          how: "已处理",
        },
        {
          dowhat: "非法访客",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
          how: "未处理",
        },
        {
          dowhat: "非法访客",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
          how: "已处理",
        },
        {
          dowhat: "非法访客",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
          how: "未处理",
        },
        {
          dowhat: "陌生人",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
          how: "已处理",
        },
      ],
    };
  }
  jump() {
    this.props.history.push("/details");
  }
  render() {
    const { whatCount, whoDo } = this.state;
    return (
      <Fragment>
        <div className="Detailcontrol">
          <div className="topTitle">
            <div>2021-02-12 12:00:00 至 2021-02-14 12:00:00</div>
            <div>选择区域</div>
          </div>
          {/* 这是左边 */}
          <div className="Left">
            <div className="peopleCounting">
              <div className="countTitle">门禁点位刷脸次数排名</div>
              <div className="countName">共计（次）45,179</div>
              <div>
                <div>
                  {whatCount.map((item, index) => {
                    return (
                      <div key={index}>
                        <span>{item.number}</span>
                        <span>{item.where}</span>
                        <span>{item.count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* 这是右边 */}
          <div className="Right">
            <div className="peopleCounting">
              <div className="countTitle">实时报警信息</div>
              <div>
                {whoDo.map((item, index) => {
                  return (
                    <div key={index} className="whoDo">
                      <div className="tx"></div>
                      <div className="rt">
                        <div>{item.dowhat}</div>
                        <div>{item.time}</div>
                        <div>{item.where}</div>
                        <div>{item.how}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Detailcontrol);
