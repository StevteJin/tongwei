//饼图
import React, { Component } from "react";
import * as echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie"; //饼状图
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import "./style.scss";
class Piechart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getEchartsYuan();
  }
  getEchartsYuan() {
    //环形图百分比
    let huan_val = document.getElementsByClassName("pieChart")[0];
    // console.log("我是饼图对象", huan_val);
    let chart = echarts.init(huan_val);
    let option = {
      color: ["#f8e367", "#99dfff", "#58c0f0", "#5ea6ff", "#ff9e48", "#bcbcbc"],
      series: [
        {
          name: "门岗刷脸",
          type: "pie",
          radius: ["60%", "80%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center",
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold",
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 33,
              name: "慢速",
            },
            {
              value: 26,
              name: "低速",
            },
            {
              value: 6,
              name: "中速",
            },
            {
              value: 2,
              name: "高速",
            },
            {
              value: 3,
              name: "超速",
            },
            {
              value: 30,
              name: "怠速",
            },
          ],
        },
      ],
    };
    chart.setOption(option);
  }
  render() {
    return <div className="pieChart"></div>;
  }
}

export default Piechart;
