import React, { Components } from 'react'
import ReactDOM from 'react-dom'
//fontsize
import './utils/fontset.js'
import './static/css/reset.css'
import './static/css/common.css'
import './static/font/iconfont.css'
console.log(process.env)//当前环境
import { Provider } from 'react-redux'
import store from './store/store'
//引入路由
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import routers from './router/router.config'
import RouterWrapper from './components/routerWrapper'

import Toast from 'react-toast-mobile'

//视图
ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Redirect exact from="/" to="/index/home"></Redirect>
            <RouterWrapper routers={routers.routes}></RouterWrapper>
        </Switch>
    </BrowserRouter></Provider>, document.querySelector("#root"))




