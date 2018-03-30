import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './detail.less'
import { Redirect, Route, NavLink } from 'react-router-dom'
//引入轮播图
import SwiperComponent from '../../components/swiper/swiperCome.jsx'
class Detail extends Component {
    constructor() {
        super()
        this.state = {
            flag: true
        }

    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return <div id="detail">
            <header>
                <span className="iconfont icon-fanhui" onClick={() => { this.props.history.push("/index/home") }}>返回</span>
                <span>
                    <b onClick={() => { this.setState({ flag: true }) }}>商品</b>
                    <b onClick={() => { this.setState({ flag: false }) }}>详情</b></span>
                <span onClick={() => { this.props.history.push('/index/home') }}><i className="iconfont icon-icon--"></i></span>
            </header>
            <section>
                {
                   this.state.flag?<SwiperComponent></SwiperComponent>:<h1>商品详细页面</h1>
                }
            </section>
            <ul className="footer">
                <a href="http://wpa.qq.com/msgrd?v=3&uin=2020807070&site=qq&menu=yes">
                    <li>
                        <i className="iconfont icon-kefu"></i>
                        <span>客服</span>
                    </li>
                </a>
                <NavLink to="/index/cart">
                    <li>
                        <i className="iconfont icon-gouwuche"></i>
                        <span>购物车</span>
                    </li>
                </NavLink>
                <NavLink to="/index/cart">
                    <li>加入购物车</li>
                </NavLink>
                <NavLink to="/login">
                    <li>立即购买</li>
                </NavLink>
            </ul>
        </div>
    }
}


export default Detail