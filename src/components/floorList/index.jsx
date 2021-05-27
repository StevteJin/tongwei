import React, { useState, useEffect, useLayoutEffect, Fragment, useRef } from 'react';
import { useMappedState } from 'redux-react-hook';
import { message } from 'antd';
import { labelList, cameraList_S, roomDetails, roomUserSutation, roomCamera, roomPeople, geangenz,rttz } from '../../api/mainApi';
import { Build, Model, createMap } from '../../utils/map3d';
import { Common } from '../../utils/mapMethods'
import { videoPlay } from '../../utils/untils'
import './style.scss';
// // import {ZHZHL} from '../../assets/images/video/zhzhl.mp4';
import * as echarts from 'echarts';
// import 'echarts/lib/chart/line';
import { LineChart } from 'echarts/charts';
echarts.use(LineChart);
const FloorList = () => {
    const map = useMappedState(state => state.map3d_light);
    const [flList, setFlist] = useState(["一层", "二层", "三层", "四层", "五层", "六层", "七层"])
    const [count, setCount] = useState()
    const [show, setShow] = useState(false)
    const [showVideo, setVideo] = useState(false) // 视频展示
    const [buildData, setBdata] = useState({ build_name: { name: "默认" } })
    const [roomCode, setroomCode] = useState({}) // 房间编码
    const [isShow, setShowR] = useState(false) // 人员概况
    const [chuangdian, setCD] = useState(true) // 床垫的展示
    const [xinlv, setXL] = useState([19,20,21,22,23,24,25,26]) //心率数据
    const [huxi, setHX] = useState([19,20,21,22,23,24,25,26]) //心率数据
    const [videoUrl, setVideoUrl] = useState()
    //根据留置房间编码获取留置人员信息
    const [cameraList, setcameraList] = useState([
    ])//房间相机列表
    const [peopleList, setPeopleList] = useState({
        "caseName": "20210429案",  //案件名称(展示)
        "caseNo": "AJ2021040006",  //案件编号(不用展示)
        "detainIndexCode": "894781db60124f78bbf63633cbdde997",  //留置编号(不用展示)
        "groupIndexCode": "0acf2f54d13c4beab99e5ede96f160b9", //办案组编号 (不用展示)
        "groupName": "20210507调查组1", //办案组名称(展示)
        "riskUrl": "http://.......",  //风险页面调整地址(目前无法获取数据,页面使用静态地址)
        "riskTokenUrl": "http://10.19.132.27:8001/bic/ssoService/v1/tokenLogin?token=ST-67834-f1oHgJsgvqRgUPJ5Bwza-cas&service=https%3A%2F%2F10.19.132.27%2Fctm01sra-web%2F%23%2Frisk-assessment",
        "roomName": "003留置室",  //留置室名称(需要展示)
        "sex": "男",  //性别(展示)
        "suspectName": "测试1", //留置人员名称(不用展示)
        "suspectNo": "123" //留置人员代号(需要展示)
    })//房间人员列表
    const [everythings, setEverything] = useState([])
    const isClick = useRef(false)//同步进行延迟处理
    const dataRef = useRef({})//同步进行延迟处理
    const [PolygonList, setPolygonList] = useState([])
    //关闭分层
    const closeFloor = (maps, data) => {
        var floorh2 = []
        data.floor_name.forEach(element => { floorh2.push(element.floor_id.split("#")[1]) });
        Build.showFloor(maps, data.build_name.build_id, "all", floorh2);
        Model.closeIcon(map);
    }
    useEffect(() => {
        cameraList_S({ device_code: "" }).then(res => {
            if (res.msg === "success") {
                var shinei = []
                res.data.forEach(element => {
                    if (element.indoor) {
                        shinei.push(element)
                    }
                })
                setEverything(shinei)
            }
        })

    }, []);
    const closeVideo = () => {
        setVideo(false)
    }
    const NMdw = (item) => {
        switch (item) {
            case "V001_JZ0013":
                var pos = {
                    // "x":-60339.5703125,"y":-12712.2734375,"z":4022.438720703125,"pitch":32.9999885559082,"yaw":-89,"roll":0.0000020360164398880443
                    x: -49790.984375, y: 6229.2734375, z: 4151.35107421875, pitch: 18.84988021850586, yaw: -90.21843719482422, roll: -0.00042762281373143196
                };
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            case "V001_JZ0001":
                var pos = {
                    x: -60267.1875, y: 2254.06884765625, z: 3742.784423828125, pitch: 27.494932174682617, yaw: -89.56238555908203, roll: -0.00042541822767816484
                };
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            case "V001_JZ0005":
                var pos = {
                    x: -70873.5234375, y: -5572.84423828125, z: 3226.913818359375, pitch: 14.999996185302734, yaw: -89.84342193603516, roll: -0.0004278034612070769
                };
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            case "V001_JZ0003":
                var pos = {
                    x: -60339.5703125, y: -12712.2734375, z: 4022.438720703125, pitch: 32.9999885559082, yaw: -89, roll: 0.0000020360164398880443
                    // x:-60354.56640625,y:-12672.6083984375,z:3926.86376953125,pitch:33.986656188964844,yaw:-89.56243896484375,roll:0.000051483770221238956
                }
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            case "V001_JZ0008":
                var pos = {
                    x: -50663.6953125, y: -10446.08203125, z: 3158.668212890625, pitch: 22.07482147216797, yaw: -88.81202697753906, roll: 0.00007462623034371063
                }
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            case "V001_JZ0017":
                var pos = {
                    x: -34495.5234375, y: -12565.8154296875, z: 2386.9072265625, pitch: 24.381622314453125, yaw: -89.46861267089844, roll: 0.00007405239011859521
                }
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            case "V001_JZ0007":
                var pos = {
                    x: -68445.2421875, y: 2297.602294921875, z: 2298.486328125, pitch: 21.010589599609375, yaw: -178.28135681152344, roll: 0.00007428106619045138
                }
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;

            case "V001_JZ0006":
                var pos = {
                    x: -70955.6328125, y: -4493.45947265625, z: 2136.913818359375, pitch: 24.305198669433594, yaw: -179.8128204345703, roll: 0.0000729647945263423
                }
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            case "V001_JZ0011":
                // 左边第一个综合办公楼
                var pos = {
                    // x:-70955.6328125,y:-4493.45947265625,z:2136.913818359375,pitch:24.305198669433594,yaw:-179.8128204345703,roll:0.0000729647945263423
                    // x:-51743.22265625,y:-16313.0009765625,z:1464.7950439453125,pitch:0,yaw:0,roll:0
                    x: -52030.87890625, y: -12690.9716796875, z: 1653.9915771484375, pitch: 17.99999237060547, yaw: -90.00000762939453, roll: 0.0002504612784832716
                }
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            case "V001_JZ0012":
                var pos = {
                    // x:-70955.6328125,y:-4493.45947265625,z:2136.913818359375,pitch:24.305198669433594,yaw:-179.8128204345703,roll:0.0000729647945263423
                    // x:-47234.14453125,y:-16312,z:1440.6536865234375,pitch:0,yaw:0,roll:0
                    x: -47603.03125, y: -13496.4609375, z: 1335.677490234375, pitch: 20.600006103515625, yaw: -92.848876953125, roll: 0.0002535619423724711
                }
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            case "V001_JZ0022":
                var pos = {
                    // x:-70955.6328125,y:-4493.45947265625,z:2136.913818359375,pitch:24.305198669433594,yaw:-179.8128204345703,roll:0.0000729647945263423
                    x: 5136.9755859375, y: 2272.5390625, z: 5583.8141479492188, pitch: 23.700645446777344, yaw: -90.93480682373047, roll: 0.000042891108023468405                    //x:-50663.6953125,y:-10446.08203125,z:3158.668212890625,pitch:22.07482147216797,yaw:-88.81202697753906,roll:0.00007462623034371063

                    //x:-47603.03125,y:-13496.4609375,z:1335.677490234375,pitch:20.600006103515625,yaw:-92.848876953125,roll:0.0002535619423724711
                }
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            case "V001_JZ0021":
                var pos = {
                    // x:-70955.6328125,y:-4493.45947265625,z:2136.913818359375,pitch:24.305198669433594,yaw:-179.8128204345703,roll:0.0000729647945263423
                    x: -15367.9755859375, y: 7272.5390625, z: 5583.8141479492188, pitch: 23.700645446777344, yaw: -90.93480682373047, roll: 0.000042891108023468405                    //x:-50663.6953125,y:-10446.08203125,z:3158.668212890625,pitch:22.07482147216797,yaw:-88.81202697753906,roll:0.00007462623034371063

                    //x:-47603.03125,y:-13496.4609375,z:1335.677490234375,pitch:20.600006103515625,yaw:-92.848876953125,roll:0.0002535619423724711
                }
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            case "V001_JZ0016":
                var pos = {
                    x: -34106.48828125, y: -13003.65625, z: 1663.4490966796875, pitch: 25.276357650756836, yaw: -85.84363555908203, roll: 0.00002266007140860893
                }
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)
                break;
            default:
                var pos = {
                    x: -70955.6328125, y: -4493.45947265625, z: 2136.913818359375, pitch: 24.305198669433594, yaw: -179.8128204345703, roll: 0.0000729647945263423
                }
                createMap.FlyToPosition(map, pos)
                createMap.closeWkWang(map)
                Model.showModel(map, "FW_" + item + "_WK", true)

        }

    }
    const getModelhandle = (mp) => {
        window.receiveMessageFromIndex = function (e) {
            if (e !== undefined) {
                switch (e.data.switchName) {
                    case 'buildLable':
                        console.log('点击了建筑牌子')
                        console.log(e.data, e.data.Personnel)
                        setVideoUrl(e.data.Personnel)
                        console.log(videoUrl)
                        console.log(e.data.Personnel)
                        if (e.data.SPJK === undefined) {
                            setVideo(true)
                            NMdw(e.data.Personnel)
                        } else {
                            setVideo(false)
                        }
                        labelList({ build_id: e.data.Personnel }).then(res => {
                            if (res.msg === "success") {
                                if (res.data[0].floor_name.length > 0) {
                                    setShow(true)
                                }
                                setBdata(res.data[0])
                                setFlist(res.data[0].floor_name)
                                isClick.current = true;
                                dataRef.current = res.data[0];
                            }
                        })
                        // setShow(true)


                        //"FW_V001_JZ0013_WK"
                        //createMap.FlyToPosition(map, pos)
                        //监听相机模型事件触发楼层列表下标
                        if (e.data.index) {
                            setCount(e.data.index - 1)
                        }
                        else {
                            Build.allShow(mp, true)
                            Model.showModel(map, "FW_" + e.data.Personnel + "_WK", true)
                        }
                        break;
                    case 'ImagePC':
                        var Code = e.data.Personnel.gid;
                        var location=e.data.Personnel.location;
                         location.z=location.z+600;

                         location.pitch=86.30825805664062
                         location.roll=0
                         location.yaw=-90
                         //"pitch":86.30825805664062,"yaw":-87.37269592285156,"roll":0.0006099470774643123
                        // console.log(e.data.Personnel.location)
                        // console.log(e.data, Code);
                        Code = Code.slice(2);
                        setroomCode(Code)
                        setShowR(true)
                        roomCamera({ roomIndexCode: Code }).then(res => {
                            if (res.msg === "SUCCESS") {
                                console.log(res.data)
                                setcameraList(res.data)
                            } else {
                                message.error("接口请求失败")
                            }
                        })
                        //  setCD(true)
                        //  zx()
                        //  hx()
                        roomPeople({ roomIndexCode: Code }).then(res => {
                            if (res.msg === "SUCCESS") {
                                //setPeopleList(res.data)
                            } else {
                                message.error("接口请求失败")
                            }
                        })
                  
                        rttz({ roomIndexCode: Code }).then(res => {
                            if (res.msg === "SUCCESS") {
                                // console.log(res.data)
                                var xinxu=[]
                                var hux=[]
                                for(var i=0;i<res.data.length;i++){
                                    const item=res.data[i]
                                    xinxu.push(item.heartRatePerSec)
                                    hux.push(item.breathRatePerSec)
                                }
                                setPeopleList(res.data)
                                setXL(xinlv)
                                setHX(hux)
                            } else {
                                message.error("接口请求失败")
                            }
                        })
                        createMap.FlyToPosition(map, location)
                        setShowR(true)

                        break;
                    default:
                        return null;
                }
            }
        }
        //监听message事件
        window.addEventListener("message", window.receiveMessageFromIndex, false);
    }

    const zx = () => {
        var chartDom = document.getElementById('zx');
        var myChart = echarts.init(chartDom);
        var option = {
            // legend: {
            //     icon: 'rectangle',
            //     data: ['心率'],
            //     right: '4%',
            //     textStyle: {
            //         fontSize: 12,
            //         color: '#666'
            //     }
            // },
            legend: {
                data: ['心率'],
                x:'left',      //可设定图例在左、右、居中
                //y:'center',     //可设定图例在上、下、居中
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: "#fff"   //这里用参数代替了
                    }
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#D3FAFB"   //这里用参数代替了
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#358E96'],
                        width: 1,
                        type: 'dotted'
                    }
                }
            },
            grid: {
                top: '20%',   // 等价于 y: '16%'
                left: '3%',
                right: '8%',
                bottom: '20%',
                containLabel: true
            },
            series: [
                {
                    name: '心率',
                    type: 'line',
                    stack: '总量',
                    data:xinlv,
                    lineStyle: {
                        normal: {
                            color: '#EFD76F',
                            width: 2,
                            type: 'solid'
                        }
                    }
                }
            ]
        };
        option && myChart.setOption(option);

    }
    const hx = () => {
        var chartDom = document.getElementById('hx');
        var myChart = echarts.init(chartDom);
        var option = {

            legend: {
                data: ['呼吸'],
                x:'left',      //可设定图例在左、右、居中
                y:'top',     //可设定图例在上、下、居中
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: "#fff"   //这里用参数代替了
                    }
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#D3FAFB"   //这里用参数代替了
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#358E96'],
                        width: 1,
                        type: 'dotted'
                    }
                },
            },
            grid: {
                top: '20%',   // 等价于 y: '16%'
                left: '3%',
                right: '8%',
                bottom: '4%',
                containLabel: true
            },
            // series: [{
            //     data: [150, 230, 224, 218, 135, 147, 260],
            //     type: 'line',
            //     lineStyle: {
            //         normal: {
            //             color: '#EFD76F',
            //             width: 2,
            //             type: 'solid'
            //         }
            //     },
            // }]
            series: [
                {
                    name: '呼吸',
                    type: 'line',
                    stack: '总量',
                    data: huxi,
                    lineStyle: {
                        normal: {
                            color: '#EFD76F',
                            width: 2,
                            type: 'solid'
                        }
                    }
                }
            ]
        };
        option && myChart.setOption(option);

    }
    useLayoutEffect(() => {
        if (!(Object.keys(map).length === 0)) {
            getModelhandle(map)
        }
          zx()
          hx()
        // eslint-disable-next-line
    }, [map]);
    //点击楼层
    const handleFloor = (item, index) => {
        setVideo(false)
        Model.closeIcon(map);
        setCount(index)
        if (PolygonList.length > 0) {
            PolygonList.forEach((element) => {
                Model.updatePolygon(map, element.positions, element.positions.style)
            })
        }
        //createMap.closeAll(map)   ---李帆帆隐藏解决点位不显示
        Model.showModel(map, "FW" + buildData.build_name.build_id + "Hk", true)
        //根据留置房间编码获取留置人员信息

        // Common.mapFly(map,res.data[0].positions.center)
        //获取房间详情
        roomDetails({ buil: buildData.build_name.build_id, floor_id: item.floor_id }).then(res => {

            if (res.msg === "success") {
                setPolygonList(res.data)
                // Common.mapFly(map,res.data[0].positions.center)
                if (res.data.length > 0) {
                    const MapData = res.data;
                    // "x":-59192.69921875,"y":-13638.181640625,"z":270.97705078125,"pitch":73.9736099243164,"yaw":-89.40680694580078,"roll":0.0001113294274546206
                    var pos = {
                        // x: Common.filter(Model.calculateCenterPoint(MapData[0].positions.points).x-300),
                        // y: Common.filter(Model.calculateCenterPoint(MapData[0].positions.points).y+300),
                        // z: Common.filter(Model.calculateCenterPoint(MapData[0].positions.points).z)+1000,
                        // pitch: Common.filter(MapData[0].positions.points[1].pitch)+40,
                        // yaw: Common.filter(MapData[0].positions.points[1].yaw),
                        // roll: Common.filter(MapData[0].positions.points[1].roll)
                        x: -59214.91796875, y: -12301.34375, z: 4972.9052734375, pitch: 72.9999771118164, yaw: -88.9999771118164, roll: 0

                    }
                    createMap.FlyToPosition(map, pos)
                    //var roomData = []
                    for (var i = 0; i < MapData.length; i++) {
                        const item = MapData[i]
                        const json = {
                            typeStyle: 'shiyongzhong',//shiyongzhong_Mat,menjin_icon
                            gid: "T_" + MapData[i].room_code,
                            location: {
                                x: Common.filter(Model.calculateCenterPoint(MapData[i].positions.points).x),
                                y: Common.filter(Model.calculateCenterPoint(MapData[i].positions.points).y),
                                z: Common.filter(Model.calculateCenterPoint(MapData[i].positions.points).z),
                                pitch: Common.filter(MapData[i].positions.points[1].pitch),
                                yaw: Common.filter(MapData[i].positions.points[1].yaw),
                                roll: Common.filter(MapData[i].positions.points[1].roll)
                            }
                        }
                        Model.createIconTwo(map, json)
                    }

                    //console.log(Model.calculateCenterPoint(MapData[0].positions.points).x)
                    // roomUserSutation().then(res => {
                    //     if (res.msg === "SUCCESS") {
                    //         roomData = res.data
                    //         if (roomData.length > 0) {
                    //             for (let index = 0; index < MapData.length; index++) {
                    //                 const item = MapData[index]

                    //                 for (var k = 0; k < roomData.length; k++) {
                    //                     const element = roomData[k]
                    //                     if (item.room_code === element.roomIndexCode) {
                    //                         if (element.roomStatus === '1') {
                    //                             // 取中心点坐标
                    //                             const json = {
                    //                                 typeStyle: 'shiyongzhong',//shiyongzhong_Mat,menjin_icon
                    //                                 gid: "T_" + item.room_code,
                    //                                 location: {
                    //                                     x: Common.filter(Model.calculateCenterPoint(item.positions.points).x),
                    //                                     y: Common.filter(Model.calculateCenterPoint(item.positions.points).y),
                    //                                     z: Common.filter(Model.calculateCenterPoint(item.positions.points).z),
                    //                                     pitch: Common.filter(item.positions.points[1].pitch),
                    //                                     yaw: Common.filter(item.positions.points[1].yaw),
                    //                                     roll: Common.filter(item.positions.points[1].roll)
                    //                                 }
                    //                             }
                    //                             Model.createIconTwo(map, json)
                    //                         } else {
                    //                             const json = {
                    //                                 typeStyle: 'weishiyong',//shiyongzhong_Mat,menjin_icon
                    //                                 gid: "T_" + item.room_code,
                    //                                 location: {
                    //                                     x: Common.filter(item.positions.points[1].x),
                    //                                     y: Common.filter(item.positions.points[1].y),
                    //                                     z: Common.filter(item.positions.points[2].z),
                    //                                     pitch: Common.filter(item.positions.points[1].pitch),
                    //                                     yaw: Common.filter(item.positions.points[1].yaw),
                    //                                     roll: Common.filter(item.positions.points[1].roll)
                    //                                 }
                    //                             }
                    //                             Model.createIconTwo(map, json)
                    //                         }
                    //                     }

                    //                 }
                    //             }
                    //         } else {
                    //             message.error("暂无房间信息");
                    //         }
                    //     }
                    // }).catch(error => {
                    //     console.info("接口请求失败")
                    // })

                    //Common.mapFly(map,MapData[0].positions.center);

                }
            }
        })
        //分层
        var floorh = []
        buildData.floor_name.forEach(element => { floorh.push(element.floor_id.split("#")[1]) });
        Build.showFloor(map, buildData.build_name.build_id, item.floor_id.split("#")[1], floorh)
        //模型分层显示
        everythings.forEach(element => {
            if (element.floor_id === item.floor_id) {
                Model.showModel(map, element.model_url, true)
            } else {
                Model.showModel(map, element.model_url, false)
            }
        });
    }
    //关闭楼层
    const closeFloorList = () => {
        setShow(false);
        setVideo(false)
        setShowR(false)
        setCD(false)
        closeFloor(map, buildData)
        createMap.closeWkWang(map)
        if (PolygonList.length > 0) {
            PolygonList.forEach((element) => {
                Model.updatePolygon(map, element.positions, element.positions.style)
            })
        }
    }


    // 关闭监控点

    const closePanelList = () => {
        setShowR(false)
    }
    // 转到风险评估模型
    const ToDangermodel = () => {
        var url = peopleList.riskTokenUrl
        if (url) {
            window.open(url, '_blank');
        } else {
            window.open("http://www.ruiwen.com/wenxue/juzi/508106.html", '_blank');
        }

    }
    //打开视频控件
    const goVideo = (item) => {
        var playInfo = {
            device_code: item.cameraIndexCode,
            device_name: item.cameraName
        }
        if (item) {
            videoPlay(playInfo)
        }
    }
    return (
        <Fragment>
            {
                show ? <div id="floorList">
                    <div className="fl_title">
                        <span>{buildData.build_name.name}</span>
                        <img src={require("../../assets/images/closeBtn.png").default} alt="" onClick={() => closeFloorList()} />
                    </div>
                    <div className="fl_content">
                        <ul>
                            {flList.map((item, index) => {
                                return (
                                    <li key={index} className={count === index ? "acitve" : null} onClick={() => handleFloor(item, index)}>{item.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div> : null
            }
            {
                isShow ?
                    <div className="CommissionContent0" >
                        <div className="CommissionContentone">
                            <div className="dangerous">
                                <p>人员概况</p>
                            </div>
                            <div className="dangerous">
                                <p onClick={() => ToDangermodel()}>转到风险评估模型</p>
                            </div>
                            <div className="duixiang">
                                <div>
                                    <ul>
                                        <li><i className="icon1"></i>对象代号 <span>{peopleList.suspectNo}</span></li>
                                        <li><i className="icon1"></i>调查组 <span>{peopleList.groupName}</span></li>
                                        <li><i className="icon1"></i>案件名称 <span>{peopleList.caseName}</span></li>
                                    </ul>
                                </div>
                                <div >
                                    <ul>
                                        <li><i className="icon1"></i>留置室 <span>{peopleList.roomName}</span></li>
                                        <li><i className="icon1"></i>性别 <span>{peopleList.sex}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="CommissionContenttwo" style={{ display: "none" }}>
                            <div className="titles">
                                <p>查看房间摄像头</p>
                            </div>
                            {/* <div className="shext">
                            <p><span>摄像头</span></p>
                            <p><span>操作</span></p>
                        </div> */}
                            <ul>
                                {/* <li>
                                    <p>摄像头1</p>
                                    <p>点击播放</p>
                                </li> */}
                                {cameraList.map((item, index) => {
                                    return (
                                        <li>
                                            <i></i>
                                            <p>{item.cameraName}</p>
                                            <p>播放</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="CommissionContentclose">
                            <img src={require("../../assets/images/closeBtn.png").default} alt="" onClick={() => closePanelList()} />
                        </div>
                    </div>
                    : null
            }

            {
                showVideo ?
                    <div className="VideoChange">
                        <img src={require("../../assets/images/closeBtn.png").default} alt="" onClick={() => closeVideo()} />
                        <video controls='controls' autoplay='autoplay' style={{ width: '600px', height: '500px', marginLeft: "0px" }}>
                            {/*                        <source src={require('../../assets/images/video/zhzhl.mp4').default} type="video/mp4"/> */}
                            <source src={require("../../assets/images/video/" + videoUrl + ".mp4").default} type="video/mp4" />
                        </video>
                    </div> : null
            }

            {
                chuangdian ?
                    <div className="chuaangdian">
                        <div className="Ctitle">
                            <div className="left">检测对象</div>
                            <div className="right">514专案一号目标</div>
                        </div>
                        <div className="zx" id="zx">

                        </div>
                        <div className="hx" id="hx"></div>
                    </div> : null
            }
        </Fragment>


    )
}

export default FloorList;