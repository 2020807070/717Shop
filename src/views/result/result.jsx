import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './result.less'
//引入商品
import GoodItem from '../../components/goodsComp/goodComponent.jsx'

class Result extends Component {
    render() {
        return <div id="result">
            <header>
                <span className="iconfont icon-fanhui" onClick={() => { this.props.history.push("/index/search") }}></span>
                <div className="searchBox">
                    <p className="search">
                        <span className="iconfont icon-magnifier"></span>
                        <input type="text" ref="search_key" placeholder="请输入您要购买的商品" />
                    </p>
                </div>
            </header>
            <section>
                <br/><br/><br/><br/><br/><br/>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b>未找到该商品...</b>
                <br/><br/><br/><br/><br/><br/>
            </section>
            <section>
                
            </section>
        </div>
    }
}


export default Result;