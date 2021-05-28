import React, { Component, Fragment } from "react";
import "./style.scss";
import * as echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/pie";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
//插件
import "echarts/lib/chart/candlestick";
import "echarts/lib/chart/bar";
import "echarts/lib/component/dataset";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/grid";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getEchartsOne();
  }
  getEchartsOne() {
    let chartDom = document.getElementById("r1Echarts_content");
    let myChart = echarts.init(chartDom);
    let option;
    option = {
      title: {
        text: "",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["公司人员", "非公司人员"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      // toolbox: {
      //     feature: {
      //         saveAsImage: {}
      //     }
      // },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "公司人员",
          type: "line",
          stack: "总量",
          data: [500, 800, 3400, 2500, 3500, 2500, 1000],
        },
        {
          name: "非公司人员",
          type: "line",
          stack: "总量",
          data: [400, 500, 800, 1000, 1500, 1000, 500],
        },
      ],
    };
    option && myChart.setOption(option);
  }
  render() {
    return (
      <Fragment>
        <div className="footer">
          {/* echarts */}
          <div className="echarsone">
            <div id="r1Echarts_content"></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
