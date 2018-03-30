import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class CartItem extends Component {
    constructor() {
        super()
        this.state = {
            selectClass: "iconfont icon-xuanze-moren"
        }
        // this.toggleSelect = this.toggleSelect.bind(this)
    }
    render() {
        let { toggleSelect, updataCount, item } = this.props
        console.log(item.select)
        return (
            <li>
                <i className={item.select == "0" ? this.state.selectClass : 'iconfont icon-xuanze'} onClick={toggleSelect}></i>
                <p>
                    <img src={require('../../static/img/loading.gif')} alt="" />
                </p>
                <dl>
                    <dt>{item.info}</dt>
                    <dd>X{item.count}</dd>
                    <dd>￥{item.price}</dd>
                </dl>
                <div className="bgsb">
                    <b onClick={() => { updataCount(--item.count, item.goods_id) }}>-</b>
                    <b>{item.count}</b>
                    <b onClick={() => { updataCount(++item.count, item.goods_id) }}>+</b>
                </div>
            </li>
        )
    }
    // toggleSelect() {
    //     // let { selectClass } = this.state
    //     // this.setState({
    //     //     selectClass: selectClass == "iconfont icon-xuanze-moren" ? "iconfont icon-xuanze" : "iconfont icon-xuanze-moren"
    //     // })
    // }
}


export default CartItem