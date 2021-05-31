import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import Commoncontrol from "../../views/Commoncontrol";
import Dowhat from "../../views/Dowhat";
import Personnelcontrol from "../../views/Personnelcontrol";
import Controlofgoods from "../../views/Controlofgoods";
import Detailcontrol from "../../views/Detailcontrol";
import Facecontrol from "../../views/Facecontrol";
import Researchcontrol from "../../views/Researchcontrol";
import Map from "../../pages/Map";
import "./style.scss";

export default class Researcherstrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceIndex: 0,
      titleModule: [{ name: "人员轨迹查询" }],
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
  goback() {
    this.props.history.push("/");
  }
  render() {
    const { choiceIndex, titleModule } = this.state;
    return (
      <div className="homeconent">
        <div className="goback" onClick={() => this.goback()}>
          返回首页
        </div>
        <Header
          PagesSet={(key) => this.SwitchPages(key)}
          titleModule={titleModule}
          choiceIndex={choiceIndex}
        />
        {/* <Dowhat /> */}
        {/* <Commoncontrol /> */}
        {/* <Personnelcontrol /> */}
        {/* <Detailcontrol /> */}
        <Researchcontrol />
        <Map />
        {/* <div className="conent">{this.ContentHome(choiceIndex)}</div> */}
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    );
  }
}
