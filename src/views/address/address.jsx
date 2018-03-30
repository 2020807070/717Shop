import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './address.scss'

class Address extends Component {
    render() {
        return <div id="address">
            <header>
                <span className="iconfont icon-fanhui" onClick={() => { this.props.history.push("/index/mine") }}>返回</span>
                <span>收货地址</span>
                <span onClick={() => { this.props.history.push('/index/home') }}><i className="iconfont icon-icon--"></i></span>
            </header>
            <section>
                <button>✚新添加地址</button>
            </section>
        </div>
    }
}


export default Address