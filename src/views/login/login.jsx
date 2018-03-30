import React, { Component } from 'react'
import $http from '../../utils/http'
import './login.less'
import { ToastContainer, toast } from 'react-toastify';
class Login extends Component {
    constructor() {
        super()
        this.toLogin = this.toLogin.bind(this)
    }
    render() {
        return <div id="login">
            <ToastContainer></ToastContainer>
            <header>
                <span className="iconfont icon-fanhui" onClick={() => { this.props.history.push("/index/home") }}></span>
                <span>会员登录</span>
                <span onClick={() => { this.props.history.push("/register") }}>注册</span>
            </header>
            <section>
                <ul>
                    <li><span className="iconfont icon-yonghu"></span><input type="text" ref="username" placeholder="请输入你的手机号" /></li>
                    <li><span className="iconfont icon-mima"></span><input type="password" ref="password" placeholder="请输入你的密码" /></li>
                </ul>
                <button onClick={this.toLogin}>登录</button>
            </section>
        </div>
    }
    toLogin() {
        let { username, password } = this.refs;
        $http.post('/user/login', {
            username: username.value,
            password: password.value
        }).then(res => {
            if (res.code == 2) {
                this.props.history.push("/register")
                toast(res.msg)
            } else {
                if (res.code == 0) {
                    document.cookie = "token=" + res.token
                    //判断是否有值 没写(15-1-41:35)
                    let from = this.props.location.state ? this.props.location.state.from || 'index/home' : 'index/home'
                    this.props.history.push(from);
                }
                toast(res.msg)
            }
        })
    }
}


export default Login