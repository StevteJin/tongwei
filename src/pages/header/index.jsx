import React, { Component } from "react";

import "./style.scss";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      systemTitle: "通威太阳能",
      top_count: 0,
      timeNow: " ",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.showtime();
    }, 1000);
  }
  handle_top(item, index) {
    console.log(item, index);
    this.setState({
      top_count: index,
    });
  }
  // 时间
  showtime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var weeks = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ]; //获取当前星期几(0-6,0代表星期天)
    var week = weeks[date.getDay()];
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    var time =
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds +
      " " +
      week;
    this.setState({
      timeNow: time,
    });
  }
  render() {
    const { systemTitle, timeNow } = this.state;
    const { choiceIndex, PagesSet, titleModule } = this.props;
    return (
      <div className="header">
        <div className="header_content">
          <div className="fogemt">
            <div className="header_c_title">
              <div className="title_left">
                <h1>{systemTitle}</h1>
              </div>
            </div>
          </div>
          <div className="header_time_user">
            <div className="time">
              <span>{timeNow}</span>
            </div>
          </div>
        </div>
        <div className="header_title_list">
          <ul>
            {titleModule.map((item, index) => {
              return (
                <li
                  key={index}
                  className={choiceIndex === index ? "active" : null}
                  onClick={() => PagesSet(index)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <ul className="Header-left">
                    <li ><span></span></li>
                    {toplist.map((item,key)=>(
                        <li className="Header-left-img " style={choiceIndex===key?{color:"white"}:null} onClick={()=>PagesSet(key)} key={key}><img src={require(`../../assets/images/header/${item.url}`).default} alt=""></img><span>{item.name}</span></li>
                    ))}
                    
                </ul> */}
      </div>
    );
  }
}
