import React, { Component, Fragment } from 'react'
import $http from '../../utils/http'
import { getCookie } from '../../utils/utils'
import './goodComp.less'
import { Redirect, Route, NavLink } from 'react-router-dom'
import Lazyload from 'react-lazyload'
//弹框
import { T } from 'react-toast-mobile';
//
import { connect } from 'react-redux'
//类型ADD_CART
import { ADD_CART } from './../../store/reducers'



class GoodItem extends Component {
    constructor() {
        super()
        this.toDetail = this.toDetail.bind(this)
        this.addCart = this.addCart.bind(this)
    }
    render() {
        let { data } = this.props;
        return <dl className="dl" onClick={() => { this.toDetail(data.goods_id) }}>
            <dt><img src={require('../../static/img/loading.gif')} /></dt>
            <dd>
                <p className="good-detail">{data.info}</p>
                <p><b className="good-price">￥{data.price}</b><i className="iconfont icon-icon2" onClick={this.addCart}></i></p>
            </dd>
        </dl>
    }
    addCart(e) {
        e.stopPropagation()
        //判断是否有token 有登录了再去请求(待写)获取到this.props.location 23:57  15-1
        if (getCookie('token')) {
            $http.post('/user/Cart/addCart', {
                token:getCookie('token'),
                goods_id: this.props.data.goods_id
            }).then(res => {
                // toast.success(res.msg, {
                //     hideProgressBar: true,
                //     autoClose: 1000,
                //     position: "bottom-center"
                // })
                T.notify(res.msg)
                this.props.dispatch({
                    type: ADD_CART,
                    data:this.props.data
                })
            })

        } else {
            let { history, location } = this.props
            //回到离开的地方
            history.push('/login', {
                from: location.pathname
            })
        }


    }
    toDetail(goods_id) {
        this.props.history.push('/detail?goods_id=' + goods_id, {
            state: goods_id
        })
    }
}


export default connect(null)(GoodItem)