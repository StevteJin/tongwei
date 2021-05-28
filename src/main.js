import React, { Component } from "react";
import { HashRouter, Route, withRouter } from "react-router-dom";

//首页
import Homer from "./pages/home/index";
//门禁点位统计详情
import Details from "./pages/details/index";
//点位抓拍统计详情
import Facedetail from "./pages/facedetail/index";

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        {/* <Route path="/login" exact component={Login}  onEnter={()=>{document.title='平台登录'}}></Route> */}
        <Route path="/" exact component={Homer}></Route>
        <Route path="/details" exact component={Details}></Route>
        <Route path="/facedetail" exact component={Facedetail}></Route>
      </HashRouter>
    );
  }
}
