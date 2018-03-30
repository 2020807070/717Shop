import React, { Component } from 'react'
import $http from '../../utils/http'
import SwiperComponent from '../../components/swiper/swiperCome.jsx'
import './home.scss'
//引入商品
import GoodItem from '../../components/goodsComp/goodComponent.jsx'
class Home extends Component {
    constructor() {
        super()
        this.state = {
            goodslist: []
        }
        this.toSerch = this.toSerch.bind(this)
        this.getScroll = this.getScroll.bind(this)
    }
    toSerch() {
        let { history } = this.props;
        history.push('./search')
    }
    render() {
        return <div id="home" onScroll={this.getScroll} ref="scroller">
            <div ref="doc">
                <header>
                    <p className="logo"><img src={require('../../static/img/logo.gif')} alt="" /></p>
                    <p className="search"><span className="iconfont icon-magnifier"></span><input type="text" placeholder="请输入您要购买的商品" onFocus={this.toSerch} /></p>
                    <dl>
                        <dt><span className="iconfont icon-shouyedianpujishishangcheng"></span></dt>
                        <dd>我的店铺</dd>
                    </dl>
                </header>
                <SwiperComponent></SwiperComponent>
                <section>
                    <dl>
                        <dt><img src={require('../../static/img/1.png')} alt="" /></dt>
                        <dd>家乡味道</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/2.png')} alt="" /></dt>
                        <dd>进口食品</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/3.png')} alt="" /></dt>
                        <dd>牛奶饮品</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/4.png')} alt="" /></dt>
                        <dd>休闲零食</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/5.png')} alt="" /></dt>
                        <dd>生鲜果蔬</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/6.png')} alt="" /></dt>
                        <dd>米面粮油</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/7.png')} alt="" /></dt>
                        <dd>调味调料</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/8.png')} alt="" /></dt>
                        <dd>酒水饮料</dd>
                    </dl>
                </section>
                <div className="goods-list">
                    {
                        this.state.goodslist.map((item, index) => {
                            return <GoodItem key={index} data={item} history={this.props.history} location={this.props.location}></GoodItem>
                        })
                    }
                </div>
            </div>
        </div>
    }
    componentDidMount() {
        $http.post('/mall/index/getGoodsChannel', { channel_id: 1 })
            .then(res => {
                this.setState({
                    //数组截取 默认展示六个
                    goodslist: res.list.slice(0, 6)
                })
            })
    }
    getScroll() {
        let { scroller, doc } = this.refs;
        let st = scroller.scrollTop;
        let sw = scroller.offsetHeight;
        let dh = doc.offsetHeight;
        console.log(dh - (st + sw))
        console.log(this.refs.scroller.scrollTop)
    }
}

export default Home;