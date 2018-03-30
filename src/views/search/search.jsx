import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './search.less'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            historysh: []
        }
        this.toSearch = this.toSearch.bind(this)
        this.delSh = this.delSh.bind(this)
        this.toResult = this.toResult.bind(this)
    }
    toSearch() {
        //搜索为空不执行
        if (!this.refs.search_key.value) return;
        let search_key = this.refs.search_key.value;
        if (localStorage.getItem('SearchHistory')) {
            let shArr = JSON.parse(localStorage.getItem('SearchHistory'))
            if (shArr.indexOf(search_key) > -1) return;
            shArr.push(search_key);
            localStorage.setItem('SearchHistory', JSON.stringify(shArr))
        } else {
            localStorage.setItem('SearchHistory', JSON.stringify([search_key]))
        }
        this.toResult(search_key);
    }
    toResult(key) {
        this.props.history.push('/index/result', {
            search_key: key
        })
    }
    delSh() {
        localStorage.clear('SearchHistory')
        this.setState({
            historysh: []
        })
    }
    render() {
        let { historysh } = this.state
        return <div id="search">
            <header>
                <div className="searchBox">
                    <p className="search"><span className="iconfont icon-magnifier"></span><input type="text" ref="search_key" placeholder="请输入您要购买的商品" /></p>
                </div>
                <p onClick={this.toSearch}>搜索</p>
            </header>
            <section>
                <p>最近搜索 <span className="iconfont icon-iconset0213" onClick={this.delSh}></span></p>
                {historysh.length == 0 ? <p>暂无搜索记录...</p> :
                    <ol>
                        {
                            this.state.historysh.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ol>
                }
            </section>
            <section>
                <p>大家都在搜</p>
                <ol>
                    <li>粽子</li>
                    <li>果冻</li>
                    <li>薯片</li>
                </ol>
            </section>
            <section></section>
        </div>
    }
    componentDidMount() {
        if (localStorage.getItem('SearchHistory')) {
            this.setState({
                historysh: JSON.parse(localStorage.getItem('SearchHistory'))
            })
        }
    }
}


export default Search