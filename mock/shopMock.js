const Mock = require('mockjs');
const fs = require('fs');

let data = Mock.mock({
    // "list|8":[
    //     {
            // 'id': () => Mock.mock('@increment(100)'),
            // 'title': () => Mock.mock('@csentence(3, 15)'),
            'list|30': [
                {
                    'goods_id': () => Mock.mock('@increment()'),
                    'info': () => Mock.mock('@csentence()'),
                    'src': () => Mock.mock('@color()'),
                    'price': () => Mock.mock('@float(1, 100, 1, 2)'),
                    'count': 1,
                    'select': 0
                }
            ]
    //     }
    // ]
})

fs.writeFileSync('../server/shopList.json', JSON.stringify(data));