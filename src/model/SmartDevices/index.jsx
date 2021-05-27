import React, { Component } from 'react';
// import Socekt from '../../Socekt'
import './style.scss'
class SmartDevices extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            socketDate:[]
         }
        //  this.taskRemindInterval = null;
       SmartDevices.this=this
    }
    //  //渲染前调用
    // componentDidMount = () => {
    //     //    判断专家是否登录
       
    //     });
    componentDidMount = () => {
        let baseUrl="ws://192.168.0.211:8099";
        let webSocket = new WebSocket(baseUrl)
        webSocket.onopen = function (e) {
            console.log('webSocket is open');
            webSocket.send('subscribe')
        }
        if (webSocket.onmessage === null) {
            webSocket.onmessage = this.webfunction;
           
        }
    }
    webfunction(e){
        // console.log(e,22222) 没连上  我的问题？我的？和之前一模一样  之前 可以postaman 有信息过来，你过来我给你说
        console.log(e.data,'接收到的风格化法国的黄金分割信息');
        var result=e.data
         result=JSON.parse(result)
        // var name=result.status
        // var factoryName=result.factoryName
    
        SmartDevices.this.setState({
            socketDate:result
        })
        // 写一个页面渲染下数据 什么页面亲
        // 随便，些啥都行，最好是一个 表格，可以放 上面的这些信息
       // 在哪里下写
        // 写在哪里都行，只要能展示就行

    }

    //卸载时调用
  

    render() { 
        const {socketDate}=this.state
        return ( 
            <div className="zhihuui">
            
                <table border="1" color="#004789">
                <tr>
                <th>车牌号</th>
                <th>所属工厂机构</th>
                <th>出入门禁</th>
                <th>出品产地</th>
                <th>出入时间</th>
                <th>状态</th>
                </tr>
                <tr>
                <td>
                    {socketDate.vehicleCode}
                </td>
                <td>{socketDate.factoryName}</td>
                <td>{socketDate.unloadingDoor}</td>
                <td>{socketDate.productName}</td>
                <td>2021-04-06 14：25：30</td>
                <td>{socketDate.status}</td>
                </tr>
                </table>
            </div>
         );
    }
}
 
export default SmartDevices;