import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
// import Piechart from "../../views/Piechart";
import "./style.scss";
class Cardetailcontrol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whatCount: [
        {
          where: "通威园区西门出入口",
          what: "进出入车辆数",
          whatnum: "1296,32",
          vip: "进出入VIP车辆数",
          vipnum: "2233",
        },
        {
          where: "通威园区西门出入口",
          what: "进出入车辆数",
          whatnum: "1296,32",
          vip: "进出入VIP车辆数",
          vipnum: "2233",
        },
        {
          where: "通威园区西门出入口",
          what: "进出入车辆数",
          whatnum: "1296,32",
          vip: "进出入VIP车辆数",
          vipnum: "2233",
        },
      ],
      whoDo: [
        {
          dowhat: "川A23453",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
        },
        {
          dowhat: "浙B34532",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
        },
        {
          dowhat: "皖A3343",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
        },
        {
          dowhat: "沪C37832",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
        },
        {
          dowhat: "浙C24343",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
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
          </div>
          {/* 这是左边 */}
          <div className="Left">
            <div className="peopleCounting">
              <div className="countTitle">
                <span>X</span>出入口通行车辆趋势
              </div>
              <div className="echartbox"></div>
              <div className="countTitle">
                <span>X</span>出入口车辆信息统计
              </div>
              <div>
                <div>
                  {whatCount.map((item, index) => {
                    return (
                      <div key={index} className="carbox">
                        <div className="carimg"></div>
                        <div className="carmsg">
                          <div></div>
                          <div>
                            <span>{item.what}</span>
                            <span>{item.whatnum}</span>
                          </div>
                          <div>
                            <span>{item.vip}</span>
                            <span>{item.vipnum}</span>
                          </div>
                        </div>
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
              <div className="countTitle">实时车辆抓拍照片</div>
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

export default withRouter(Cardetailcontrol);
