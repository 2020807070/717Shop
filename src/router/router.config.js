import React, { Component } from 'react'
import Index from '../index/index'
import Home from '../views/home'
import Detail from '../views/detail'
import Login from '../views/login'
import Register from '../views/register'
import Cart from '../views/cart'
import Category from '../views/category'
import Mine from '../views/mine'
import Setting from '../views/setting'
import Search from '../views/search'
import Result from '../views/result'
import Address from '../views/address'
import NoMatch from '../views/_404/nomatch.jsx'
let routers = {
    routes: [
        {
            path: '/detail',
            component: Detail,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/setting',
            component: Setting
        },
        {
            path: '/index',
            component: Index,
            // exact: true,
            children: [
                {
                    path: '/index/home',
                    component: Home
                },
                {
                    path: '/index/category',
                    component: Category
                },
                {
                    path: '/index/cart',
                    component: Cart,
                    authorization:true
                },
                {
                    path: '/index/mine',
                    component: Mine,
                    authorization:true
                },
                {
                    path: '/index/search',
                    component: Search
                },
                {
                    path: '/index/result',
                    component: Result
                },
                {
                    path: '/index/address',
                    component: Address
                }
            ]
        }
    ]
}



export default routers;