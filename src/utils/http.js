//通源策略 1.协议相同 2.域名  3.端口

let domin;
if (process.env == "development") {
    domin = "http://localhost:9000"
}
if (process.env == "production") {
    domin = "http://www.lb717.com"
}



let $http = {
    get(url, data) {
        if (Object.prototype.toString.call(data) != "[object Object]") {
            return {
                then(callback) {
                    callback('GET请求入参格式不正确')
                    return {
                        catch(err) {
                            err(new Error('入参格式不正确'))
                        }
                    }
                }
            };
        }
        let queryString = "?"
        for (let i in data) {
            queryString += (i + "=" + data[i] + "&")
        }
        //编码处理
        url = encodeURI(url + queryString.slice(0, -1));

        return fetch(domin+url, {
            headers: {
                "Content-Type": "application/json;charset-utf-8"
            }
        }).then(res => res.json())
    },
    post(url, data) {
        if (Object.prototype.toString.call(data) != "[object Object]") {
            return {
                then(callback) {
                    callback('GET请求入参格式不正确')
                    return {
                        catch(err) {
                            err(new Error('入参格式不正确'))
                        }
                    }
                }
            };
        }


        return fetch(domin + url, {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            method: "POST"
        }).then(res => res.json())
    }
}
export default $http;