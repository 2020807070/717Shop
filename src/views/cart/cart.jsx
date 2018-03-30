import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import './cart.scss'
import mapStateToProps from './state'
import { connect } from "react-redux"
import mapDispatchToProps from './dispatch'

class CartItem extends Component {
    constructor() {
        super()
        this.state = {
            selectClass: "iconfont icon-xuanze-moren"
        }
        this.toggleSelect = this.toggleSelect.bind(this)
    }
    render() {
        let { updataCount, item } = this.props
        console.log(item.select)
        return (
            <li>
                <i className={item.select == "0" ? this.state.selectClass : 'iconfont icon-xuanze'} onClick={this.toggleSelect}></i>
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
    toggleSelect() {
        let { selectClass } = this.state
        this.setState({
            selectClass: selectClass == "iconfont icon-xuanze-moren" ? "iconfont icon-xuanze" : "iconfont icon-xuanze-moren"
        })
    }
}
class Cart extends Component {
    constructor() {
        super()
    }
    render() {
        let { cartList, updataCount } = this.props;
        return <div id="cart">
            <header>
                <span></span>
                <span>购物车</span>
                <span>编辑</span>
            </header>
            {
                this.props.cartList.length != 0 ?
                    <Fragment>
                        <section>
                            <ul>
                                {
                                    cartList.map((item, index) => {
                                        return <CartItem key={index} item={item} updataCount={updataCount}></CartItem>
                                    })
                                }
                            </ul>
                        </section>
                        <div className="footer">
                            <span>
                                <i className="iconfont icon-xuanze-moren"></i>
                                全选
                            </span>
                            <ul>
                                <li>合计:￥0</li>
                                <li>(运费:￥0)</li>
                            </ul>
                            <button>
                                结算
                            </button>
                        </div>
                    </Fragment>
                    :
                    <section>
                        <dl className="cartNull">
                            <dt><i className="iconfont icon-gouwuche"></i></dt>
                            <dd>购物车为空</dd>
                            <dd><span>去逛逛</span></dd>
                        </dl>
                    </section>
            }
        </div>
    }
    componentDidMount() {
        console.log(this.props)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)