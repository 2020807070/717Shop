export function getCookie(name) {
    let cookieStr = document.cookie;
    if (cookieStr.length == 0) return;
    let arr;
    let res = null;
    if (cookieStr.indexOf(';') > -1) {
        arr = cookieStr.split('; ');
        arr.forEach((cookie) => {
            let tmp_arr = cookie.split('=')
            if (tmp_arr[0] == name) {
                res = tmp_arr[1]
            }
        })
    } else {
        let tmp_arr = cookieStr.split('=')
        if (tmp_arr[0] == name) {
            res = tmp_arr[1]
        }
    }
    return res
}


export function loginOut() {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie = "token=" + getCookie('token') + ';expires=' + exp.toUTCString();
    
}