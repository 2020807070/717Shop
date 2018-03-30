import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './setting.scss'
import { loginOut,getCookie } from '../../utils/utils'
class Setting extends Component {
    constructor() {
        super()
        this.login_out = this.login_out.bind(this)
    }
    render() {
        return <div id="setting">
            <header>
                <span className="iconfont icon-fanhui" onClick={() => { this.props.history.push("/index/mine") }}></span>
                <span>设置</span>
                <span></span>
            </header>
            <section>
                
                <ul>
                    <li><span>我的头像</span><span><i className="iconfont icon-you"></i></span></li>
                    <li><span>用户名</span><span>{getCookie('token')}<i className="iconfont icon-you"></i></span></li>
                </ul>
                <button onClick={this.login_out}>退出登录</button>
            </section>
        </div>
    }
    login_out() {
        //没有作用
        loginOut()
        this.props.history.push('/index/home')
    }
}


export default Setting