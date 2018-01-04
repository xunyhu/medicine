/**
 * Created by Jeff on 2016/11/19.
 */


//创建XHR对象
function createXHR() {
    if (window.XMLHttpRequest) { //IE7+, FF, 谷歌...
        return new XMLHttpRequest();
    }
    //IE6-
    return new ActiveXObject("Microsoft.XMLHTTP");
}


/*
 obj ={
 method: "get",
 url: "http://localhost:8080/ajax/checkname",
 data: {

 },
 async: true
 }
 */
//封装ajax函数
//obj: 是包含了请求方法, url, 是否是异步,...
function ajax(obj){

    //1, 创建xhr对象
    var xhr = createXHR();

    //2, open()
    //把参数对象: {regname:lisi, age: 33} 转换成参数字符串: regname=lisi&age=33
    obj.data = params(obj.data);
    if (/get/i.test(obj.method)) {
        obj.url += obj.data.length > 0 ? ("?"+obj.data) : "";
    }
    xhr.open(obj.method, obj.url, obj.async);

    //3, send()
    if (/get/i.test(obj.method)) { 
        xhr.send(null);
    }
    else { 
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(obj.data);
    }

    //4, onreadystatechange
    if (obj.async) { 
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                callback();
            }
        }
    }
    else {
        callback();
    }

    function callback() {
        if (xhr.status == 200) { 
            obj.success(xhr.responseText);
        }
        else { /
            obj.failure(xhr.status);
        }
    }

}

function params(dataObj) {
    var arr = [];
    for (var i in dataObj) {
        var str = i + "=" + dataObj[i]; //regname=lisi
        arr.push(str);
    }
    return arr.join("&");
}


