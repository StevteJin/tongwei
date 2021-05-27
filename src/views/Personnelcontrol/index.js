import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Piechart from "../../views/Piechart";
import "./style.scss";
class Personnelcontrol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whatCount: [
        {
          count: "123",
          name: "排班数",
        },
        {
          count: "348974",
          name: "在岗人数",
        },
        {
          count: "235",
          name: "请假人数",
        },
        {
          count: "674",
          name: "白班人数",
        },
        {
          count: "345",
          name: "夜班人数",
        },
        {
          count: "34556",
          name: "行政人数",
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
    this.props.history.push("/details");
  }
  render() {
    const { whatCount, whoDo } = this.state;
    return (
      <Fragment>
        <div className="Personnelcontrol">
          {/* 这是左边 */}
          <div className="Left">
            <div className="peopleCounting">
              <div className="countTitle">今日入园人数统计</div>
              <div className="inPark">
                <div className="inPng">图片</div>
                <div className="inCount">
                  <div className="int1">在园区人数</div>
                  <div className="int2">35285</div>
                </div>
              </div>
              <div className="contName">
                <div className="cn cn1">
                  <div>公司人数</div>
                  <div>34，652</div>
                </div>
                <div className="cn cn2">
                  <div>供应商人数</div>
                  <div>101</div>
                </div>
                <div className="cn cn3">
                  <div>访客人数</div>
                  <div>43</div>
                </div>
              </div>
            </div>
            <div className="peopleCounting">
              <div className="countTitle">当前人员分类统计</div>
              <div className="whoDo">
                {whatCount.map((item, index) => {
                  return (
                    <div key={index} className="doAny">
                      <div>{item.count}</div>
                      <div>{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="peopleCounting">
              <div className="countTitle">
                今日门禁人数统计
                <span onClick={() => this.jump()}>查看详情</span>
              </div>
              <div className="point">
                <div className="pointCount">
                  <div>门禁点位数</div>
                  <div>675</div>
                </div>
                <div className="pointCount">
                  <div>门禁点刷脸次数</div>
                  <div>248575</div>
                </div>
              </div>
              <div>
                <Piechart />
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

export default withRouter(Personnelcontrol);
