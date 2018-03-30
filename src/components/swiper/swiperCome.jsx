import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
let img2 = require('../../static/img/banner2.png')
class SwiperComponent extends Component {
    render() {
        return <div className="swiper-container" ref="SwpDom">
            <div className="swiper-wrapper">
                <div className="swiper-slide"><img src={require('../../static/img/banner1.png')} alt="" /></div>
                <div className="swiper-slide"><img src={img2} alt="" /></div>
                <div className="swiper-slide"><img src={require('../../static/img/banner3.png')} alt="" /></div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    }
    componentDidMount() {
        new Swiper(this.refs.SwpDom, {
            autoplay: true,
            loop: 1000,
            pagination:{
                el:".swiper-pagination"
            }
        })
    }
}


export default SwiperComponent