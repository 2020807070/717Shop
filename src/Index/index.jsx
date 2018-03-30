import React, { Component } from 'react'
import './index.less'
//弹框
import Toast from 'react-toast-mobile'
import { Redirect, Route, NavLink } from 'react-router-dom'
//二级路由
import RouterWrapper from '../components/routerWrapper'

import 'react-toast-mobile/lib/react-toast-mobile.css'
class Index extends Component {
    render() {
        let { childroute } = this.props;
        return <div id="index">
            <Toast></Toast>
            <div className="content">
                <RouterWrapper routers={childroute}></RouterWrapper>
            </div>
            <footer>
                <NavLink activeClassName="active" to="/index/home">
                    <i className="iconfont icon-icon--"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink activeClassName="active" to="/index/category">
                    <i className="iconfont icon-fenlei"></i>
                    <span>分类</span>
                </NavLink>
                <NavLink activeClassName="active" to="/index/cart">
                    <i className="iconfont icon-gouwuche"></i>
                    <span>购物车</span>
                </NavLink>
                <NavLink activeClassName="active" to="/index/mine">
                    <i className="iconfont icon-wode"></i>
                    <span>我的</span>
                </NavLink>
            </footer>
        </div>
    }
}


export default Index;