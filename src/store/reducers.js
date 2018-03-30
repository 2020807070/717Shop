import { combineReducers } from 'redux'


//添加购物车
export const ADD_CART = "ADD_CART"
//删除
export const DELETE_CART = "DELETE_CART"
//改变数量
export const UPDATE_DOOGS_COUNT = "UPDATE_DOOGS_COUNT"
//改变商品选中
export const UPDATE_DOOGS_SELECTED = "UPDATE_DOOGS_SELECTED"

let initState = {//默认值
    cart_list: []
}

function cart_list(state = initState.cart_list, action) {
    switch (action.type) {
        case ADD_CART:
            let flag = false;
            state.forEach((item, index) => {
                if (item.goods_id == action.data.goods_id) {
                    ++item.count;
                    flag = true;
                }
            })
            return flag ? [...state] : [...state, action.data];
            break;
        case UPDATE_DOOGS_COUNT:
            let arr = [...state]
            arr.forEach(item => {
                if (item.goods_id == action.id) {
                    item.count = action.data
                }
            })
            return arr;
            break;
        default: return state
    }
    return state
}

export default combineReducers({ 
    cart_list
})
