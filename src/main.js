import React, { Component } from "react";
import { HashRouter, Route, withRouter } from "react-router-dom";

import Homer from "./pages/home/index";
import Details from "./pages/details/index";

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        {/* <Route path="/login" exact component={Login}  onEnter={()=>{document.title='平台登录'}}></Route> */}
        <Route path="/" exact component={Homer}></Route>
        <Route path="/details" exact component={Details}></Route>
      </HashRouter>
    );
  }
}
