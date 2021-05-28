//饼图
import React, { Component } from "react";
import * as echarts from "echarts";

import "./style.scss";
class Piechart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: null,
      chart: null,
    };
  }
  componentDidMount() {
    this.getEchartsYuan();
  }
  getEchartsYuan() {
    //环形图百分比
    let chartDom = document.getElementById("showPie");
    let myChart = echarts.init(chartDom);
    console.log("二级图", myChart);
    let ceshi = "存在的不";
    let option = {
      color: ["#f8e367", "#99dfff", "#58c0f0", "#5ea6ff", "#ff9e48", "#bcbcbc"],
      series: [
        {
          name: "驾驶分析",
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
    console.log("参数", ceshi, option);
    option && myChart.setOption(option);
    console.log("我是最终的图", myChart);
  }
  render() {
    return (
      <div className="echarstwo">
        <div className="pieChart" id="showPie"></div>
      </div>
    );
  }
}

export default Piechart;
