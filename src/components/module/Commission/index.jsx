import React, { Component, Fragment } from 'react';
import './index.scss'
import { yearSex, banComgary, yearSexIn, yearSexOut, Sutation, talkSutation, talkSuation,roomList, talkSuationList,
In, Out, runSuation, Zinstrouct, zProduct, zx, runSuationCount, runSuationZX ,lz1qgk,lzsqk,historyCase,roomCamera,roomPeople,
moreKanhu,geangenz,lzTypeNum} from '../../../api/mainApi'
// import img from '../../../assets/images/ios2/left/left (16).png'
// import img1 from '../../../assets/images/ios2/left/left (7).png'
// import img2 from '../../../assets/images/ios2/left/left (8).png'
import * as echarts from 'echarts/lib/echarts'
// 水波图
import 'echarts-liquidfill'
// 引入柱状图
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
//插件
import 'echarts/lib/chart/candlestick';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/dataset';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/grid';
class Commission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banan: [
                { groupName: "xx办案组", detainNum: 36, groupleader: "www", groupSafety: "孙雨", deptName: "XX部门" },
                { groupName: "xx办案组", detainNum: 36, groupleader: "王小虎", groupSafety: "孙雨", deptName: "XX部门" },
                { groupName: "xx办案组", detainNum: 36, groupleader: "王小虎", groupSafety: "孙雨", deptName: "XX部门" },
                { groupName: "xx办案组", detainNum: 36, groupleader: "王小虎", groupSafety: "孙雨", deptName: "XX部门" },
                { groupName: "xx办案组", detainNum: 36, groupleader: "王小虎", groupSafety: "孙雨", deptName: "XX部门" },
                { groupName: "重案组", detainNum: 12, groupleader: "罗大佑", groupSafety: "雨夹雪", deptName: "稽查科" },
            ],
            // talkromm:[
            //     {name:"谈话室1",num:4,time:"23分钟" },
            //     {name:"谈话室2",num:2,time:"39分钟" },
            //     {name:"谈话室1",num:4,time:"23分钟" },
            //     {name:"谈话室2",num:2,time:"39分钟" },

            // ],
            talkqk: [
                { roomName: "谈话室1", suspectName: "2021001-A", status: "正常", time: "160分钟" },
                { roomName: "谈话室1", suspectName: "2021001-A", status: "正常", time: "160分钟" },
                { roomName: "谈话室1", suspectName: "2021001-A", status: "正常", time: "160分钟" },
                { roomName: "谈话室1", suspectName: "2021001-A", status: "正常", time: "160分钟" },
            ],
            yearSexData: {
                "ageNum31To40": "0",
                "ageNum41To50": "0",
                "ageNum51To60": "0",
                "ageNumAbove60": "0",
                "ageNumUnder30": "0",
                "agePercent31To40": "0",
                "agePercent41To50": "0",
                "agePercent51To60": "0",
                "agePercentAbove60": "0",
                "agePercentUnder30": "0",
                "jobGrade3Num": "0",
                "jobGrade3Percent": "0",
                "jobGrade4Num": "0",
                "jobGrade4Percent": "0",
                "jobGrade5Num": "0",
                "jobGrade5Percent": "0",
                "jobGradeOtherNum": "2",
                "jobGradeOtherPercent": "100",
                "menNum": "2", //男性人数
                "menPercent": "100",
                "totalNum": "2",
                "womenNum": "0", //女性人数
                "womenPercent": "0"
            },// 本年度
           
            
            yearIn: [
                {
                    "attr": "留置人员年龄饼图",
                    "name": "60以下",
                    "value": 14
                },
                {
                    "attr": "留置人员年龄饼图",
                    "name": "40-60",
                    "value": 14
                },
                {
                    "attr": "留置人员年龄饼图",
                    "name": "41以上",
                    "value": 14
                },
              
            ], // 本年度内
            name:["30及以下","31-40","41-50","51-60","60以上"],
            
            yearOut: [],// 本年度外
            //banComgaryData:[],// 办案组概况
            talkSuationData: {},// 谈话情况
            lz1qgkData:{
                "detainNum": "6",  //在办案件数量
                "mindRoomFreeNum": "14", //智慧留置房间空闲中数量
                "mindRoomTotalNum": "14", //智慧留置房间总数
                "mindRoomUseNum": "0",  //智慧留置房间使用中数量
                "mindRoomUsePercent": "0", //智慧留置房间使用率--只保留整数部分
                "ordinaryRoomFreeNum": "46",   //普通留置房间空闲中数量
                "ordinaryRoomTotalNum": "50",   //普通留置房间总数
                "ordinaryRoomUseNum": "2",  //普通留置房间使用中数量
                "ordinaryRoomUsePercent": "0", //普通留置房间使用率--只保留整数部分
                "roomTotalNum": "6"  //留置室总数
            },
          
            lzsqkData:{
                "ordinaryRoomFreeNum": "3", //空闲数量
                "ordinaryRoomTotalNum": "5", //房间总数
                "ordinaryRoomUseNum": "2",  //使用数量
                "usePercent": "40"  //使用百分比—只保留整数
            },
            historyCaseData:{
                "value": "2"
            },
            // 留置区概况
            //talkSuationListData:[],// 谈话情况列表
            inData: [
                {
                    "personName": "张三",   //人员姓名
                    "entryFacePhotoUrl": "http://10.19.132.12/img.jpg",   //入区抓拍照片
                    "entryTime": "2020-08-18 20:16:36"   //入区时间
                },
                {
                    "personName": "张三",//人员姓名
                    "entryFacePhotoUrl": "http://10.19.132.12/img.jpg", //入区抓拍照片
                    "entryTime": "2020-08-18 20:16:36"//入区时间
                },
                {
                    "personName": "张三",//人员姓名
                    "entryFacePhotoUrl": "http://10.19.132.12/img.jpg", //入区抓拍照片
                    "entryTime": "2020-08-18 20:16:36"//入区时间
                },
                {
                    "personName": "张三",//人员姓名
                    "entryFacePhotoUrl": "http://10.19.132.12/img.jpg", //入区抓拍照片
                    "entryTime": "2020-08-18 20:16:36"//入区时间
                },
                {
                    "personName": "张三",//人员姓名
                    "entryFacePhotoUrl": "http://10.19.132.12/img.jpg", //入区抓拍照片
                    "entryTime": "2020-08-18 20:16:36"//入区时间
                }
            ], // 滞留人员入
            outData: [
                {
                    "personName": "张三",   //人员姓名
                    "exitFacePhotoUrl": "http://10.19.132.12/img.jpg",  //出区抓拍照片
                    "exitTime": "2020-08-18 20:16:36" //出区时间
                },
                {
                    "personName": "张三",//人员姓名
                    "exitFacePhotoUrl": "http://10.19.132.12/img.jpg",  //出区抓拍照片
                    "exitTime": "2020-08-18 20:16:36"//出区时间
                }
            ],// 滞留人员出
            talkSutationData: {
                "roomFreeNum": "8",
                "roomTotalNum": "8",
                "roomUseNum": "0",
                "usePercent": "0"
            },  //谈话室数
            useSutationData: {
                "detainPeopleAveDay": "7", //留置人员入住平均天数(只保留整数部分)
                "detainPeopleMaxDay": "7", //智慧留置人员入住最长天数(每留置24小时为1天)
                "detainPeopleMinDay": "7", //留置人员入住最短天数(每留置24小时为1天)
                "detainRoomFreeNum": "3",  //留置房间空闲数
                "detainRoomTotalNum": "6",  //留置房间总数
                "detainRoomUseNum": "3",  //留置房间使用中
                "mindDetainPeopleAveDay": "0", //智慧留置人员入住平均天数(只保留整数部分)
                "mindDetainPeopleMaxDay": "0",  //智慧留置人员入住最长天数(每留置24小时为1天)
                "mindDetainPeopleMinDay": "0" //智慧留置人员入住最短天数(每留置24小时为1天)
            }, // 留置区使用情况
            runSuationData: {
                "mindRoomFreeNum": "0",  //智慧留置房间空闲中数量
                "mindRoomTotalNum": "1",    //智慧留置房间总数
                "mindRoomUseNum": "1",   //智慧留置房间使用中数量
                "usePercent": "100"    //智慧留置房间使用率--只保留整数部分
            },// 运行态势
            runSuationCountData: {},// 运行态势总人数
            runSuationZXData: [],// 运行态势折线
            ZinstrouctData:
                [
                    {
                        "alermInfo": "如厕超时",
                        "alermTime": "2021-05-06 21:45:12",
                        "roomName": "留置室1"
                    },
                    {
                        "alermInfo": "离床",
                        "alermTime": "2021-05-06 21:43:43",
                        "roomName": "留置室2"
                    },
                    {
                        "alermInfo": "举手",
                        "alermTime": "2021-05-06 21:42:22",
                        "roomName": "留置室3"
                    },
                    {
                        "alermInfo": "睡觉面朝墙",
                        "alermTime": "2021-05-06 21:38:09",
                        "roomName": "留置室4"
                    }
                ],
            // 滞留预警
            zProductData: {
                "value": "504"
            },// 滞留成本
            zxData: [],//总节省看护人次接口地址
            roomCameraData:[
                {
                    "cameraIndexCode": "94474179aaef4e3d83a5ffca3df1b3a6", //监控点编号
                    "cameraName": "示证通道02", //监控点名称
                    "cameraUseageMark": "monitoringUseage.2",  //监控点用途标签，见附录F.监控点用途（cameraUseageMark）
                    "cameraUseageMarkName": "特写（被讯问人）",  //监控点用途标签名称，见附录F.监控点用途（cameraUseageMark）
                    "chanNum": 4  //监控点通道号
                },
                {
                    "cameraIndexCode": "94474179aaef4e3d83a5ffca3df1b3a6", //监控点编号
                    "cameraName": "示证通道02", //监控点名称
                    "cameraUseageMark": "monitoringUseage.2",  //监控点用途标签，见附录F.监控点用途（cameraUseageMark）
                    "cameraUseageMarkName": "特写（被讯问人）",  //监控点用途标签名称，见附录F.监控点用途（cameraUseageMark）
                    "chanNum": 4  //监控点通道号
                },
                {
                    "cameraIndexCode": "94474179aaef4e3d83a5ffca3df1b3a6", //监控点编号
                    "cameraName": "示证通道02", //监控点名称
                    "cameraUseageMark": "monitoringUseage.2",  //监控点用途标签，见附录F.监控点用途（cameraUseageMark）
                    "cameraUseageMarkName": "特写（被讯问人）",  //监控点用途标签名称，见附录F.监控点用途（cameraUseageMark）
                    "chanNum": 4  //监控点通道号
                },
                {
                    "cameraIndexCode": "94474179aaef4e3d83a5ffca3df1b3a6", //监控点编号
                    "cameraName": "示证通道02", //监控点名称
                    "cameraUseageMark": "monitoringUseage.2",  //监控点用途标签，见附录F.监控点用途（cameraUseageMark）
                    "cameraUseageMarkName": "特写（被讯问人）",  //监控点用途标签名称，见附录F.监控点用途（cameraUseageMark）
                    "chanNum": 4  //监控点通道号
                },
                {
                    "cameraIndexCode": "94474179aaef4e3d83a5ffca3df1b3a6", //监控点编号
                    "cameraName": "示证通道02", //监控点名称
                    "cameraUseageMark": "monitoringUseage.2",  //监控点用途标签，见附录F.监控点用途（cameraUseageMark）
                    "cameraUseageMarkName": "特写（被讯问人）",  //监控点用途标签名称，见附录F.监控点用途（cameraUseageMark）
                    "chanNum": 4  //监控点通道号
                },
                {
                    "cameraIndexCode": "94474179aaef4e3d83a5ffca3df1b3a6", //监控点编号
                    "cameraName": "示证通道02", //监控点名称
                    "cameraUseageMark": "monitoringUseage.2",  //监控点用途标签，见附录F.监控点用途（cameraUseageMark）
                    "cameraUseageMarkName": "特写（被讯问人）",  //监控点用途标签名称，见附录F.监控点用途（cameraUseageMark）
                    "chanNum": 4  //监控点通道号
                }
            ],//根据房间编号搜索房间监控点信息
            roomPeopleData:{
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
            },  //根据留置房间编码获取留置人员信息
            DetainRiskInfo_total:0,//系统评估符合智慧留置人数
            ConservePersonTotal:0,//总节省看护人次
            kanhuTotal:[
                {value :0},
                {value :1}
            ],//总节省看护人次
            riskList:{
                highNum:0,
                midNum:0,
                lowNum:0,
            },
            // 人员类型 亲属
            lzTypeNumData:{
                 "mainNum": "4",  //主要涉案目标人数
                "importantNum": "3", //重要涉案人
                "briberyNum": "2",  //涉嫌行贿犯罪的涉案人员
                "joinNum": "1" //涉嫌共同职务犯罪的涉案人员
            }
        }
    }
    componentDidMount(){
    // 水波
        this.ShuiBO()
        this.ShuiBO2()
        this.ShuiBO3()
        this.Getdata()
        this.jieshengh()
        this.PersonEChats()
        this.getRight1()
        this.getRight2()
    }
    jieshengh(){
        //看护节省总人数
        zProduct().then(res => {
            if (res.msg === "SUCCESS") {
                this.setState({
                    ConservePersonTotal: Number(res.data.value)
                })
            }
        })
        
        lzsqk().then(res => {
            if (res.msg === "SUCCESS") {
                this.setState({
                    lzsqkData: res.data
                })
            }
        })
        // const option2 = {
        //     xAxis: {
        //         type: 'category',
        //         data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        //         axisLine: {
        //             lineStyle: {
        //                 fontSize:16,
        //                 color: "#2BFAFF",
        //                 width: 1, //这里是为了突出显示加上的  
        //             }
        //         },
        //     },
        //     yAxis: {
        //         type: 'value',
        //         axisLine: {
        //             lineStyle: {
        //                 fontSize:18,
        //                 color: "#FFFFFF",
        //                 width: 1, //这里是为了突出显示加上的  
        //             }
        //         },
        //         splitLine:{
        //             show:false
        //         }
        //     },
        //     grid: {
        //          left: '8%',//设置图表距离左边界的距离
        //          right: '8%',//设置图表距离右边界的距离
        //          top:'12%',//设置图表距离上边界的距离
        //         bottom: '10%',//设置图表距离下边界的距离
        //     },
        //     series: [{
        //         data: [800, 800, 800, 800, 800, 800, 800],
        //         type: 'bar',
        //         barWidth: '30%',
        //         // itemStyle: {
        //         //     normal: {
        //         //         color: new echarts.graphic.LinearGradient(
        //         //             0, 1, 0, 0, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 1 0 0则代表渐变色从正下方开始
        //         //             [
        //         //                 {offset: 0, color: '#16FFEF'},
        //         //                 {offset: 0.5, color: '#F0FF4D'},
        //         //                 {offset: 1, color: '#16FFEF'}
        //         //             ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示柱状图的位置
        //         //         )
        //         //     }
        //         // },
        //         itemStyle: {
        //             normal: {
        //                 color: function(params) {
        //                     var color;
        //                     if(params.dataIndex==19){
        //                          color = {
        //                             type: "linear",
        //                             x: 0,
        //                             y: 0,
        //                             x2: 1,
        //                             y2: 0,
        //                             colorStops: [{
        //                                     offset: 0,
        //                                     color: "#F0FF4D " // 0% 处的颜色
        //                                 },
        //                                 {
        //                                     offset: 1,
        //                                     color: "#F21F02" // 100% 处的颜色
        //                                 }
        //                             ]
        //                         }
        //                         }else if(params.dataIndex==18){
        //                         color = {
        //                             type: "linear",
        //                             x: 0,
        //                             y: 0,
        //                             x2: 1,
        //                             y2: 0,
        //                             colorStops: [{
        //                                     offset: 0,
        //                                     color: "#FFA048" // 0% 处的颜色
        //                                 },
        //                                 {
        //                                     offset: 1,
        //                                     color: "#B25E14" // 100% 处的颜色
        //                                 }
        //                             ]
        //                         }
        //                         }else if(params.dataIndex==17){
        //                         color = {
        //                             type: "linear",
        //                             x: 0,
        //                             y: 0,
        //                             x2: 1,
        //                             y2: 0,
        //                             colorStops: [{
        //                                     offset: 0,
        //                                     color: "#F8E972" // 0% 处的颜色
        //                                 },
        //                                 {
        //                                     offset: 1,
        //                                     color: "#E5C206" // 100% 处的颜色
        //                                 }
        //                             ]
        //                         }
        //                         }else{
        //                         color = {
        //                             type: "linear",
        //                             x: 0,
        //                             y: 0,
        //                             x2: 1,
        //                             y2: 0,
        //                             colorStops: [{
        //                                     offset: 0,
                                            
        //                                     color: "#16FFEF" // 0% 处的颜色
        //                                 },
        //                                 {
        //                                     offset: 1,
        //                                     color: "#F0FF4D " // 100% 处的颜色
        //                                 }
        //                             ]
        //                         }
        //                         }
        //                         return color;
        //                 },
        //             }
        //         },
              
        //     },
        //     {
        //         // 分隔
        //         type: "pictorialBar",
        //         itemStyle: {
        //             normal:{
        //                 color:"#061348"
        //             }
        //         },
        //         symbolRepeat: "fixed",
        //         symbolMargin: 6,
        //         symbol: "rect",
        //         symbolClip: true,
        //         symbolSize: [1, 21],
        //         symbolPosition: "start",
        //         symbolOffset: [1, -1],
        //         symbolBoundingData: this.total,
        //         data: [800, 800, 800, 800, 800, 800, 800],
        //         z: 2,
        //         animationEasing: "elasticOut"
        //     },]
        // };
        // const rateChart = echarts.init(document.getElementById("jieshenhlist"));
        // rateChart.setOption(option2); 
        //看护折线图趋势
        zx().then(res => {
            if (res.msg === "SUCCESS") {
                var jieshenghData1 = [],jieshenghData2 = [];
                res.data.forEach(element => {
                    jieshenghData1.push(element.name)
                    jieshenghData2.push(element.value)
                });
                //折现统计图
                const option2 = {
                    xAxis: {
                        type: 'category',
                        data: jieshenghData1,
                        axisLine: {
                            lineStyle: {
                                fontSize:16,
                                color: "#2BFAFF",
                                width: 1, //这里是为了突出显示加上的  
                            }
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                fontSize:18,
                                color: "#FFFFFF",
                                width: 1, //这里是为了突出显示加上的  
                            }
                        },
                        splitLine:{
                            show:false
                        }
                    },
                    grid: {
                         left: '8%',//设置图表距离左边界的距离
                         right: '8%',//设置图表距离右边界的距离
                         top:'12%',//设置图表距离上边界的距离
                        bottom: '10%',//设置图表距离下边界的距离
                    },
                    series: [{
                        data: jieshenghData2,
                        type: 'bar',
                        barWidth: '30%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 1, 0, 0, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 1 0 0则代表渐变色从正下方开始
                                    [
                                        {offset: 0, color: '#16FFEF'},
                                        {offset: 0.5, color: '#F0FF4D'},
                                        {offset: 1, color: '#16FFEF'}
                                    ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示柱状图的位置
                                )
                            }
                        },

                    },
                   
    ]
                };
                const rateChart = echarts.init(document.getElementById("jieshenhlist"));
                rateChart.setOption(option2); 
            }
        })
    }
    // 男女统计
    SortEcharts(){
       
      
        // const optionrate = {
        //     color: ["#FF6E78", "#4A92FE","#7EFEB2",'#FFDD61'],
        //     tooltip: {
        //         trigger: 'item',
        //         formatter: '{a} <br/>{b}: {c} '
        //     },
        //     legend: {
        //         data: ['30以下12', '31-40 10', '41-50 12', '51-60 5', '60以上 6'],
        //         icon: "bar",//图例形状设置,
        //         textStyle:{color:"#fff"},
        //         type: 'scroll',
	    //     	orient: 'vertical',
        //         show: true,
        //         right:10,
        //         itemHeight: 10, 
        //         itemWidth: 10,
        //         itemGap: 20 // 设置间距
               
		       

                
        //     },
        //     series: [
        //         {
        //             name: '未解除对象',
        //             type: 'pie',
        //             selectedMode: 'single',
        //             radius: ["20%", '30%'],
        //             label: {
        //                 position: 'inner',
        //                 fontSize: 8,
        //             },
        //             labelLine: {
        //                 show: false
        //             },
        //             data: [
        //                 {value: 22, name: '6个月以上',itemStyle: { color: '#00F5E3' }},
        //                 {value: 30, name: '5-6个月',itemStyle:{color:"#FF6B54"}},
        //                 {value: 50, name: '4-5个月',itemStyle: { color: '#00B1FF' }},
        //                 {value: 70, name: '1-2个月',itemStyle: { color: '#00A86F' }},
        //                 {value: 90, name: '2-3个月',itemStyle: { color: '#F4F83A' }},
        //                 {value: 31, name: '3-4个月',itemStyle: { color: '#FF9C4E' }},
                      
        //             ],
        //             center: ["48%", "40%"], // 这个属性调整图像的位置！！！！！
        //         },
        //         {
        //             name: '解除对象',
        //             type: 'pie',
        //             radius: ['60%', '40%'],
        //             labelLine: {
        //                 length: 30,
                     
        //             },
        //             label: {
        //                 // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        //               formatter: '{b|{b}：}{c}  ',
        //                 // backgroundColor: '#F6F8FC',
        //                 // borderColor: '#8C8D8E',
        //                 borderWidth: 1,
        //                 // borderRadius: 4,
                      
                        
                             
        //                 rich: {
        //                     a: {
        //                         color: '#6E7079',
        //                         lineHeight: 22,
        //                         align: 'center'
        //                     },
        //                     hr: {
        //                         borderColor: '#fff',
        //                         width: '100%',
        //                         borderWidth: 0,
        //                         height: 0
        //                     },
        //                     b: {
        //                         color: '#83A697',
        //                         fontSize: 12,
                             
                             
                              
        //                     },
        //                     d: {
        //                         fontSize: 12,
        //                         padding: [-10, 0, 10, 0],
        //                       },
        //                     per: {
        //                         color: '#9EC6B3',
                                
        //                         // backgroundColor: '#4C5058',
        //                         padding: [0, 0],
        //                         borderRadius: 3
        //                     }
        //                 },
                       
        //             },
        //             data: [
                       
        //                 {value: 12, name: '30以下12',itemStyle: { color: '#4B91F6' }},
        //                 {value: 10, name: '31-40 10',itemStyle:{color:"#0076DA"}},
        //                 {value: 12, name: '41-50 12',itemStyle: { color: '#008856' }},
        //                 {value: 5, name: '51-60 5',itemStyle: { color: '#32A392' }},
        //                 {value: 6, name: '60以上 6',itemStyle: { color: '#00799C' }},
                       
        //             ],
        //             center: ["48%", "40%"] ,// 这个属性调整图像的位置！！！！！
        //         }
        //     ]
        // };
        // const rateChart = echarts.init(document.getElementById("echartsMainaa"));
        // rateChart.setOption(optionrate); 
    }
    // 当前留置对象情况
    PersonEChats(){
        const optionrate = {
             color: ['#00FFE1 ', '#009DFC ', '#F5BD06'],
             tooltip: {
                 trigger: 'item'
             },
            //  legend: {
            //      icon: "bar",//图例形状设置,
            //      textStyle:{color:"#fff"},
            //      type: 'scroll',
            //      orient: 'vertical',
            //      show: true,
            //      right: 0,
            //      top: 0,
            //      bottom: 20,
            //      itemWidth:12,
            //      itemHeight:12,
            //      itemGap: 18, // 设置间距
                
 
 
            //  },
             series: [
                 {
                     name: '访问来源',
                     type: 'pie',
                     radius: ['40%', '45%'],
                     avoidLabelOverlap: false,
                     label: {
                         show: false,
                         position: 'center',
                         normal: {   
                             show: true,             // 显示 隐藏
                             position: 'outside',    // 标签的位置
                            //  formatter: '{c}',   // 标签回调自定义函数
                            textStyle:{
                                color:'#2BFAFF',fontSize:14
                            }
                         },
                     },
                      //指示文字
                    //   labelLine : {
                    //      normal: {
                    //          lineStyle: {
                    //              color: '#e4e4e4'
                    //          },
                    //      }
                    //  },
 
                     // emphasis: {
                     //     label: {
                     //         show: true,
                     //         fontSize: '12',
                     //         fontWeight: 'bold'
                     //     }
                     // },
                     labelLine: {
                        normal: {
                            show:true,
                            length:20,
                            lineStyle: {
                                color: '#e4e4e4'
                            }
                         }
                     },
                    //  data: [
                    //      {value: 1048, name: '30以下'},
                    //      {value: 735, name: '31-40'},
                    //      {value: 580, name: '41-50'},
                    //      {value: 384, name: '51-60'},
                    //      {value: 500, name: '60以上'}
                    //  ],
                     data:this.state.yearIn,
                     center: ["38%", "25.4%"] ,
                 }
             ]
         };
         const rateChart = echarts.init(document.getElementById("personEcharts"));
         rateChart.setOption(optionrate); 
     }

    //whh______
    getRight1(){
        //系统评估态势总人数
        runSuationCount().then(res=>{
            console.log(res,'系统评估态势总人数')
            if (res.msg === "SUCCESS") {
                this.setState({
                    DetainRiskInfo_total:Number(res.data.value)
                })
            }
        })
        //高中低风险
        runSuationZX().then(res => {
            if (res.msg === "SUCCESS") {
                var gaof=0,zhongf=0,dif=0;
                res.data.forEach(element => {
                    if(element.attr === "高风险"){
                        gaof+=element.value
                    }else if(element.attr === "中风险"){
                        zhongf+=element.value
                    }else if(element.attr === "低风险"){
                        dif+=element.value
                    }
                });
                //高中低风险num详情
                this.setState({ 
                    riskList:{
                        ...this.state.riskList,
                        highNum:gaof,
                        midNum:zhongf,
                        lowNum:dif,
                    }
                })
                //echarts         
                let chartDom = document.getElementById('r1Echarts_content');
                let myChart = echarts.init(chartDom);
                let option;
                var BorderWidth = '6.5';
                //反方向剩下部分的样式
                var placeHolderStyle = {
                    normal: {
                        label: {
                            show: false,
                            position: "center"
                        },
                        labelLine: {
                            show: false
                        },
                        color: "rgba(0,0,0,0)",
                        borderColor: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    emphasis: {
                        color: "#dedede",
                        borderColor: "#dedede",
                        borderWidth: 0
                    }
                };
            
                option = {
                    // backgroundColor: '#000',
                    color: ['#009cff', '#4ebefd', '#30ed9d',],
                    legend: {
                        show: false,
                        orient:'vertical',
                        left:'left',
                        top:'middle',
                        data: ['正常', '次要', '警告',],
                        textStyle:{
                            color:'#fff',
                            fontSize:16
                        }
                    },
                    series: [
                        {
                            name: '正常',
                            type: 'pie',
                            clockWise: true, //顺时加载
                            hoverAnimation: false, //鼠标移入变大
                            radius: [35, 36],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false,
                                        position: 'outside'
                                    },
                                    labelLine: {
                                        show: false,
                                        length: 300,
                                        smooth: 0.5
                                    },
                                    borderWidth: BorderWidth,
                                    shadowBlur: 60,
                                    borderColor: "#009cff",
                                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                                }
                            },
                            data: [
                                {value: dif,name:''},
                                {value: gaof+zhongf,name: '',itemStyle: placeHolderStyle}
                            ]
                        },{
                            name: '次要',
                            type: 'pie',
                            clockWise: true,
                            hoverAnimation: false,
                            radius: [45, 46],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false,
                                        length: 100,
                                        smooth: 0.5
                                    },
                                    borderWidth: BorderWidth,
                                    shadowBlur: 40,
                                    borderColor: "#FDEB00",
                                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                                }
                            },
                            data: [
                                {value: zhongf,name:''},
                                {value: gaof+dif,name: '',itemStyle: placeHolderStyle}
                            ]
                        }, {
                            name: '警告',
                            type: 'pie',
                            clockWise: true,
                            hoverAnimation: false,
                            radius: [55, 56],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false,
                                        length: 100,
                                        smooth: 0.5
                                    },
                                    borderWidth: BorderWidth,
                                    shadowBlur: 40,
                                    borderColor: "#FF5736",
                                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                                }
                            },
                            data: [
                                {value: gaof,name:''},
                                {value: zhongf+dif,name: '',itemStyle: placeHolderStyle}
                            ]
                        }
                    ]
                };
                option && myChart.setOption(option);
            }
        })
    }
    getRight2(){
        moreKanhu().then(res => {
            if (res.msg === "SUCCESS") {
                let moreKanhuList;
                this.setState({
                    kanhuTotal:res.data
                })
                res.data.forEach(element => {
                    moreKanhuList+=element.value
                });

                var num11 = res.data[0].value;
                var num22 = res.data[1].value;

                let chartDom = document.getElementById('r2Echarts_content');
                let myChart = echarts.init(chartDom);
                let option;
                option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    title: {
                        x:'left',
                        y:'center',
                        itemGap: 30,
                        textStyle: {
                            fontSize: 26,
                            fontWeight: 'bolder',
                            color: '#000080'
                        },
                    },
                    color:['#FFF64F','#00B2CD'], 
                    legend: {
                        show:false,
                        orient: 'vertical',
                        itemGap: 0,
                        right: 50,
                        y: 'center',
                        itemWidth: 20,   // 设置图例图形的宽
                        itemHeight: 10,
                        selectedMode: false,
                        formatter: "{name}"
                    },
                    series: [
                        {
                            name: '智慧看护',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value:num11, name: '智慧看护',label:{
                                    normal:{ 
                                        show:true,
                                        formatter: '{d}%',
                                         textStyle: {
                                                fontSize: 16,
                                                fontWeight: 'bolder',
                                            },
                                    }}},
                                {value:moreKanhuList-num11, name: '近身看护'}
                            ]
                        }
                    ]
                }
                option && myChart.setOption(option);

                
                let chartDom2 = document.getElementById('r3Echarts_content');
                let myChart2 = echarts.init(chartDom2);
                let option2;
                option2 = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    title: {
                    
                        x:'left',
                        y:'center',
                        itemGap: 30,
                        textStyle: {
                            fontSize: 4,
                            fontWeight: 'bolder',
                            color: '#000080'
                        },
                    },
                    color:['#07A5BE','#00FFB0',], 
                    legend: {
                        show:false,
                        orient: 'vertical',
                        data: ['直接访问', '邮件营销'],
                        itemGap: 0,
                        right: 50,
                        y: 'center',
                        itemWidth: 20,   // 设置图例图形的宽
                        itemHeight: 10,
                        selectedMode: false,
                        formatter: "{name}"
                    },
                    series: [
                        {
                            name: '智慧看护',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: num22, name: '近身看护',label:{
                                    normal:{ 
                                        show:true,
                                        formatter: '{d}%',
                                        textStyle: {
                                                fontSize: 16,
                                                fontWeight: 'bolder',
                                        }
                                    }
                                }},
                                {value: moreKanhuList-num22, name: '智慧看护'}
                            ]
                        }
                    ]
                };
                option2 && myChart2.setOption(option2);
            }
        })

    }
    Getdata() {
        yearSex().then(res => {
            if (res.msg === "SUCCESS") {
                this.setState({
                    yearSexData: res.data,
                })
            }
        }).catch(error => {
        })

        yearSexIn().then(res => {
            if (res.msg === "SUCCESS") {
                var ceng = res.data
                var name=[]
                var color = ['#FF6934', "#FF6B54", '#00B1FF']
                for (let index = 0; index < ceng.length; index++) {
                    var element = ceng[index];
                    element.push({
                        itemStyle: { color: color[index] }
                    })
                    name.push(element.name)
                }
                this.setState({
                    yearIn: res.data,
                    name:name
                })
            }
        }).catch(error => {
        })
        yearSexOut().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    yearOut: res.data,
                })
            }
        }).catch(error => {
        })

        banComgary().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    banan: res.data,
                })
            }
        }).catch(error => {
        })
        //根据留置房间编码获取留置人员信息
        // roomPeople({
        //     "roomIndexCode":"7bccdcc45bb24befa7fc11f1c0027f28"  //房间编码
        // }).then(res => {
        //     if (res.msg === "SUCCESS") {

        //         this.setState({
        //             roomPeopleData: res.data,
        //         })
        //     }
        // }).catch(error => {
        // })
        // 页面展示时使用, 返回当前正在使用留置室编码列表
        roomList().then(res => {
            if (res.msg === "SUCCESS") {

                roomCamera({
                    "roomIndexCode":res.data[0]  //房间编码
                }).then(res => {
                    if (res.msg === "SUCCESS") {
        
                        this.setState({
                            roomCameraData: res.data,
                        })
                    }
                }).catch(error => {
                })
                
                roomPeople({
                    "roomIndexCode":res.data[0]   //房间编码
                }).then(res => {
                    if (res.msg === "SUCCESS") {
        
                        this.setState({
                            roomPeopleData: res.data,
                        })
                    }
                }).catch(error => {
                })
            }
        }).catch(error => {
        })


        // roomCamera({
        //     "roomIndexCode":"7bccdcc45bb24befa7fc11f1c0027f28"  //房间编码
        // }).then(res => {
        //     if (res.msg === "SUCCESS") {

        //         this.setState({
        //             roomCameraData: res.data,
        //         })
        //     }
        // }).catch(error => {
        // })
        lz1qgk().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    lz1qgkData: res.data,
                })
            }
        }).catch(error => {
        })


        //历史案件
        historyCase().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    historyCaseData: res.data,
                })
            }
        }).catch(error => {
        })


        talkSuation().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    talkSuationData: res.data,
                })
            }
        }).catch(error => {
        })


        talkSuationList().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    talkqk: res.data,
                })
            }
        }).catch(error => {
        })

        // 滞留人员 进
        In().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    inData: res.data,
                })
            }
        }).catch(error => {
        })
        // 滞留人员 出
        Out().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    outData: res.data,
                })
            }
        }).catch(error => {
        })

        Sutation().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    useSutationData: res.data,
                })
            }
        }).catch(error => {
        })


        talkSutation().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    talkSutationData: res.data,
                })
            }
        }).catch(error => {
        })
        runSuation().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    runSuationData: res.data,
                })
            }
        }).catch(error => {
        })
        
        Zinstrouct().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    ZinstrouctData: res.data,
                })
            }
        }).catch(error => {
        })
        // 留置区使用情况
        lzTypeNum().then(res => {
            if (res.msg === "SUCCESS") {

                this.setState({
                    lzTypeNumData: res.data,
                })
            }
        }).catch(error => {
        })

    }
    // 水波图第一个
    ShuiBO(){
        let chartDom = document.getElementById('shuibotu1');
        let myChart = echarts.init(chartDom);
        let option;
        option={
            // title: {
            //     text: '水波图', // 主标题文本，支持使用 \n 换行
            //     top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
            //     left: 'center', // 值: 'left', 'center', 'right' 同上
            //     textStyle: { // 文本样式
            //       fontSize: 0,
            //       fontWeight: 600,
            //       color: '#fff'
            //     }
            //   },
              // 提示框组件
              tooltip: {
                trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                textStyle: {
                  color: '#fff' // 文字颜色
                },
                // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
                // 水球图: {a}（系列名称），{b}（无），{c}（数值）
                // 使用函数模板   传入的数据值 -> value: number|Array,
                formatter: function (value) {
                  return value.seriesName + ': ' + value.data * 100 + '%'
                }
              },
              series: [{
                type: 'liquidFill',
                name: '', // 系列名称，用于tooltip的显示，legend 的图例筛选
                radius: '62%', // 水球图的半径
                center: ['50%', '45%'], // 水球图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
                // 水填充图的形状 circle 默认圆形  rect 圆角矩形  triangle 三角形  
                // diamond 菱形  pin 水滴状 arrow 箭头状  还可以是svg的path
                shape: 'circle',
                phase: 0, // 波的相位弧度 不设置  默认自动
                direction: 'right', // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
                outline: {
                  show: true,
                  borderDistance: 0, // 边框线与图表的距离 数字
                  itemStyle: {
                    opacity: 1, // 边框的透明度   默认为 1
                    borderWidth: 1, // 边框的宽度
                    shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
                    shadowColor: '#8BCBD0', // 边框的阴影颜色,
                    borderColor: '#8BCBD0' // 边框颜色
                  }
                },
                // 图形样式
                itemStyle: {
                  color: '#FFDA02', // 水球显示的背景颜色
                  opacity: 1, // 波浪的透明度
                  shadowBlur: 10 // 波浪的阴影范围
                },
                backgroundStyle: {
                  color: '#FFD60E', // 水球未到的背景颜色
                  opacity: 0.2
                },
                // 图形的高亮样式
                emphasis: {
                  itemStyle: {
                    opacity: 0.8 // 鼠标经过波浪颜色的透明度
                  }
                },
                // 图形上的文本标签
                label: {
                  fontSize: 20,
                  fontWeight: 400,
                  color: '#fff'
                },
                // data: [0.50] // 系列中的数据内容数组
                data:[Number(this.state.lzsqkData.usePercent)/100]
              }]
    
        }
        option && myChart.setOption(option);
    }
    ShuiBO2(){
        let chartDom = document.getElementById('shuibotu2');
        let myChart = echarts.init(chartDom);
        let option;
        option={
            // title: {
            //     text: '水波图', // 主标题文本，支持使用 \n 换行
            //     top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
            //     left: 'center', // 值: 'left', 'center', 'right' 同上
            //     textStyle: { // 文本样式
            //       fontSize: 0,
            //       fontWeight: 600,
            //       color: '#fff'
            //     }
            //   },
              // 提示框组件
              tooltip: {
                trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                textStyle: {
                  color: '#fff' // 文字颜色
                },
                // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
                // 水球图: {a}（系列名称），{b}（无），{c}（数值）
                // 使用函数模板   传入的数据值 -> value: number|Array,
                formatter: function (value) {
                  return value.seriesName + ': ' + value.data * 100 + '%'
                }
              },
              series: [{
                type: 'liquidFill',
                name: '', // 系列名称，用于tooltip的显示，legend 的图例筛选
                radius: '62%', // 水球图的半径
                center: ['50%', '45%'], // 水球图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
                // 水填充图的形状 circle 默认圆形  rect 圆角矩形  triangle 三角形  
                // diamond 菱形  pin 水滴状 arrow 箭头状  还可以是svg的path
                shape: 'circle',
                phase: 0, // 波的相位弧度 不设置  默认自动
                direction: 'right', // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
                outline: {
                  show: true,
                  borderDistance: 0, // 边框线与图表的距离 数字
                  itemStyle: {
                    opacity: 1, // 边框的透明度   默认为 1
                    borderWidth: 1, // 边框的宽度
                    shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
                    shadowColor: '#8BCBD0', // 边框的阴影颜色,
                    borderColor: '#8BCBD0' // 边框颜色
                  }
                },
                // 图形样式
                itemStyle: {
                  color: '#22E5D1 ', // 水球显示的背景颜色
                  opacity: 1, // 波浪的透明度
                  shadowBlur: 10 // 波浪的阴影范围
                },
                backgroundStyle: {
                  color: '#0DCA6E', // 水球未到的背景颜色
                  opacity: 0.2
                },
                // 图形的高亮样式
                emphasis: {
                  itemStyle: {
                    opacity: 0.8 // 鼠标经过波浪颜色的透明度
                  }
                },
                // 图形上的文本标签
                label: {
                  fontSize: 20,
                  fontWeight: 400,
                  color: '#fff'
                },
                // data: [0.50] // 系列中的数据内容数组
                data:[Number(this.state.runSuationData.usePercent)/100]
              }]
    
        }
        option && myChart.setOption(option);
    }
    ShuiBO3(){
        let chartDom = document.getElementById('shuibotu3');
        let myChart = echarts.init(chartDom);
        let option;
        option={
            // title: {
            //     text: '水波图', // 主标题文本，支持使用 \n 换行
            //     top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
            //     left: 'center', // 值: 'left', 'center', 'right' 同上
            //     textStyle: { // 文本样式
            //       fontSize: 0,
            //       fontWeight: 600,
            //       color: '#fff'
            //     }
            //   },
              // 提示框组件
              tooltip: {
                trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                textStyle: {
                  color: '#fff' // 文字颜色
                },
                // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
                // 水球图: {a}（系列名称），{b}（无），{c}（数值）
                // 使用函数模板   传入的数据值 -> value: number|Array,
                formatter: function (value) {
                  return value.seriesName + ': ' + value.data * 100 + '%'
                }
              },
              series: [{
                type: 'liquidFill',
                name: '', // 系列名称，用于tooltip的显示，legend 的图例筛选
                radius: '62%', // 水球图的半径
                center: ['50%', '45%'], // 水球图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
                // 水填充图的形状 circle 默认圆形  rect 圆角矩形  triangle 三角形  
                // diamond 菱形  pin 水滴状 arrow 箭头状  还可以是svg的path
                shape: 'circle',
                phase: 0, // 波的相位弧度 不设置  默认自动
                direction: 'right', // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
                outline: {
                  show: true,
                  borderDistance: 0, // 边框线与图表的距离 数字
                  itemStyle: {
                    opacity: 1, // 边框的透明度   默认为 1
                    borderWidth: 1, // 边框的宽度
                    shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
                    shadowColor: '#8BCBD0', // 边框的阴影颜色,
                    borderColor: '#8BCBD0' // 边框颜色
                  }
                },
                // 图形样式
                itemStyle: {
                  color: '#18DFFF', // 水球显示的背景颜色
                  opacity: 1, // 波浪的透明度
                  shadowBlur: 10 // 波浪的阴影范围
                },
                backgroundStyle: {
                  color: '#0273FF', // 水球未到的背景颜色
                  opacity: 0.2
                },
                // 图形的高亮样式
                emphasis: {
                  itemStyle: {
                    opacity: 0.8 // 鼠标经过波浪颜色的透明度
                  }
                },
                // 图形上的文本标签
                label: {
                  fontSize: 20,
                  fontWeight: 400,
                  color: '#fff'
                },
                //data: [0.50] // 系列中的数据内容数组
                data:[Number(this.state.talkSutationData.usePercent)/100]
              }]
    
        }
        option && myChart.setOption(option);
    }
    render() { 
        const { ConservePersonTotal,DetainRiskInfo_total,yearSexData, lzsqkData,roomCameraData,runSuationData,roomPeopleData,lz1qgkData,historyCaseData,talkSutationData,riskList,lzTypeNumData} = this.state
        const ToFooterPrint = ()=>{
            geangenz().then(res=>{
          
                if(res.msg === "SUCCESS"){
                   var url=res.data.riskTokenUrl
                   //window.location.href = url
                    window.open(url ,'_blank');
                }
            })
            //window.location.href = 'https://blog.csdn.net/qq_40749085/article/details/103344254'
            //window.open('https://blog.csdn.net/qq_40749085/article/details/103344254' ,'_blank');
          
        }
        return ( 
            <Fragment>
                 <div className="Commissionlist" >
                    {/* <header>
                        <h3>清源山庄留置区数据看板</h3>
                    </header> */}
                    {/* 左边 */}
                    <div className="CommissionLeft">
                        {/* 第一快 */}
                        <div className="CommissionOne">
                             <div className="titles">
                                 <p>场所留置案件概况</p>
                             </div>
                             <div className="anjian">
                                  <div >
                                       <p className="num">在办案件数量</p>
                                       <p className="nums">{lz1qgkData.detainNum}</p>
                                  </div>
                                  <div >
                                       <p  className="num">历史案件数量</p>
                                       <p className="nums">{historyCaseData.value}</p>
                                  </div>
                             </div>
                             {/* <div className="nan">
                                 <p><i></i><span>男</span><span>60</span></p>
                                 <p><i></i><span>女</span><span>60</span></p>
                             </div> */}
                             {/* <div className="titlecontent">
                                  <div id="echartsMainaa" style={{ width: 500, height: 200,}}></div>
                                  
                             </div> */}
                        </div>
                        {/* 第二块 */}
                          <div className="CommissionThree">
                            <div className="titles">
                                 <p>房间使用情况</p>
                             </div>
                             <div className="liuzhishui">
                                
                                <div className="left">
                                    <div>
                                        { Object.keys(lz1qgkData).length > 0 ? 
                                         <ul>
                                            <li>
                                                   <p className="putong">普通留置室</p>
                                                   {/* <i className="icon1"></i><span style={{position:"relative",left:"50px",top:"-60px",color:"white",fontSize:"18px"}}>{lzsqkData.usePercent}<span style={{fontSize:"14px",marginLeft:"4px"}}>%</span></span> */}
                                                   <div className="list">
                                                          <div className="ct2_contentBJ"></div>
                                                          <div id="shuibotu1" style={{width:100,height:90}}></div>
                                                    
                                                       
                                                    <p className="www"><span className="total">总数</span><span>{lzsqkData.ordinaryRoomTotalNum}<span  className="ge">个</span></span></p>
                                                    <p className="www"><span className="yishiy" >已使用</span><span  >{lzsqkData.ordinaryRoomUseNum}<span  className="ge">个</span></span></p>
                                                    <p className="www"><span className="free" >空闲</span><span  >{lzsqkData.ordinaryRoomFreeNum}<span className="ge">个</span></span></p>
                                                   </div>
                                                   
                                            </li>
                                            <li>
                                                  <p className="putong">智慧留置室</p>
                                                  {/* <i className="icon2"></i><span style={{position:"relative",left:"50px",color:"white",top:"-60px",fontSize:"18px"}}>{runSuationData.usePercent}<span  style={{fontSize:"14px",marginLeft:"4px"}}>%</span></span> */}
                                                  
                                                    <div className="lists">
                                                         <div id="shuibotu2" style={{width:100,height:90}}></div>
                                                    <p className="www"><span  className="total">总数</span><span>{runSuationData.mindRoomTotalNum}<span  className="ge">个</span></span></p>
                                                   <p className="www"><span className="yishiy">已使用</span><span >{runSuationData.mindRoomUseNum}<span  className="ge">个</span></span></p>
                                                   <p className="www"><span  className="free" >空闲</span><span>{runSuationData.mindRoomFreeNum}<span className="ge">个</span></span></p>
                                                    </div>
                                            </li>
                                           {
                                                Object.keys(talkSutationData).length > 0 ? <li>
                                                <p className="putong">谈话室情况</p>
                                                <div className="listss">
                                                    <div id="shuibotu3" style={{width:100,height:90}}></div>
                                                    <p className="www"><span className="total">房间总数</span><span >{talkSutationData.roomTotalNum}<span  className="ge">个</span></span></p>
                                                    <p className="www"><span  className="yishiy">已使用</span><span >{talkSutationData.roomUseNum}<span  className="ge">个</span></span></p>
                                                   <p className="www"><span  className="free" >空闲</span><span  >{talkSutationData.roomFreeNum}<span className="ge">个</span></span></p>
                                                 </div>
                                                {/* <i className="icon3"></i><span style={{position:"relative",left:"40px",color:"white",top:"-60px",fontSize:"18px"}}>{talkSutationData.usePercent}<span  style={{fontSize:"14px",marginLeft:"4px"}}>%</span></span>
                                                
                                                    <p><span className="total">房间总数</span><span >{talkSutationData.roomTotalNum}<span  className="ge">个</span></span></p>
                                                    <p><span  className="yishiy">已使用</span><span >{talkSutationData.roomUseNum}<span  className="ge">个</span></span></p>
                                                    <p ><span  className="free" >空闲</span><span  >{talkSutationData.roomFreeNum}<span className="ge">个</span></span></p> */}
                                               
                                                 
                                             </li>:
                                             <li>
                                             <div>
                                             <p className="putong">谈话室情况</p>
                                                 <p className="room"><span className="roomtotal">房间总数</span><span className="single">7<span  className="ge">个</span></span></p>
                                                 <p className="room"><span className="roomtotal">已使用</span><span  className="single">7<span  className="ge">个</span></span></p>
                                                 <p className="room"><span className="roomtotal">空闲</span><span  className="single">7<span className="ge">个</span></span></p>
                                             </div>
                                             <div>
                                                <i className="icon3"><span style={{position:"relative",left:"50px",top:"50px",color:"white"}}>50%</span></i>
                                             </div>
                                          </li>
                                           }
                                          
                                        </ul>:  <ul>
                                            <li>
                                            
                                               <div>
                                                   <p className="putong">普通留置室</p>
                                                   <p className="room"><span className="roomtotal">房间总数</span><span className="single">7<span  className="ge">个</span></span></p>
                                                   <p className="room"><span className="roomtotal">房间总数</span><span  className="single">7<span  className="ge">个</span></span></p>
                                                   <p className="room"><span className="roomtotal">房间总数</span><span  className="single">7<span className="ge">个</span></span></p>
                                               </div>
                                               <div>
                                                  <i className="icon1"><span style={{position:"relative",left:"50px",top:"50px",color:"white",}}>50%</span></i>
                                               </div>
                                            </li>
                                            <li>
                                               <div>
                                               <p className="putong">智慧留置室</p>
                                               <p className="room"><span className="roomtotal">房间总数</span><span className="single">7<span  className="ge">个</span></span></p>
                                                   <p className="room"><span className="roomtotal">房间总数</span><span  className="single">7<span  className="ge">个</span></span></p>
                                                   <p className="room"><span className="roomtotal">房间总数</span><span  className="single">7<span className="ge">个</span></span></p>
                                               </div>
                                               <div>
                                                  <i className="icon2"><span style={{position:"relative",left:"50px",top:"50px",color:"white"}}>50%</span></i>
                                               </div>
                                            </li>
                                           {
                                                Object.keys(talkSutationData).length > 0 ? <li>
                                                 <div>
                                                <p className="putong">谈话室情况</p>
                                                    <p className="room"><span className="roomtotal">房间总数</span><span className="single">{talkSutationData.roomTotalNum}<span  className="ge">个</span></span></p>
                                                    <p className="room"><span className="roomtotal">已使用</span><span  className="single">{talkSutationData.roomUseNum}<span  className="ge">个</span></span></p>
                                                    <p className="room"><span className="roomtotal">空闲</span><span  className="single">{talkSutationData.roomFreeNum}<span className="ge">个</span></span></p>
                                                </div>
                                                <div>
                                                   <i className="icon3"><span style={{position:"relative",left:"50px",top:"50px",color:"white"}}>{runSuationData.usePercent}%</span></i>
                                                </div>
                                             </li>:
                                             <li>
                                             <div>
                                             <p className="putong">谈话室情况</p>
                                                 <p className="room"><span className="roomtotal">房间总数</span><span className="single">7<span  className="ge">个</span></span></p>
                                                 <p className="room"><span className="roomtotal">已使用</span><span  className="single">7<span  className="ge">个</span></span></p>
                                                 <p className="room"><span className="roomtotal">空闲</span><span  className="single">7<span className="ge">个</span></span></p>
                                             </div>
                                             <div>
                                                <i className="icon3"><span style={{position:"relative",left:"50px",top:"50px",color:"white"}}>50%</span></i>
                                             </div>
                                          </li>
                                           }
                                          
                                        </ul> }
                                      
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                      
                          <div className="Currentsituation">
                            <div className="titles">
                                <p>当前留置对象情况</p>
                            </div>
                            <div className="topContent">
                                <p className="man"><span>男性</span><span>{yearSexData.menNum}</span></p>
                                <p className="woman"><span>{yearSexData.womenNum}</span><span>女性</span></p>
                            </div>
                            <div className="topEcharts">
                                <div className="ct2_contentBJ"></div>
                                <div id="personEcharts" ></div> 
                            </div>
                            
                            <div className="qinshu">
                                <ul>
                                    <li><span>主要涉及目标</span><span>{lzTypeNumData.mainNum}</span></li>
                                    <li><span>亲属</span><span>{lzTypeNumData.joinNum}</span></li>
                                    <li><span>重要关系人</span><span>{lzTypeNumData.importantNum}</span></li>
                                    <li><span>其他</span><span>{lzTypeNumData.briberyNum}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 中间 */}
                    {/* <div className="CommissionContent" style={{display:"none"}}> */}

                  
                    <div className="CommissionContentw"style={{display:"none"}} >

                        <div className="CommissionContentone">
                            <div className="titles">
                                <p>人员概况</p>
                            </div>
                            <div className="dangerous">
                                <p>转到风险评估模型</p>
                            </div>
                            <div className="duixiang">
                                <div>
                                    <ul>
                                        <li><span>对象代号</span> <span>{roomPeopleData.suspectNo}</span></li>
                                        <li><span>调查组</span> <span>{roomPeopleData.groupName}</span></li>
                                        <li><span>案件名称</span> <span>{roomPeopleData.caseName}</span></li>
                                    </ul>
                                </div>
                               
                                <div >
                                    <ul>
                                        <li><span>留置室</span> <span>{roomPeopleData.roomName}</span></li>
                                        <li><span>性别</span> <span>{roomPeopleData.sex}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="CommissionContenttwo" style={{display:"none"}}>
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
                                    {roomCameraData.map((item,index)=>{
                                        return(
                                        <li>
                                         <i></i>
                                        <p>{item.cameraName}</p>
                                        <p>播放</p>
                                    </li>
                                        )
                                    })}
                                </ul>
                        </div>
                    </div>
                    {/* 右边 */}
                    <div className="CommissionRight">
                        <div className="Currentsituation">
                            <div className="titles"><p>对象安全风险评估</p></div>
                            <div className="title2">
                                <p>系统评估符合智慧留置人数<span>{DetainRiskInfo_total}</span></p>
                            </div>
                            <div className="echarts">
                                <div className="ct2_content">
                                    <div className="ct2_contentBJ"></div>
                                    <div id="r1Echarts_content"></div>
                                </div>
                             
                               <div className="dangerous">
                                   <ul>
                                       <li><span>高风险</span><span>{riskList.highNum}</span></li>
                                       <li><span>中风险</span><span>{riskList.midNum}</span></li>
                                       <li><span>低风险</span><span>{riskList.lowNum}</span></li>
                                   </ul>
                               </div>
                            </div>
                           
                        </div>
                        <div className="CommissionTwo">
                            <div className="titles"><p>看护模式</p></div>
                            <div className="echats">
                                <div className="ct2_content">
                                    <div className="ct2_contentBJ"></div>
                                    <div id="r2Echarts_content"></div>
                                 
                                    {/* <div className="total">
                                        <span className="totalNum">{this.state.kanhuTotal[0].value + this.state.kanhuTotal[1].value}</span>
                                        <span>总数</span>
                                    </div> */}
                                    <div className="legent_bg"><p>智慧看护：</p></div>
                                    <span className="legendNum">{this.state.kanhuTotal[0].value}</span>
                                    <div className="legent_bg lg2"><p>近身看护：</p></div>
                                    <span className="legendNum ln2">{this.state.kanhuTotal[1].value}</span>
                                </div>
                                <div className="ct2_content">
                                    <div className="ct2_contentBJ right"></div>
                                    <div id="r3Echarts_content"></div>
                                    
                                    {/* <div className="total">
                                        <span className="totalNum">{this.state.kanhuTotal[0].value + this.state.kanhuTotal[1].value}</span>
                                        <span>总数</span>
                                    </div> */}
                                    {/* <div className="legent_bg"></div>
                                    <span className="legendNum">{this.state.kanhuTotal[0].value}</span>
                                    <div className="legent_bg lg2"></div>
                                    <span className="legendNum ln2">{this.state.kanhuTotal[1].value}</span> */}
                                </div>

                            </div>
                           
                        </div>                 
                        <div className="Commissioneleven">
                            <div className="titles">
                                 <p>留置成本运行状态</p>
                             </div>
                             <div className="title2">
                                <p>总节省看护人次<span>{ConservePersonTotal}</span></p>
                            </div>
                             <div className="echats">
                                 <div id="jieshenhlist"  style={{ width: 400, height: 200,marginLeft:"40px",top:20}}></div>
                             </div>
                        </div>
                    </div>  
                    <footer>
                        <div className="footprint" onClick={()=>ToFooterPrint()}></div>
                    </footer>
                </div>
            </Fragment>
         );
    }
}
 
export default Commission ;