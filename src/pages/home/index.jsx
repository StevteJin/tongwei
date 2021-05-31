import React, { Component } from "react";
import MapLight from "../../components/map_light";

import Header from "../header";
import Footer from "../footer";

import Alertbox from "../../views/Alertbox";
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
    this.setState({
      choiceIndex: key,
    });
  }
  gowhere(where) {
    this.props.history.push(where);
  }
  render() {
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
          <div onClick={() => this.gowhere("/details")}>门禁点位统计详情</div>
          <div onClick={() => this.gowhere("/facedetail")}>点位抓拍统计详情</div>
          <div onClick={() => this.gowhere("/Researcherstrack")}>人员轨迹查询</div>
          <div>人员预警</div>
          <div>热力图</div>
          <div>出入口车辆信息统计详情</div>
          <div>视频设备信息统计详情</div>
          <div>车辆轨迹查询</div>
          <div>车辆预警</div>
          <div>视频巡检</div>
          <div>地图说明</div>
        </div>
        <Personnelcontrol />
        <Piechart />
        <Alertbox />

        <MapLight />
        {/* <Map /> */}
        <div className="conent">{this.ContentHome(choiceIndex)}</div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
