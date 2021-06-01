import React, { Component, Fragment } from "react";
import "./style.scss";
class Controlofgoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carMsg: [
        {
          name: "剩余车位数量",
          number: 202,
        },
        {
          name: "当前车辆统计",
          number: 183,
        },
        {
          name: "进入园区车辆数量",
          number: 95,
        },
        {
          name: "访客车辆数量",
          number: "08",
        },
        {
          name: "物流车辆数量",
          number: 16,
        },
        {
          name: "参观接待车辆",
          number: "09",
        },
        {
          name: "化学品槽车",
          number: 14,
        },
      ],
      carcase: [
        {
          who: "川A·12345",
          why: "车辆超速",
          what: "物流车辆",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
          state: "未处理",
        },
        {
          who: "川A·12345",
          why: "车辆超速",
          what: "物流车辆",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
          state: "未处理",
        },
        {
          who: "川A·12345",
          why: "车辆超速",
          what: "物流车辆",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
          state: "未处理",
        },
        {
          who: "川A·12345",
          why: "车辆超速",
          what: "物流车辆",
          time: "2021-09-09 19:09:32",
          where: "园区西门1门BH19201",
          state: "未处理",
        },
      ],
    };
  }
  render() {
    const { carMsg, carcase } = this.state;
    return (
      <Fragment>
        <div className="Controlofgoods">
          <div className="Left">
            <div className="carname">
              <span>X</span>
              <span>今日入园车辆统计</span>
            </div>
            <div className="parkbox">
              <div className="parkimg"></div>
              <div className="parkcontent">
                <div className="parkone">停车总数</div>
                <div className="parktwo">352</div>
              </div>
            </div>
            <div className="parkmsg">
              {carMsg.map((item, index) => {
                return (
                  <div key={index} className="parkcase">
                    <div className="casename">{item.name}</div>
                    <div className="casemsg">
                      <span className="casenumber">{item.number}</span>
                      <span className="caseimg"></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 这是右边 */}
          <div className="Right">
            <div className="carname">
              <span>报警类型统计</span>
              <span>X</span>
            </div>
            <div className="carmsg">
              <div className="carbox">
                <div>VIP车辆被占用</div>
                <div>03</div>
              </div>
              <div className="carbox">
                <div>车辆超速</div>
                <div>15</div>
              </div>
              <div className="carbox">
                <div>车辆超高</div>
                <div>03</div>
              </div>
              <div className="carbox">
                <div>车辆违停</div>
                <div>03</div>
              </div>
            </div>
            <div className="carname">
              <span>实时报警列表</span>
              <span>X</span>
            </div>
            <div className="carcase">
              {carcase.map((item, index) => {
                return (
                  <div key={index} className="caseindex">
                    <div className="casetop">
                      <span>{item.who}</span>
                      <span>{item.why}</span>
                    </div>
                    <div className="casebottom">
                      <div className="caseimg"></div>
                      <div className="casemsg">
                        <div>{item.what}</div>
                        <div>{item.time}</div>
                        <div>{item.where}</div>
                        <div>{item.state}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Controlofgoods;
