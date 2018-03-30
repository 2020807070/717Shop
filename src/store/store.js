import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'//中间件
import reducers from './reducers'

let store = createStore(reducers, applyMiddleware(logger))


export default store;