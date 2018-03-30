import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getCookie } from '../utils/utils'
function isLogin() {
    return !!getCookie('token')
}
class RouterWrapper extends Component {
    render() {
        const { routers } = this.props;
        return routers.map((item, index) => {
            return <Route exact={item.exact} key={index} path={item.path} render={(location) => {
                return item.authorization && !isLogin() ?
                    <Redirect to={{pathname:"/login",state:{from:item.path}}}></Redirect>
                    :
                    <item.component {...location} childroute={item.children}></item.component>
            }}></Route>
        })
    }
}


export default RouterWrapper