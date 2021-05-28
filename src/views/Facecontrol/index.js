import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
// import Piechart from "../../views/Piechart";
import "./style.scss";
class Facecontrol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whatCount: [
        {
          where: "西街道HB18920NH",
          isWho: "公司人员数",
          isNum: "1298,32",
          noWho: "非公司人数",
          noNum: "190",
        },
        {
          where: "西街道HB18920NH",
          isWho: "公司人员数",
          isNum: "4298,32",
          noWho: "非公司人数",
          noNum: "290",
        },
        {
          where: "西街道HB18920NH",
          isWho: "公司人员数",
          isNum: "3298,32",
          noWho: "非公司人数",
          noNum: "290",
        },
        {
          where: "西街道HB18920NH",
          isWho: "公司人员数",
          isNum: "5298,32",
          noWho: "非公司人数",
          noNum: "490",
        },
        {
          where: "西街道HB18920NH",
          isWho: "公司人员数",
          isNum: "2298,32",
          noWho: "非公司人数",
          noNum: "590",
        },
        {
          where: "西街道HB18920NH",
          isWho: "公司人员数",
          isNum: "2298,32",
          noWho: "非公司人数",
          noNum: "590",
        },
        {
          where: "西街道HB18920NH",
          isWho: "公司人员数",
          isNum: "2298,32",
          noWho: "非公司人数",
          noNum: "590",
        },
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
            <div className="peopleCounting">
              <div className="countTitle">点位人脸抓拍统计</div>
              <div>
                {whatCount.map((item, index) => {
                  return (
                    <div key={index} className="whatCount">
                      <div className="portrait"></div>
                      <div className="rightcontent">
                        <div>{item.where}</div>
                        <div>
                          <span>{item.isWho}</span>
                          <span>{item.isNum}</span>
                        </div>
                        <div>
                          <span>{item.noWho}</span>
                          <span>{item.noNum}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
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

export default withRouter(Facecontrol);
