import React, { Component } from 'react'
import {Common} from './map3d'
import './style.scss'
export default class index extends Component {
    componentDidMount(){
        Common.openClick()
        // Common.SetResolution()
        //this.requestFullScreen();
    window.onkeydown = function(event){
         console.log(event)
        setTimeout(function () {
            Common.SetResolution('mapvision3d') 
        },1000)
    };

    } 
    render() {
        return (
            <div id= 'mapvision3d' ></div>
        )
    }
}
