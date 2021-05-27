import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";


// import SmartStorage from '../../model/SmartStorage'
// import SmartSorting from '../../model/SmartSorting'
// import SmartDistribution from '../../model/SmartDistribution'
// import SmartDevices from '../../model/SmartDevices'
// import ResoureMap from '../../views/ResoureMap'
// import Scrool from '../../views/Scrool'
// import Faceuing from '../../views/faceYing'
import Commoncontrol from "../../views/Commoncontrol";
import Dowhat from "../../views/Dowhat";
import Personnelcontrol from "../../views/Personnelcontrol";
import Controlofgoods from "../../views/Controlofgoods";
import Map from "../../pages/Map";
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
        <Personnelcontrol />
        <Map />
        <div className="conent">{this.ContentHome(choiceIndex)}</div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
