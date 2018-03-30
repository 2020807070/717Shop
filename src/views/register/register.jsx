import React, { Component } from 'react'
import $http from '../../utils/http'
import './register.less'
import { ToastContainer,toast } from 'react-toastify';
class Register extends Component {
    constructor() {
        super()
        this.toRegister = this.toRegister.bind(this)
        this.toGet = this.toGet.bind(this)
    }
    render() {
        return <div id="register">
            <ToastContainer></ToastContainer>
            <header>
                <span className="iconfont icon-fanhui" onClick={() => { this.props.history.push("/index/home") }}></span>
                <span>会员注册</span>
                <span onClick={() => { this.props.history.push("/login") }}>登录</span>
            </header>
            <section>
                <ul>
                    <li><span className="iconfont icon-yonghu"></span><input type="text" ref="username" placeholder="请输入你的手机号" /></li>
                    <li><span className="iconfont icon-dunpaisuo"></span><input type="text" placeholder="请输入手机验证码" /><b onClick={this.toGet}>获取验证码</b></li>
                    <li><span className="iconfont icon-mima"></span><input type="password" ref="password" placeholder="请输入你的密码" /></li>
                </ul>
                <button onClick={this.toRegister}>注册</button>
            </section>
        </div>
    }
    toRegister() {
        let { username, password } = this.refs;
        $http.post('/user/register', {
            username: username.value,
            password: password.value
        }).then(res => {
            if (res.code == 0) {
                this.props.history.push("/login")
                toast(res.msg)
            } else {
                toast(res.msg)
            }
        })
    }
    toGet(){
        
    }
}


export default Register