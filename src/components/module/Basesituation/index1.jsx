import React, { Component, Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './index.scss'
import { jdgk, lz1qgk, cglzq, yjc, nqbt, wqbt, rygk, khll, wjbt, tjbt } from '../../../api/mainApi'
import * as echarts from 'echarts';
import {Build, createMap,Model } from '../../../utils/map3d';
import { useMappedState } from 'redux-react-hook';

// // import "echarts"
// import echarts from 'echarts/lib/echarts';
// 引入柱状图
// import  'echarts/lib/chart/bar';
// 引入折线图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

// import { color } from 'echarts';
// import { sync } from 'resolve';

// const map = useMappedState(state => state.map3d_light);
const Basesituation = () => {
    const map = useMappedState(state => state.map3d_light);
    const [jdgkData, setjdgkData] = useState({
        "covers": "607",
        "floor": "6.23"
    })
    const [lz1qgkData, setlz1qgkData] = useState([])
    const [cglzqData, setcglzqData] = useState([])
    const [cgzxData, setcgzxData] = useState([])
    const [yjcData, setyjcData] = useState({})
    const [nqbtData, setnqbtData] = useState([])
    const [wqbtData, setwqbtData] = useState({})
    const [rygkData, setrygkData] = useState({})
    const [khllData, setkhllData] = useState({})
    const [wjbtData, setwjbtData] = useState([])
    const [tjbtData, settjbtData] = useState([])
    // componentWillMount(){
    //     this.GetData()
    // }
    useEffect(() => {
        GetData()
    }, [map]);
    const SortEcharts = (item, index) => {

        const optionrate = {
            color: ["#FF6E78", "#4A92FE", "#7EFEB2", '#FFDD61'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} '
            },
            legend: {
                data: ['30以下12', '31-40 10', '41-50 12', '51-60 5', '60以上'],
                icon: "bar",//图例形状设置,
                textStyle: { color: "#fff" },
                type: 'scroll',
                orient: 'vertical',
                show: true,
                right: 90,
                itemHeight: 10,
                itemWidth: 10,
            },
            series: [
                {
                    name: '未解除对象',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ["20%", '30%'],
                    label: {
                        position: 'inner',
                        fontSize: 8,
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 22, name: '6个月以上', itemStyle: { color: '#00F5E3' } },
                        { value: 30, name: '5-6个月', itemStyle: { color: "#FF6B54" } },
                        { value: 50, name: '4-5个月', itemStyle: { color: '#00B1FF' } },
                        { value: 70, name: '1-2个月', itemStyle: { color: '#00A86F' } },
                        { value: 90, name: '2-3个月', itemStyle: { color: '#F4F83A' } },
                        { value: 31, name: '3-4个月', itemStyle: { color: '#FF9C4E' } },

                    ],
                    center: ["28%", "30%"],// 这个属性调整图像的位置！！！！！
                },
                {
                    name: '解除对象',
                    type: 'pie',
                    radius: ['60%', '40%'],
                    labelLine: {
                        length: 30,

                    },
                    label: {
                        // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                        formatter: '{b|{b}：}{c}  ',
                        // backgroundColor: '#F6F8FC',
                        // borderColor: '#8C8D8E',
                        borderWidth: 1,
                        // borderRadius: 4,



                        rich: {
                            a: {
                                color: '#6E7079',
                                lineHeight: 22,
                                align: 'center'
                            },
                            hr: {
                                borderColor: '#fff',
                                width: '100%',
                                borderWidth: 0,
                                height: 0
                            },
                            b: {
                                color: '#83A697',
                                fontSize: 12,
                            },
                            d: {
                                fontSize: 12,
                                padding: [-10, 0, 10, 0],
                            },
                            per: {
                                color: '#9EC6B3',

                                // backgroundColor: '#4C5058',
                                padding: [0, 0],
                                borderRadius: 3
                            }
                        },

                    },
                    data: [

                        { value: 12, name: '30以下12', itemStyle: { color: '#4B91F6' } },
                        { value: 10, name: '31-40 10', itemStyle: { color: "#0076DA" } },
                        { value: 12, name: '41-50 12', itemStyle: { color: '#008856' } },
                        { value: 5, name: '51-60 5', itemStyle: { color: '#32A392' } },
                        { value: 6, name: '60以上 6', itemStyle: { color: '#00799C' } },

                    ],
                    center: ["28%", "30%"],// 这个属性调整图像的位置！！！！！
                }
            ]
        };

        const rateChart = echarts.init(document.getElementById("echartsMainaas"));
        rateChart.setOption(optionrate);

    }
    const GetData = (item, index) => {
        // //基地概况
        jdgk().then(res => {
            if (res.msg === "SUCCESS") {

                setjdgkData(res.data)
                // this.setState({
                //     jdgkData: res.data,

                // })
            }
        }).catch(error => {
        })

        // 留置区概况
        lz1qgk().then(res => {
            if (res.msg === "SUCCESS") {

                // this.setState({
                //     lz1qgkData: res.data,
                // })

                setlz1qgkData(res.data)
            }
        }).catch(error => {
        })
        // 常规留置区 那个折线
        cglzq().then(res => {
            if (res.msg === "SUCCESS") {
                // 拆分全部的数据
                var totalDta = res.data
                var cglzqData = []
                var cglz = []
                for (var i = 0; i < totalDta.length; i++) {
                    const item = totalDta[i]
                    if (item.attr === "智慧留置") {
                        cglzqData.push(item)
                    } else if (item.attr === "普通留置") {
                        cglz.push(item)
                    }
                }

                setcglzqData(cglzqData)

                setcgzxData(cglzqData)

                // this.setState({
                //     cglzqData: cglzqData,
                //     cgzxData: cglz
                // })
            }
        }).catch(error => {
        })
        // // 留置态势分析  已解除对象
        yjc().then(res => {
            if (res.msg === "SUCCESS") {

                setyjcData(res.data,)
                // this.setState({
                //     yjcData: res.data,
                // })
            }
        }).catch(error => {
        })
        // 内圈饼图
        nqbt().then(res => {
            if (res.msg === "SUCCESS") {
                var color = ['#00F5E3', "#FF6B54", '#00B1FF', '#00A86F', '#F4F83A', '#FF9C4E']
                var neceng = res.data
                //    var necengName=[]
                //    var necengValue=[]
                for (let index = 0; index < neceng.length; index++) {
                    var element = neceng[index];
                    element.push({
                        itemStyle: { color: color[index] }
                    })
                }
                setnqbtData(neceng)
                // this.setState({
                //     // nqbtData: res.data,
                //     nqbtData: neceng,
                // })
            }
        }).catch(error => {
        })
        //外圈饼图
        wqbt().then(res => {
            if (res.msg === "SUCCESS") {
                var color = ['#4B91F6', "#0076DA", '#008856', '#32A392', '#F4F83A', '#00799C']
                var neceng = res.data
                for (let index = 0; index < neceng.length; index++) {
                    var element = neceng[index];
                    element.push({
                        itemStyle: { color: color[index] }
                    })
                }
                setwqbtData(neceng)
                // this.setState({
                //     wqbtData: neceng,
                // })
            }
        }).catch(error => {
        })

        // 人员概况
        rygk().then(res => {
            if (res.msg === "SUCCESS") {
                setrygkData(res.data)

            }
        }).catch(error => {
        })
        // 看护力量
        khll().then(res => {
            if (res.msg === "SUCCESS") {
                setkhllData(res.data)
                // this.setState({
                //     khllData: res.data,
                // })
            }
        }).catch(error => {
        })
        // 武警饼图
        wjbt().then(res => {
            if (res.msg === "SUCCESS") {
                setwjbtData(res.data)
                // this.setState({
                //     wjbtData: res.data,
                // })
            }
        }).catch(error => {
        })
        // 特警饼图
        tjbt().then(res => {
            if (res.msg === "SUCCESS") {
                settjbtData(res.data)
                // this.setState({
                //     tjbtData: res.data,
                // })
            }
        }).catch(error => {
        })
    }
    // 定位的操作
    var  flag=false
    const NMdw = (item) => {
      
        switch (item) {
            
            case 1:
                var pos = {
                     x:-49790.984375,y:6229.2734375,z:4151.35107421875,pitch:18.84988021850586,yaw:-90.21843719482422,roll:-0.00042762281373143196
                };
                createMap.FlyToPosition(map, pos)
              
                break;
            case 2:
                var pos = {
                    x:-60267.1875,y:2254.06884765625,z:3742.784423828125,pitch:27.494932174682617,yaw:-89.56238555908203,roll:-0.00042541822767816484
                };
                createMap.FlyToPosition(map, pos)
              
                break;
            case 3:
                var pos = {
                    x:-70873.5234375,y:-5572.84423828125,z:3226.913818359375,pitch:14.999996185302734,yaw:-89.84342193603516,roll:-0.0004278034612070769
                };
                createMap.FlyToPosition(map, pos)
                break;
            case 4:
                var pos = {
                    x:-60354.56640625,y:-12672.6083984375,z:3926.86376953125,pitch:33.986656188964844,yaw:-89.56243896484375,roll:0.000051483770221238956
                }
                flag=true
                createMap.FlyToPosition(map, pos)
                Model.showModel(map,"FW_0",flag)
                break;
            case 5:
                var pos = {
                    x:-50663.6953125,y:-10446.08203125,z:3158.668212890625,pitch:22.07482147216797,yaw:-88.81202697753906,roll:0.00007462623034371063
                }
                createMap.FlyToPosition(map, pos)
                break;
            case 6:
                var pos = {
                    x:-34495.5234375,y:-12565.8154296875,z:2386.9072265625,pitch:24.381622314453125,yaw:-89.46861267089844,roll:0.00007405239011859521
                }
                createMap.FlyToPosition(map, pos)
                break;
            case 7:
                var pos = {
                    x:-68445.2421875,y:2297.602294921875,z:2298.486328125,pitch:21.010589599609375,yaw:-178.28135681152344,roll:0.00007428106619045138
                }
                createMap.FlyToPosition(map, pos)
                break;
            default:
                var pos = {
                    x:-70955.6328125,y:-4493.45947265625,z:2136.913818359375,pitch:24.305198669433594,yaw:-179.8128204345703,roll:0.0000729647945263423
                }
                flag=true
                createMap.FlyToPosition(map, pos)
                Model.showModel(map,"FW_1",flag)
        }

    }
 

    return (
        <Fragment>
            <div className="BasesituationList" style={{ color: "red" }}>
                {/* <header>
                            <h3>内蒙古自治区纪委监委清源山庄数据看板</h3>
                        </header> */}
                {/* 左边 */}
                <div className="BasesituationLeft">
                    {/* 第一快 */}
                    <div className="BasesituationOne">
                        <div className="titlelist">
                            <p>基地概况</p>
                        </div>
                        {/* <div className="titlecenter">
                                    <p><span style={{marginRight: "-20px", marginTop: "20px"}}>占地</span><span style={{ position: 'relative', left: "60px", top: "15px" }}>60m7亩</span></p>
                                    <p style={{ marginTop: "36px" }}><span style={{ marginRight: "-65px", marginTop: -18 }}>建筑面积</span><span style={{position: 'relative', left: "80px", top: -25 }}>5.23<a href="##" style={{ fontSize: "14px" }}>方平方米</a></span></p>
                                </div> */}
                        {
                            Object.keys(jdgkData).length > 0 ?
                                <div className="titlecenter">
                                    <p><span style={{ marginRight: "-20px", marginTop: "20px" }}>占地</span><span style={{ position: 'relative', left: "60px", top: "15px" }}>{jdgkData.covers}亩</span></p>
                                    <p style={{ marginTop: "36px" }}><span style={{ marginRight: "-65px", marginTop: -18 }}>建筑面积</span><span style={{ position: 'relative', left: "80px", top: -25 }}>{jdgkData.floor}<a href="##" style={{ fontSize: "14px" }}>方平方米</a></span></p>
                                </div> : <div className="titlecenter">
                                    <p><span style={{ marginRight: "-20px", marginTop: "20px" }}>占地</span><span style={{ position: 'relative', left: "60px", top: "15px" }}>607亩</span></p>
                                    <p style={{ marginTop: "36px" }}><span style={{ marginRight: "-65px", marginTop: -18 }}>建筑面积</span><span style={{ position: 'relative', left: "80px", top: -25 }}>5.23<a href="##" style={{ fontSize: "14px" }}>方平方米</a></span></p>
                                </div>

                        }
                        <div className="titlebottom">
                            <p>清远山庄功能区包括</p>
                            <ul>
                                <li onClick={() => NMdw(1)}>
                                    <i></i>
                                            综合指挥楼
                                        </li>
                                <li onClick={() => NMdw(2)}>
                                    <i></i>
                                        留置用房
                                        </li>   <li onClick={() => NMdw(3)}>
                                    <i></i>
                                        武警执勤楼
                                        </li>
                                <li  onClick={() => NMdw(4)}>  <i></i>
                                        后勤保障楼
                                        </li>
                                <li  onClick={() => NMdw(5)}>
                                    <i></i>
                                        综合办公楼
                                        </li>
                                <li  onClick={() => NMdw(6)}>
                                    <i></i>
                                        中心办公楼
                                        </li>
                                <li  onClick={() => NMdw(7)}>
                                    <i></i>
                                        特警执勤楼
                                        </li>
                                <li  onClick={() => NMdw(8)}>
                                    <i></i>
                                        体能训练馆
                                        </li>

                            </ul>

                        </div>
                    </div>
                    {/* 第二块 */}
                    <div className="BasesituationTwo">
                        <div className="titlelist">
                            <p>管理服务人员配置</p>
                        </div>
                        <div>
                            {
                                //   rygkData.length>0?
                                Object.keys(rygkData).length > 0 ?
                                    <div className="twobackgrounde">

                                        <p className="b">
                                            <li>{rygkData.supportNum}</li>
                                            <li>后勤人数</li>
                                        </p>
                                        <p className="b1">
                                            <li>{rygkData.guardNum}</li>
                                            <p>看护人数</p>
                                        </p>
                                        <p className="b2">
                                            <li>{rygkData.medicalWorkersNum}</li>
                                            <li>医护人数</li>
                                        </p>
                                        <p className="b3">
                                            <li>{rygkData.invesGroupPeopleNum}</li>
                                            <li>专案组</li>
                                        </p>
                                        <p className="b4">
                                            <li>{rygkData.educationNum}</li>
                                            <li>廉政教育</li>
                                            <li>中心人数</li>
                                        </p>
                                    </div> :
                                    <div className="twobackgrounde">
                                        <p className="b">
                                            <li>22</li>
                                            <li>后勤人数</li>
                                        </p>
                                        <p className="b1">
                                            <li>12</li>
                                            <p>看护人数</p>
                                        </p>
                                        <p className="b2"><li>16</li>
                                            <li>医护人数</li>
                                        </p>
                                        <p className="b3">
                                            <li>10</li>
                                            <li>专案组</li>
                                        </p>
                                        <p className="b4">
                                            <li>20</li>
                                            <li>廉政教育</li>
                                            <li>中心人数</li>
                                        </p>
                                    </div>
                            }
                        </div>

                    </div>
                    {/* 第三块 */}
                    <div className="BasesituationThreeya">
                        <div className="titlelist">
                            <p>看护力量分布</p>
                        </div>
                        {
                            Object.keys(khllData).length > 0 ? <div className="police">
                                <div><p><span>武警看护对象</span><span>{khllData.policeTotal}</span></p></div>
                                <div><p><span>特警看护对象</span><span>{khllData.swatTotal}</span></p></div>
                            </div> : <div className="police">
                                <div><p><span>武警看护对象</span><span>24</span></p></div>
                                <div><p><span>特警看护对象</span><span>18</span></p></div>
                            </div>
                        }
                        <div className="picture">
                            <div></div>
                            <div></div>
                        </div>
                        {

                            Object.keys(khllData).length > 0 ? <div className="yihuzu">
                                <p><span>医护组</span></p>
                                <div className="divlist">
                                    <div>
                                        <ul>
                                            <li><span>医生</span><span style={{ paddingLeft: "15px" }}>{khllData.doctor}名</span></li>
                                            <li><span>护士</span><span style={{ paddingLeft: "15px" }}>{khllData.nurse}名</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li><span>救护车</span><span style={{ paddingLeft: "20px", color: "color: #E2FFFF;" }}>{khllData.ambulance}辆</span></li>
                                            <li><span>急救设备</span><span style={{ paddingLeft: "20px", color: "color: #E2FFFF;" }}>{khllData.equipment}台</span></li>
                                        </ul>
                                    </div>

                                </div>
                            </div> : <div className="yihuzu">
                                <p><span>医护组</span></p>
                                <div className="divlist">
                                    <div>
                                        <ul>
                                            <li><span>医生</span><span style={{ paddingLeft: "15px" }}>2名</span></li>
                                            <li><span>护士</span><span style={{ paddingLeft: "15px" }}>1名</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li><span>救护车</span><span style={{ paddingLeft: "20px", color: "color: #E2FFFF;" }}>2名</span></li>
                                            <li><span>急救设备</span><span style={{ paddingLeft: "20px", color: "color: #E2FFFF;" }}>1名</span></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        }
                    </div>

                </div>
           
                <footer>

                </footer>
            </div>
        </Fragment>
    );
}



export default Basesituation;