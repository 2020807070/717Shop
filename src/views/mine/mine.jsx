import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './mine.scss'

class Mine extends Component {
    render() {
        return <div id="mine">
            <header>
                <span onClick={() => { this.props.history.push('/setting') }}> <i className="iconfont icon-shezhi"></i> </span>
                <span>我的717商城</span>
                <span></span>
            </header>
            <section>
                <dl className="userInfo">
                    <dt><img src={require('../../static/img/user.png')} alt="" /></dt>
                    <dd>郝陈晨</dd>
                </dl>
                <ul className="ul h">
                    <li><span><i className="iconfont icon-icon--"></i>我的店铺</span><span><i className="iconfont icon-you"></i></span></li>
                </ul>
                <ul className="uls">
                    <li>
                        <i className="iconfont icon-daifukuan"></i>
                        <span>待付款</span>
                    </li>
                    <li>
                        <i className="iconfont icon-daifahuo"></i>
                        <span>待发货</span>
                    </li>
                    <li>
                        <i className="iconfont icon-daishouhuo"></i>
                        <span>待收货</span>
                    </li>
                    <li>
                        <i className="iconfont icon-shouhou"></i>
                        <span>售后</span>
                    </li>
                    <li>
                        <i className="iconfont icon-wodedingdan"></i>
                        <span>我的订单</span>
                    </li>
                </ul>
                <ul className="ul">
                    <li><span><i className="iconfont icon-icon--"></i>我的店铺</span><span><i className="iconfont icon-you"></i></span></li>
                    <li onClick={() => { this.props.history.push('/index/address') }}><span><i className="iconfont icon-weizhi"></i>地址管理</span><span><i className="iconfont icon-you"></i></span></li>
                </ul>
            </section>
        </div>
    }
}


export default Mine