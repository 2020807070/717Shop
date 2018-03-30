import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './category.less'
import $http from '../../utils/http'
class Category extends Component {
    constructor() {
        super()
        this.state = ({
            activeIndex: 0,
            list: []
        })
        this.toSerch = this.toSerch.bind(this)
        this.changeInd = this.changeInd.bind(this)
    }
    componentDidMount(){
        $http.get('/category/categorySon', { sonId: 0 }).then(res => {
            this.setState({
                list: res
            })
        })
    }
    toSerch() {
        let { history } = this.props;
        history.push('./search')
    }
    changeInd(ind) {

        $http.get('/category/categorySon', { sonId: ind }).then(res => {
            this.setState({
                list: res
            })
        })



        this.setState({
            activeIndex: ind
        })

    }
    render() {
        let catList = ['家乡味道', '进口食品', '牛奶乳品', '休闲零食', '生鲜果蔬', '米面粮油', '调味调料', '酒水饮料']
        return <div id="category">
            <header>
                <p className="search"><span className="iconfont icon-magnifier"></span><input type="text" placeholder="请输入您要购买的商品" onFocus={this.toSerch} /></p>
            </header>
            <section>
                <ul className="left-ul">
                    {
                        catList.map((item, ind) => {
                            return <li key={ind} className={this.state.activeIndex == ind ? 'cate-active' : ''} onClick={() => { this.changeInd(ind) }}>{item}</li>
                        })
                    }
                </ul>
                <div className="right">
                    <div className="listWrap">
                        {
                            this.state.list.map((item, ind) => {
                                return <dl key={ind}>
                                    <dt>
                                        <img src={item.images} alt="" />
                                    </dt>
                                    <dd>{item.tit}</dd>
                                </dl>
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    }
}


export default Category