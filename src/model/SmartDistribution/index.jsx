import React, { Component } from 'react'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import './style.scss'

export default class SmartDistribution extends Component {
    constructor(props){
        super(props)
        this.state={
            VariousItemsTotal:{
                total:[{complete:67,quota:33},{complete:84,quota:16},{complete:72,quota:28}],
                rection:[{complete:67,quota:33},{complete:84,quota:16},{complete:72,quota:28}],
                relay:[{complete:67,quota:33},{complete:84,quota:16},{complete:72,quota:28}]
            },
            colorstr:['rgb(232,195,72)','rgb(112,234,235)','rgb(248,100,98)'],
            CompletedSmartList:[
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
                {id:"线路1",manufactor:105,smokename:4435,number:6.12,time:"2:30:50"},
            ]

        }
    }
    componentDidMount(){
        const {VariousItemsTotal,colorstr}=this.state

        //总量
        const Warehousleft = echarts.init(document.getElementById("disvolume-total"));
        Warehousleft.setOption(this.EchartsReft(VariousItemsTotal.total[0],colorstr[0]));

        const Warehousleft1 = echarts.init(document.getElementById("disvolume-total1"));
        Warehousleft1.setOption(this.EchartsReft(VariousItemsTotal.total[1],colorstr[0]));

        const Warehousleft2 = echarts.init(document.getElementById("disvolume-total2"));
        Warehousleft2.setOption(this.EchartsReft(VariousItemsTotal.total[2],colorstr[0]));

        //直配
        const rection = echarts.init(document.getElementById("disvolume-rection"));
        rection.setOption(this.EchartsReft(VariousItemsTotal.rection[0],colorstr[1]));

        const rection1 = echarts.init(document.getElementById("disvolume-rection1"));
        rection1.setOption(this.EchartsReft(VariousItemsTotal.rection[1],colorstr[1]));

        const rection2 = echarts.init(document.getElementById("disvolume-rection2"));
        rection2.setOption(this.EchartsReft(VariousItemsTotal.rection[2],colorstr[1]));

        //接力
        const relay = echarts.init(document.getElementById("disvolume-relay"));
        relay.setOption(this.EchartsReft(VariousItemsTotal.relay[0],colorstr[2]));

        const relay1 = echarts.init(document.getElementById("disvolume-relay1"));
        relay1.setOption(this.EchartsReft(VariousItemsTotal.relay[1],colorstr[2]));

        const relay2 = echarts.init(document.getElementById("disvolume-relay2"));
        relay2.setOption(this.EchartsReft(VariousItemsTotal.relay[2],colorstr[2]));


    }

    EchartsReft(data,color) {
       return {
        title: [{
            text: `{val| ${data.complete}% }`,//\n{name|' + title + '}
            top: 'center',
            left: 'center',
            textStyle: {
                rich: {
                    val: {
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: color,
                        padding: [10, 0]
                    }
                }
            }
        }],
        series: [
            {
                name: '年',
                type: 'pie',
                clockWise: false,
                hoverAnimation: true, //鼠标移入变大
                radius: ['75%', '85%'],
                
                itemStyle: {
                        normal: {
                        color: 'rgba(141, 139, 139,0.2)',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: [{
                        value: data.complete,
                        itemStyle: {
                            normal: {
                                color: color,
                            },
                        }
                    },
                    {
                        value: data.quota,
                    }
                ]
            },
            {
                name: '月',
                type: 'pie',
                hoverAnimation: false, //鼠标移入变大
                clockWise: false,
                radius: ['67%', '70%'],
                itemStyle: {
                        normal: {
                        color: 'rgba(141, 139, 139,0.2)',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: [{
                        value: data.complete,
                    },
                    {
                        value: data.quota,
                    }

                ],

            }

            ]
        };
    }

    render() {
        const {CompletedSmartList}=this.state;
        return (
            <div className="SmartDistribution">
                 <div className="SmartDistributionLeft Databack">
                    <span className="title">仓储概况</span>
                    <p className="total-tit Mantop"><span></span><span>分拣数量</span></p>
                    <ul className="total">
                        <li>
                            <p id="disvolume-total" className="disvolume"></p>
                            <p><span className="distotal">47797</span><span>/8000</span></p>
                            <p><span>配送量</span></p>
                        </li>
                        <li>
                            <p id="disvolume-total1" className="disvolume"></p>
                            <p><span className="distotal">540</span><span>/800</span></p>
                            <p><span>配送量</span></p>
                        </li>
                        <li>
                            <p id="disvolume-total2" className="disvolume"></p>
                            <p><span className="distotal">85</span><span>/145</span></p>
                            <p><span>配送量</span></p>
                        </li>
                    </ul>

                    <p className="total-tit"><span></span><span>直配</span></p>
                    <ul className="total">
                        <li>
                            <p id="disvolume-rection" className="disvolume"></p>
                            <p><span className="rectionclr">47797</span><span>/8000</span></p>
                            <p><span>配送量</span></p>
                        </li>
                        <li>
                            <p id="disvolume-rection1" className="disvolume"></p>
                            <p><span className="rectionclr">540</span><span>/800</span></p>
                            <p><span>配送量</span></p>
                        </li>
                        <li>
                            <p id="disvolume-rection2" className="disvolume"></p>
                            <p><span className="rectionclr">85</span><span>/145</span></p>
                            <p><span>配送量</span></p>
                        </li>
                    </ul>
                    <p className="total-tit"><span></span><span>接力</span></p>
                    <ul className="total">
                        <li>
                            <p id="disvolume-relay" className="disvolume"></p>
                            <p><span className="relay">47797</span><span>/8000</span></p>
                            <p><span>配送量</span></p>
                        </li>
                        <li>
                            <p id="disvolume-relay1" className="disvolume"></p>
                            <p><span className="relay">540</span><span>/800</span></p>
                            <p><span>配送量</span></p>
                        </li>
                        <li>
                            <p id="disvolume-relay2" className="disvolume"></p>
                            <p><span className="relay">85</span><span>/145</span></p>
                            <p><span>配送量</span></p>
                        </li>
                    </ul>
                 </div>


                 <div className="SmartDistributionRight Databack">
                    <span className="title">当日入库</span>
                    <ul className="CompletedSmart-Tab">
                                <li><span>线路名</span><span>客户数</span><span>订单量</span><span>里程</span><span>时长</span></li>
                            {CompletedSmartList.map((item,key)=>(
                                <li key={key}><span>{item.id}</span><span>{item.manufactor}</span><span>{item.smokename}</span><span>{item.number}</span><span>{item.time}</span></li>
                            ))}
                        </ul>

                 </div>
            </div>
        )
    }
}
