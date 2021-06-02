import React, { Component } from "react";
import MapLight from "../../components/map_light";

import Header from "../header";
import Footer from "../footer";

import Alertbox from "../../views/Alertbox";
import Bounced from "../../views/Bounced";
import Commoncontrol from "../../views/Commoncontrol";
import Dowhat from "../../views/Dowhat";
import Personnelcontrol from "../../views/Personnelcontrol";
import Controlofgoods from "../../views/Controlofgoods";
import Piechart from "../../views/Piechart";
import "./style.scss";

export default class Homer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceIndex: 0,
      titleModule: [{ name: "园区智慧人员管控" }, { name: "园区智慧对物管控" }],
    };
  }
  // 切换
  ContentHome(key) {
    console.log(key, 111);
    switch (key) {
      case 0:
        return <Personnelcontrol />;
      case 1:
        return <Controlofgoods />;

      default:
        break;
    }
  }

  SwitchPages(key) {
    console.log("NAV", key, "ENDNAV");
    this.setState({
      choiceIndex: key,
    });
  }
  gowhere(where) {
    this.props.history.push(where);
  }
  render() {
    //choiceIndex为0的时候对人，为1的时候对物
    const { choiceIndex, titleModule } = this.state;
    return (
      <div className="homeconent">
        <Header
          PagesSet={(key) => this.SwitchPages(key)}
          titleModule={titleModule}
          choiceIndex={choiceIndex}
        />
        <Dowhat />
        <Commoncontrol />
        <div className="btnbox">
          {choiceIndex == 0 ? (
            <div>
              <div onClick={() => this.gowhere("/details")}>
                门禁点位统计详情
              </div>
              <div onClick={() => this.gowhere("/facedetail")}>
                点位抓拍统计详情
              </div>
              <div onClick={() => this.gowhere("/Researcherstrack")}>
                人员轨迹查询
              </div>
              <div onClick={() => this.gowhere("/")}>人员预警</div>
              <div onClick={() => this.gowhere("/")}>热力图</div>
            </div>
          ) : (
            <div>
              <div onClick={() => this.gowhere("/cardetail")}>
                出入口车辆信息统计详情
              </div>
              <div onClick={() => this.gowhere("/videomsg")}>
                视频设备信息统计详情
              </div>
              <div>车辆轨迹查询</div>
              <div>车辆预警</div>
              <div>视频巡检</div>
              <div>地图说明</div>
            </div>
          )}
        </div>
        <Personnelcontrol />
        {choiceIndex == 0 ? (
          <div>
            <Piechart />
            <Alertbox />
            <Bounced />
          </div>
        ) : (
          ""
        )}
        <MapLight />
        {/* <Map /> */}
        <div className="conent">{this.ContentHome(choiceIndex)}</div>
        {choiceIndex == 0 ? (
          <footer>
            <Footer />
          </footer>
        ) : (
          ""
        )}
      </div>
    );
  }
}
