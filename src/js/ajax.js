// 用来将对象转换为url参数形式的字符串
(function (obj) {
    function transferStr (res) {
        var arr = [];
        for (var key in res) {
            arr.push(key + '=' + res[key]);
        }
        return arr.join('&');
    }

    obj.ajaxFn = function (thing) {
        var type = thing.type || 'get';
        var url = thing.url;
        var data = thing.data;
        console.log(data);
        var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        if (type.toLowerCase() == 'get') {
            ajax.open(type, url + '?' + transferStr(data), true);
            ajax.send();
        } else if (type.toLowerCase() == 'post') {
            ajax.open(type, url, true);
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.send(transferStr(data));
        }
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status >= 200 && ajax.status <= 206 || ajax.status == 304){
                    // 成功
                    // ajax.responseText
                    thing.successFn(ajax.responseText);
                }else {
                    // 失败
                    thing.errorFn('请求失败');
                }
            }
        }
    }
      window.ajax = obj;
})(window.ajax || {})

